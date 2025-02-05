/*
function abrirCarta() {
    document.querySelector('.carta').classList.toggle('abierta');
}
*/
function abrirCarta() {
    let carta = document.querySelector('.carta');
    carta.classList.toggle('abierta');

    // Efecto de sonido al abrir la carta
    let audio = new Audio('carta.mp3'); // Asegúrate de tener un archivo de sonido llamado carta.mp3
    audio.play();
}


function crearCorazon() {
    const corazon = document.createElement("div");
    corazon.innerHTML = "❤️";
    corazon.classList.add("corazon");
    document.body.appendChild(corazon);

    corazon.style.left = Math.random() * 100 + "vw";
    corazon.style.animationDuration = Math.random() * 2 + 3 + "s";

    setTimeout(() => {
        corazon.remove();
    }, 5000);
}

setInterval(crearCorazon, 500);
