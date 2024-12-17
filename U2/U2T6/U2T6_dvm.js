// U2T6 -ENTREGABLE 6 - Dados

// Inicializamos variables
let pregunta;
let nDados;

do {
    // Inicializamos la cadena dentro del bucle para que se reinicie el contenido con cada repetición
    let str = "";

    pregunta = prompt("¿Cuántos dados desea tirar?");
    nDados = parseInt(pregunta);

    // Comprobamos que esté en el rango y tampoco responda vacío
    if (nDados>4 || nDados<1 || isNaN(nDados)) continue;

    // Si da a cancelar salimos del programa
    if(pregunta==null) break;
    
    // Mostramos el mensaje según el número de dados
    for(let i = 1; i<=nDados; i++) {
        if (i!==1) str += "  -  ";
        str += "Dado "+i+": "+Math.floor(Math.random() * 6 + 1)+" ";
    };
    
    alert(str);

} while(pregunta!=null);

alert("Fin del programa");

// Daniel Vilar Martínez