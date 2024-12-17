// U3T1- ENTREGABLE - Arrays

// Inicializamos variables
let pregunta;

while(true) {

    do {
        pregunta=prompt("Introduce una cadena de texto:");
    } while(!isNaN(pregunta) && pregunta!==null);

    // Comprobamos valor null
    if (pregunta===null) {
        alert("Fin del programa");
        break;
    };

    alert("La cadena introducida es: \n"+pregunta);

    let str = "";

    // Convertimos con ayuda de una cadena auxiliar las letras a mayus o minus
    for (let i = 0; i<pregunta.length; i++) { 
        let random = Math.floor(Math.random() * 2);

        if (random === 0) str+=pregunta.charAt(i).toUpperCase();
        else str+=pregunta.charAt(i).toLowerCase();

    };

    pregunta = str;
    // Quitamos los espacios e intercalamos un "-" entre cada letra
    pregunta = pregunta.replaceAll(" ", "").split("").join("-");

    alert("La cadena convertida es: \n"+pregunta);
}

// Daniel Vilar Martínez