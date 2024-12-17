// U3T2- ENTREGABLE - Funciones

// Inicializamos variables
let num1;
let num2;
let num1Int;
let num2Int;
let pregunta;
let resultado;

// Declaramos funciones
function suma(a, b) {
    return a+b;
};

function resta(a, b) {
    return a-b;
};

function division(a, b) {
    return a/b;
};

function multiplicacion(a, b) {
    return a*b;
};

// Empezamos el programa
do {
    num1=prompt("Introduce el número 1:");
    num1Int=parseInt(num1);

    if (num1===null || isNaN(num1)) {
        alert("Fin del programa");
        break;
    };

    num2=prompt("Introduce el número 2:");
    num2Int=parseInt(num2);

    if (num2===null || isNaN(num2)) {
        alert("Fin del programa");
        break;
    };

    pregunta=prompt("Elige una operación:\n1 - Suma\n2 - Resta\n3 - División\n4 - Multiplicación");

    if (pregunta===null) {
        alert("Fin del programa");
        break;
    };

    // Elegimos la operación
    switch (pregunta) {
        case "1":
            resultado=suma(num1Int, num2Int);
            break;
        case "2":
            resultado=resta(num1Int, num2Int);
            break;
        case "3":
            if (num2Int===0) alert("ERROR. No se puede dividir por cero");
            else resultado=division(num1Int, num2Int);
            break;
        case "4":
            resultado=multiplicacion(num1Int, num2Int);
            break;
        default:
            break;
    }

    document.write("El resultado es: "+resultado);

} while(false);

// Daniel Vilar Martínez