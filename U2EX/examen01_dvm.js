// Examen - Ejercicio 01 - 2024-2025: RA2

// Inicializamos variables
const numEtiquetas = 120;
let intentos = 1;
let pregunta;
let preguntaParsedInt;

do {
    pregunta=prompt("Adivina el número de etiquetas distintas que hay en HTML");
    preguntaParsedInt=parseInt(pregunta);

    // Comprobamos si es cadena vacía
    if(pregunta==="") {
        alert("ERROR: No se aceptan valores vacíos.\nFin del programa");
        break;
    }

    // Comprobamos si es null
    if(pregunta===null) {
        if(confirm("¿Quiere cancelar la ejecución?")) {
            alert("Fin del programa");
            break;
        } else continue;
    }

    // Comprobamos que la respuesta sea un número
    if(!isNaN(pregunta)) {
        if(preguntaParsedInt===numEtiquetas) {
            console.log("Intento número "+intentos);
            alert("Enhorabuena, has acertado el número de etiquetas que hay! Solamente has realizado "+intentos+" intentos.\nFin del programa")
        } else if(preguntaParsedInt<numEtiquetas) {
            console.log("Intento número "+intentos);
            alert("El número que has introducido es menor que el número de etiquetas");
            intentos++;
        } else if(preguntaParsedInt>numEtiquetas) {
            console.log("Intento número "+intentos);
            alert("El número que has introducido es mayor que el número de etiquetas");
            intentos++;
        };
    } else {alert("ERROR: Introduce un valor númerico, no texto");}; // Damos el error de que no se admiten cadenas
} while(preguntaParsedInt!==numEtiquetas);

// Daniel Vilar Martínez

