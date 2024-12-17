// EJERCICIO 2

function mostrarResultado(cadena) {
    let cadenaTmp = cadena.split("|",[3]);

    let tipo_producto = cadenaTmp[0].trim();
    let letras_modelo = cadenaTmp[1].trim().substring(0,3);
    let numeros_modelo = cadenaTmp[1].trim().substring(3,6);

    cadenaTmp = cadenaTmp[2].trim().split("@", 2);

    let cantidad = cadenaTmp[0].trim();
    let zona = cadenaTmp[1].trim();

    document.write("<p>cadena= '"+cadena+"' </p>");
    document.write("<p>Resultado:</p>");
    document.write("<p>Tipo de producto: "+tipo_producto+"</p>");
    document.write("<p>Letras Modelo: "+letras_modelo+"</p>");
    document.write("<p>Número Modelo: "+numeros_modelo+"</p>");
    document.write("<p>Cantidad: "+cantidad+"</p>");
    document.write("<p>Zona: "+zona+"</p>");
}

let pregunta;

// hola | com234 | 200@CZ
pregunta=prompt("Introduce la cadena según el formato:");

mostrarResultado(pregunta);

// Daniel Vilar Martínez