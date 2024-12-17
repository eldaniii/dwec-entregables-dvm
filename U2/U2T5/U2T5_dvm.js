// U2T5 - ENTREGABLE 5 - Letra del DNI
// Supondremos que mientras que no quede vacío, el número de DNI introducido es válido

// Inicializamos variables
let pregunta;
let dni;
let letraDni;
const cadenaDni = "TRWAGMYFPDXBNJZSQVHLCKE";

do {
    // Controlamos que no se introduzca un valor vacío y suponemos que se introducirá un nº de DNI válido
    pregunta=prompt("Introduzca el número de su DNI (no puede estar vacío):");

    // Si no es válido saltamos a la siguiente iteración
    if (pregunta==="" && pregunta!=null) {
        alert("El número de su DNI no es válido");
        continue;
    }
    // Si fue null salimos de la aplicación
    if (pregunta==null) {
        alert("Saliste de la aplicación");
        break;
    }

    // Establecemos el valor de las variables
    dni = parseInt(pregunta);
    letraDni = cadenaDni[dni%23];

    // Mostramos la letra del DNI
    alert("La letra asociada a su DNI es: "+letraDni);
} while(pregunta==="" && pregunta!=null);



// Daniel Vilar Martínez