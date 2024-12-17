// U3T3 - ENTREGABLE - ARRAYS - FUNCIONES
// EJERCICIO 1

// Inicializamos variables
let array=["daniel", "carmen", "marcos", "paco"];
let nombre="daniel";

function comprobarNombre(string, array) {
    // Si algún valor del array es 'string' devuelve true sino false
    if(array.includes(string)) {
        return true;
    } else {
        return false;
    };
}

// Mostramos el resultado de 'comprobarNombre()'
console.log("¿El nombre '"+nombre+"' está en el array?\n"+comprobarNombre(nombre, array));

// Daniel Vilar Martínez