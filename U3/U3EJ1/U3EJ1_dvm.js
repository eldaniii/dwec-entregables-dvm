// U3EJ1 - Number

// Inicializamos variables
let pregunta;
let preguntaParsedInt;

while(true) {
    do {
        pregunta=prompt("Introduce tu nombre y apellidos:");
    } while(!isNaN(pregunta) && pregunta!==null);

    if(pregunta===null) {
        alert("Fin del programa");
        break;
    };

    alert("Número introducido: "+preguntaParsedInt+"\n\nValor exponencial: "+preguntaParsedInt.toExponential(1)
    +"\nNúmero con 4 decimales: "+preguntaParsedInt.toFixed(4)+"\nNúmero en binario: "+preguntaParsedInt.toString(2)
    +"\nNúmero en octal: "+preguntaParsedInt.toString(8)+"\nNúmero en hexadecimal: "+preguntaParsedInt.toString(16));
};

// Daniel Vilar Martínez