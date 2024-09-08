from app import app
from flask import render_template, Response
import cv2
import numpy as np
from tensorflow.keras.models import load_model
from tensorflow.keras.applications.inception_v3 import preprocess_input

model = load_model('model_inception_v3_fine_tuning.keras')

etiquetas_clases = ["Alopecurus myosuroides", "Apera spica-venti", "Beta vulgaris", 
                    "Capsella bursa-pastoris", "Chenopodium album", "Galium aparine", 
                    "Geranium pusillum", "Matricaria perforata", "Sinapis arvensis", 
                    "Stellaria media", "Triticum aestivum", "Zea mays"]

def gen():
    # cap = cv2.VideoCapture(2)
    cap = cv2.VideoCapture('http://192.168.1.6:4747/video')

    while True:
        ret, frame = cap.read()
        if not ret:
            break
        
        resized_frame = cv2.resize(frame, (299, 299))
        preprocessed_frame = preprocess_input(np.expand_dims(resized_frame, axis=0))
        predictions = model.predict(preprocessed_frame, verbose=0)
        clase_predicha = np.argmax(predictions, axis=1)
        probabilidad = np.max(predictions, axis=1)
        etiqueta = etiquetas_clases[clase_predicha[0]]
        color = (0, 0, 255) if probabilidad[0] < 0.5 else (0, 255, 0)
        texto_prediccion = f'{etiqueta}: {probabilidad[0]*100:.2f}%'

        cv2.putText(frame, texto_prediccion, (10, 30), cv2.FONT_HERSHEY_SIMPLEX, 1, color, 2, cv2.LINE_AA)

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
