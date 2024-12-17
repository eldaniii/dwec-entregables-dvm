// U3T6 - ENTREGABLE FINAL
// EJERCICIO 1 (FUNCIONES DE USUARIO)

// Inicializamos variables
let carton=[];
let numerosSalidos=[];

function comenzar() {
    carton=rellenarCarton();
    numerosSalidos=[];
    sacaNumeroNuevo();
}

function rellenarCarton() {
    let carton=[];

    // Bucle para rellenar el cartón
    for (let i=0; i<3; i++) {  
        let linea=[];
        while (linea.length<5) {
            let numero=Math.floor(Math.random()*99)+1;
            if (!linea.includes(numero)) {
                linea.push(numero);
            }
        }
        carton.push(linea);
    }

    return carton;
}

function compruebaLinea(carton, numerosSalidos) {
    // Bucle para comprobar la fila
    for (let i=0; i<carton.length; i++) {
        if (carton[i].every(numero => numerosSalidos.includes(numero))) {
            console.log("Línea en la fila"+(i+1));
            return i+1;
        }
    }

    return -1;
}

function compruebaBingo(carton, numerosSalidos) {
    // Comprobamos si es bingo
    if (carton.flat().every(numero => numerosSalidos.includes(numero))) {
        console.log("BINGO!");
        return true;
    }

    return false;
}

function sacaNumeroNuevo() {
    // Sacamos un nuevo número y comenzamos de nuevo
    if (numerosSalidos.length>=99) {
        console.log("No quedan numeros por sacar");
        return;
    }

    let nuevoNumero;

    do {
        nuevoNumero=Math.floor(Math.random()*99)+1;
    } while (numerosSalidos.includes(nuevoNumero));

    numerosSalidos.push(nuevoNumero);

    console.log("Número sacado:"+nuevoNumero);
    console.log("Números salidos:"+numerosSalidos);

    let linea=compruebaLinea(carton, numerosSalidos);

    if (linea!==-1) {
       console.log("Línea llena");
    }

    if (compruebaBingo(carton, numerosSalidos)) {
       console.log("HAS GANADO!!!");
       return;
    } else {
        sacaNumeroNuevo();
    }
}

// Empezamos el juego
comenzar();

// Daniel Vilar Martínez