// U2T1 - ENTREGABLE 1a - Ventanas (prompt) y condicionales

let pregunta = prompt("¿Está seguro de que quiere hacer esto?");

// Comprobamos si la respuesta es null y si no comprobamos que efectivamente introduzca texto y lo mostramos
if (pregunta === null) {
    alert("Ha rehusado contestar");
} else {
    if (typeof pregunta == "string") {
        alert("Ha respondido " + pregunta);
    }
}

// Daniel Vilar Martínez