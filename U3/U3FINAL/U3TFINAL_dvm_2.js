// U3T6 - ENTREGABLE FINAL
// EJERCICIO 2 (STRING + ARRAY)

// Inicializamos variables
let pregunta;
let nombre;
let apellidos;
let tlfno; 
let email;
let codigoPostal;

do {
    // Formato: “nombre:apellidos:telefono:email:codigopostal”
    pregunta=prompt("Ingresa tus datos según el formato:");
    
    // Comprobamos que no sea null y el formato
    if (pregunta===null) {
        alert("Fin del programa");
        break;
    }

    let datos=pregunta.split(":");
    
    if (datos.length!=5) {
        alert("ERROR! Introduce la respuesta en un formato válido");
        continue;
    }
    
    // Asignamos los datos
    nombre=datos[0];
    apellidos=datos[1];
    tlfno=datos[2];
    email=datos[3];
    codigoPostal=datos[4];

    let servidor=email.split("@")[1];

    // Printamos los datos en el html
    document.write("<h2>Datos introducidos: </h2>");
    document.write("<p>Código postal: "+codigoPostal+"</p>");
    document.write("<p>Apellidos: "+apellidos+"</p>");
    document.write("<p>Email: "+email+"</p>");
    document.write("<p>Servidor: "+servidor+"</p>");

} while (pregunta!==null);

// Daniel Vilar Martínez