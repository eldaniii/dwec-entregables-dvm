// Ejercicio 1 - Promesa (ENTREGABLE)

// Creamos la promesa
let promesa1=new Promise((resolve) => {
    setTimeout(() => {
        let numeroRandom=Math.round(Math.random());

        resolve(numeroRandom);
    }, 2000);
});

// Consumimos la promesa
promesa1.then(resultado => {
    console.log("Número generado: "+resultado);

    if (resultado===1) console.log("Promesa finalizada con éxito");
    else if (resultado===0) console.log("Promesa rechazada");
    
    console.log("Promesa finalizada");
});

// Daniel Vilar Martínez