// U2T8- ENTREGABLE 8 - Rombo por consola (SUBIR NOTA)

const tamano = 4;


for(let i=0; i<=tamano; i++) {
    let cadena = "";

    for(let k=tamano; k>i; k--) {
        cadena+="o";
    }
    for(let j=0; j<=i; j++) {
        cadena+="*";
    }
    for(let m=1; m<=i; m++) {
        cadena+="*";
    }
    console.log(cadena);
}

for (let i=tamano; i<=tamano; i++){
    
    cadena+="*";
}

console.log(cadena);

for(let i=0; i<=tamano; i++) {
    let cadena = "";

    for(let k=0; k<=i; k++) {
        cadena+="o";
    }
    for(let j=tamano; j>i-1; j--) {
        cadena+="*";
    }
    for(let m=tamano; m>i; m--) {
        cadena+="*";
    }
    console.log(cadena);
}

// Daniel Vilar Martínez