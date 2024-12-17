// Examen - Ejercicio 01 - 2024-2025: RA2

// Inicializamos variables
const numEtiquetas = 120;
let intentos = 1;
let intentosMax = 5;
let pregunta;
let preguntaParsedInt;

do {
    pregunta=prompt("Adivina el número de etiquetas distintas que hay en HTML");
    preguntaParsedInt=parseInt(pregunta);

    // Comprobamos si se introduce un número entre el rango de 0 a 1000
    if(preguntaParsedInt<0 || preguntaParsedInt>1000) {
        alert("ERROR: Debe ser un número comprendido entre 0 y 1000");
        continue;
    }

    // Comprobamos si se introduce una cadena vacía y salimos del programa
    if(pregunta==="") {
        alert("ERROR: No se aceptan valores vacíos.\nFin del programa");
        break;
    }

    // Comprobamos si es null y preguntamos para salir
    if(pregunta===null) {
        if(confirm("¿Quiere cancelar la ejecución?")) {
            alert("Fin del programa");
            break;
        } else continue;
    }

    // Comprobamos que la respuesta sea un número e informamos del resultado 
    if(!isNaN(pregunta)) {
        if(preguntaParsedInt===numEtiquetas) {
            console.log("Intento número "+intentos);
            alert("Enhorabuena, has acertado el número de etiquetas que hay! Solamente has realizado "+intentos+" intentos\nFin del programa")
        } else if(preguntaParsedInt<numEtiquetas) {
            console.log("Intento número "+intentos);
            alert("El número que has introducido es menor que el número de etiquetas");
            // Comprobamos los intentos y si se alcanzo el máximo salimos del programa
            if(intentos===intentosMax) {
                alert("ERROR: Has alcanzado el número máximo de intentos: "+intentosMax+"\nFin del programa");
                break;
            };
            intentos++;
        } else if(preguntaParsedInt>numEtiquetas) {
            console.log("Intento número "+intentos);
            alert("El número que has introducido es mayor que el número de etiquetas");
            // Comprobamos los intentos y si se alcanzo el máximo salimos del programa
            if(intentos===intentosMax) {
                alert("ERROR: Has alcanzado el número máximo de intentos: "+intentosMax+"\nFin del programa");
                break;
            };
            intentos++;
        };
    } else {alert("ERROR: Introduce un número, no texto");}; // Damos el error de que no se admiten cadenas
} while(preguntaParsedInt!==numEtiquetas && intentos<=intentosMax);

// Daniel Vilar Martínez

