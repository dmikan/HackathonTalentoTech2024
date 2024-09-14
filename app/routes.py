from app import app
from flask import render_template, Response
import cv2
import numpy as np
from tensorflow.keras.models import load_model
from tensorflow.keras.applications.inception_v3 import preprocess_input

model_seedling = load_model('seedling_detection.keras')
model_nutrient = load_model('nutrient_deficiency_detection.h5')

etiquetas_clases = ["Alopecurus myosuroides", "Apera spica-venti", "Beta vulgaris", 
                    "Capsella bursa-pastoris", "Chenopodium album", "Galium aparine", 
                    "Geranium pusillum", "Matricaria perforata", "Sinapis arvensis", 
                    "Stellaria media", "Triticum aestivum", "Zea mays"]

etiquetas_nutrient = ["Deficiencia de Potasio (K)", "Deficiencia de Magnesio (Mg)",
                      "Deficiencia de Nitrogeno (N)", "Planta saludable"]

def gen():
    cap = cv2.VideoCapture(0)
    while True:
        ret, frame = cap.read()
        if not ret:
            break
        
        # Preprocesado de la imagen para ambos modelos
        resized_frame = cv2.resize(frame, (299, 299))
        preprocessed_frame = preprocess_input(np.expand_dims(resized_frame, axis=0))
        
        # Predicción de la especie de plántula
        predictions_seedling = model_seedling.predict(preprocessed_frame, verbose=0)
        clase_predicha_seedling = np.argmax(predictions_seedling, axis=1)
        probabilidad_seedling = np.max(predictions_seedling, axis=1)
        etiqueta_seedling = etiquetas_clases[clase_predicha_seedling[0]]
        color_seedling = (0, 0, 255) if probabilidad_seedling[0] < 0.5 else (0, 255, 0)
        texto_prediccion_seedling = f'{etiqueta_seedling}: {probabilidad_seedling[0]*100:.2f}%'
        
        # Predicción de la deficiencia nutricional
        predictions_nutrient = model_nutrient.predict(preprocessed_frame, verbose=0)
        clase_predicha_nutrient = np.argmax(predictions_nutrient, axis=1)
        probabilidad_nutrient = np.max(predictions_nutrient, axis=1)
        etiqueta_nutrient = etiquetas_nutrient[clase_predicha_nutrient[0]]
        color_nutrient = (0, 0, 255) if probabilidad_nutrient[0] < 0.5 else (0, 255, 0)
        texto_prediccion_nutrient = f'Deficiencia: {etiqueta_nutrient} ({probabilidad_nutrient[0]*100:.2f}%)'
        
        # Mostrar las predicciones en la pantalla
        cv2.putText(frame, texto_prediccion_seedling, (10, 30), cv2.FONT_HERSHEY_SIMPLEX, 1, color_seedling, 2, cv2.LINE_AA)
        cv2.putText(frame, texto_prediccion_nutrient, (10, 70), cv2.FONT_HERSHEY_SIMPLEX, 1, color_nutrient, 2, cv2.LINE_AA)

        ret, buffer = cv2.imencode('.jpg', frame)
        frame = buffer.tobytes()

        yield (b'--frame\r\n'
               b'Content-Type: image/jpeg\r\n\r\n' + frame + b'\r\n')

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/video_feed')
def video_feed():
    return Response(gen(), mimetype='multipart/x-mixed-replace; boundary=frame')
