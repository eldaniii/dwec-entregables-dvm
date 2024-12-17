// U2T7- ENTREGABLE 7 - Tablas de sumar, multiplicar y dividir (SUBIR NOTA)

// Inicializamos variables
let pregunta;
let numero;


do {
    do {
        pregunta=prompt("Introduzca un número entre (2-10):");
        numero=parseInt(pregunta);
    } while(numero<2 && numero>10 && pregunta!=null);

    // Salimos si es null
    if(pregunta==null) {
        alert("Has salido de la aplicación");
        break;
    }

    // Mostramos el bucle en consola de la tabla de multiplicar
    console.log("TABLA DE MULTIPLICAR");
    for(let i=1; i<=10; i++) {
        
        console.log(numero+" * "+i+" = "+numero*i);
    };

    let sumando = 0;
    let total = 0;

    // Mostramos el bucle en consola de la tabla de sumar
    console.log("\nTABLA DE SUMAR");
    while(true) {
        sumando++;
        total = numero+sumando;
       
        console.log(numero+" + "+sumando+" = "+total);

        if(total===12) break;
    };

    let dividendo = 0;
    let i = 1;

      // Mostramos el bucle en consola de la tabla de dividir
    console.log("\nTABLA DE DIVISIONES");
    do {
        dividendo = numero*i;
        i++;

        console.log(dividendo+" / "+numero+" = "+dividendo/numero);

        if((dividendo/numero)===10) break;
    } while(true);

    console.log("\nFin de la aplicación");
} while(false);

// Daniel Vilar Martínez