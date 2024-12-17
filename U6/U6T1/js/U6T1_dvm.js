// U6T1 - Entregable 1 - Ejercicio bombillas

function cambia_imagen() {
    // Inicializamos variables dentro de la función
    let bombilla=document.getElementById('bombilla');
    let boton=document.getElementById('boton');

    // Cambiamos imagen y texto según esté encendida o no
    if (bombilla.src.includes("encendida.png")) {
        bombilla.src="img/apagada.png"; 
        boton.textContent="ENCENDER";
    } else {
        bombilla.src="img/encendida.png"; 
        boton.textContent="APAGAR"; 
    };
};

// Daniel Vilar Martínez