// U2T9 - ENTREGABLE FINAL - Tipo de datos
// Suponemos que cualquier cadena que contenga una letra, se considera carácter.

// Inicializamos variables
let pregunta;
let parsedIntPregunta;

do {
    pregunta = prompt("Introduzca un dato:");
    parsedIntPregunta = parseInt(pregunta);

    // Comprobamos null
    if (pregunta==null) {
        alert("Programa terminado");
        break;
    }
    // Comprobamos cadena vacía
    if (pregunta==="") {
        alert("El dato introducido es una cadena vacía");
    // Comprobamos valor númerico
    } else if (!isNaN(pregunta)) {
            if (parsedIntPregunta===0) {
                alert("El dato introducido es un número igual a 0");
            } else if (parsedIntPregunta<100) {
                alert("El dato introducido es un número menor que 100");
            } else if (parsedIntPregunta>=100) alert("El dato introducido es un número mayor o igual que 100");
    // Comprobamos carácter
    } else alert("El dato introducido es un carácter");
} while(pregunta!=null);

// Daniel Vilar Martínez