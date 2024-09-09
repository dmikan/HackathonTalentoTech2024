document.addEventListener('DOMContentLoaded', function() {
    const videoFeed = document.getElementById('videoFeed');
    const toggleButton = document.getElementById('toggleButton');

    toggleButton.addEventListener('click', function() {
        if (videoFeed.style.display === 'none') {
            videoFeed.style.display = 'block';
            toggleButton.textContent = 'Ocultar Video';
        } else {
            videoFeed.style.display = 'none';
            toggleButton.textContent = 'Mostrar Video';
        }
    });
});
