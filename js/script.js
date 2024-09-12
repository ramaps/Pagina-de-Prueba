document.addEventListener('DOMContentLoaded', function() {
    let diapositivas = document.querySelectorAll('.diapositiva');
    let indiceActual = 0;

    function mostrarDiapositiva(indice) {
        diapositivas.forEach((diapositiva, i) => {
            diapositiva.style.display = (i === indice) ? 'block' : 'none';
        });
    }

    function siguienteDiapositiva() {
        let diapositivaActual = diapositivas[indiceActual];
        if (diapositivaActual.querySelector('video')) {
            let video = diapositivaActual.querySelector('video');
            video.onended = () => {
                indiceActual = (indiceActual + 1) % diapositivas.length;
                mostrarDiapositiva(indiceActual);
                setTimeout(siguienteDiapositiva, 3000); // Espera 3 segundos antes de mostrar la siguiente diapositiva
            };
            video.play();
        } else {
            setTimeout(() => {
                indiceActual = (indiceActual + 1) % diapositivas.length;
                mostrarDiapositiva(indiceActual);
                siguienteDiapositiva();
            }, 3000);
        }
    }

    mostrarDiapositiva(indiceActual);
    siguienteDiapositiva();
});