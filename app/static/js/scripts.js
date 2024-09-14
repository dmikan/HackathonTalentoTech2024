document.addEventListener('DOMContentLoaded', function() {
    const plantNameCell = document.getElementById('plantName');
    const nutrientStatusCell = document.getElementById('nutrientStatus');
    const plantDetailsCell = document.getElementById('plantDetails');

    function fetchPredictions() {
        fetch('/get_predictions')
            .then(response => response.json())
            .then(data => {
                plantNameCell.textContent = data.plantName;
                nutrientStatusCell.textContent = data.nutrientStatus;

                // Display detailed information based on the nutrient status
                let details = '';
                switch (data.nutrientStatus) {
                    case 'Deficiencia de Potasio (K)':
                        details = 'Las plantas con deficiencia de potasio suelen mostrar bordes quemados en las hojas y un crecimiento reducido.';
                        break;
                    case 'Deficiencia de Magnesio (Mg)':
                        details = 'La deficiencia de magnesio se manifiesta por la aparición de manchas en las hojas y un amarillamiento general.';
                        break;
                    case 'Deficiencia de Nitrogeno (N)':
                        details = 'La falta de nitrógeno provoca hojas amarillas y crecimiento débil en las plantas.';
                        break;
                    case 'Planta saludable':
                        details = 'La planta parece estar en buenas condiciones.';
                        break;
                    default:
                        details = 'Información no disponible.';
                }
                plantDetailsCell.textContent = details;
            })
            .catch(error => console.error('Error al obtener predicciones:', error));
    }

    setInterval(fetchPredictions, 5000);
});
