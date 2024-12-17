// U2T1 - ENTREGABLE 1b - Ventanas (prompt) y condicionales
// Suponemos que siempre se introduce un valor numérico

let pregunta = prompt("¿Qué densidad tiene el material elegido (g/cm3)?");

// Comprobamos si la respuesta es null y si no parseamos la densidad y comprabamos si es mayor o menor que 1
if (pregunta === null) {
    alert("Has decidido no calcular densidades");
} else {
    let densidad = parseFloat(pregunta);

    if (densidad <= 1) {
        alert("Se hunde en el agua");
    } if (densidad > 1) {
        alert("Flota en el agua");
    }
}

// Daniel Vilar Martínez