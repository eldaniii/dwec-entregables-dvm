// U2T3 - ENTREGABLE 3 - Adivina el número

// Inicializamos variables
let numero = Math.floor(Math.random() * 10 + 1);
let intentos = 1;
let pregunta;
let intentoNumero;

do {
    // Pregunta por el número, si cancelo la ventana sale de la aplicación
    pregunta = prompt("¿Qué número se ha generado?");
    intentoNumero = parseInt(pregunta);
    if (pregunta==null) {
        alert("Has cancelado el juego");
        break;
    }; 
    // Si no es un número pide que lo introduzca de nuevo
    if (isNaN(intentoNumero)===true) {
        do {
            pregunta=prompt("ERROR!\nIntroduzca de nuevo el número");
            intentoNumero = parseInt(pregunta);
        } while (pregunta!==null);
        if (pregunta==null) {
            alert("Has cancelado el juego");
            break;
        }; 
    } else {
        // Comprueba si se acerto el número
        if(intentoNumero===numero) alert("Acertaste el número!! Realizaste "+intentos+" intentos para averiguarlo");
        // Comprueba si el número introducido fue mayor o menor, lo muestra en pantalla y suma un intento
        else {
            if (intentoNumero>numero) {
                alert("El número es menor que "+intentoNumero);
            } else {
                alert("El número es mayor que "+intentoNumero);
            };
            intentos++;
        };
    };
} while(pregunta!==null && intentoNumero!==numero);

// Daniel Vilar Martínez