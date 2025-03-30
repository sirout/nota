function abrirCarta() {
    let carta = document.querySelector('.carta');
    carta.classList.toggle('abierta');

    // Efecto de sonido al abrir la carta
    let audio = new Audio('audio.mp3');
    audio.play().catch(error => console.log("Error al reproducir el sonido", error));
}

function responderWhatsapp(respuesta) {
    let numeroWhatsapp = "+528994677401"; // Reemplaza con tu número de WhatsApp
    let mensaje = encodeURIComponent(`Hola! Mi respuesta es: ${respuesta}`);
    let url = `https://wa.me/${numeroWhatsapp}?text=${mensaje}`;

    window.open(url, "_blank");
}

function crearCorazon() {
    const corazon = document.createElement("div");
    corazon.innerHTML = "❤️";
    corazon.classList.add("corazon");

    document.body.appendChild(corazon);

    corazon.style.left = Math.random() * 100 + "vw";
    corazon.style.animationDuration = (Math.random() * 2 + 3) + "s"; 

    setTimeout(() => {
        corazon.remove();
    }, 5000);
}

setInterval(crearCorazon, 1000);
