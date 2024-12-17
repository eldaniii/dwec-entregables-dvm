// U3EJ2 - String I

// Inicializamos variables
let pregunta;
let arrayPregunta;

while(true) {
    do {
        pregunta=prompt("Introduce tu nombre y apellidos:");
    } while(!isNaN(pregunta) && pregunta!==null);
  
    if(pregunta===null) {
        alert("Fin del programa");
        break;
    };

    arrayPregunta=pregunta.trim().split(" ");

    alert("Nombre introducido: "+pregunta+"\n\nCadena en minúsculas: "+pregunta.toLowerCase()
    +"\nCadena dividida: "+arrayPregunta[0]+" / "+arrayPregunta[1]+" / "+arrayPregunta[2]+"\nLongitud cadena sin espacios: "+pregunta.replace(" ", "").trim().length
    +"\nPropuesta de nombre de usuario 1: "+arrayPregunta[0].toLowerCase().charAt(0)+arrayPregunta[1].toLowerCase()+arrayPregunta[2].toLowerCase().charAt(0)
    +"\nPropuesta de nombre de usuario 2: "+arrayPregunta[0].toLowerCase().substring(0, 3)+arrayPregunta[1].toLowerCase().substring(0, 3)+arrayPregunta[2].toLowerCase().substring(0, 3));
};

// Daniel Vilar Martínez