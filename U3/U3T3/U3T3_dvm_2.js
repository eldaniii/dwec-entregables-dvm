// U3T3 - ENTREGABLE - ARRAYS - FUNCIONES
// EJERCICIO 2

// Inicializamos variables
let array=[1,2,3,4,5,6,7,8];

function desordenar(array) {
    // Bucle para desordenar los índices del array
    for(let i = 0; i<array.length; i++) {
        let random = Math.floor(Math.random() * array.length);
        [array[i], array[random]]=[array[random], array[i]];
    };
    return array;
};

// Mostramos el resultado de 'desordenar()'
console.log("Se ha desordenado el array:\n"+desordenar(array));

// Daniel Vilar Martínez
