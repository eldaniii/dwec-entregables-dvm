// U3EJ2 - String I

// Inicializamos variables
let pregunta;
let arrayPregunta;

while(true) {
    do {
        pregunta=prompt("Introduce una contraseña:");
    } while(!isNaN(pregunta) && pregunta!==null);
  
    if(pregunta===null) {
        alert("Fin del programa");
        break;
    };

    arrayPregunta=pregunta.trim().split(" ");

    if(pregunta.length>=8  && pregunta.length<=16)
};

// Daniel Vilar Martínez