// U2T2 - ENTREGABLE 2 - Contraseña

// Inicializamos variables
let nombre;
let contrasena;

do {
    nombre = prompt("¿Cuál es tu nombre?");

    // Mientras el nombre no sea null y siga vacío seguirá pidiendo el nombre
    while(nombre != null && nombre === "") {
        nombre = prompt("ERROR!!\nEl nombre de usuario no puede estar vacío, introduce de nuevo tu nombre:");
    }

    // Sale del programa si nombre fue null
    if(nombre === null) break;

    contrasena = prompt("¿Cuál es tu contraseña?");

    // Mientras la contraseña y nombre no sean null y no sea "MeGustaProgramar" seguirá pidiendo la contraseña
    while((nombre != null && contrasena != null)  && contrasena != "MeGustaProgramar") {
        contrasena = prompt("La contraseña introducida no es correcta, introducela de nuevo:");
    }

    break;
} while(true);

if (nombre != null && contrasena != null) alert("Se ha almacenado correctamente la información");
else alert("Se ha salido de la aplicación");

// Daniel Vilar Martínez