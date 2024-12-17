// EJERCICIO 1

function cambiaArray(array1, array2) {
    
}

function aplanaArray(arrayBi) {
    let newArray = [];

    for (let i=0; i<arrayBi.length; i++) {
        for (let k=0; i<arrayBi[i].length; k++) {
            newArray.push(arrayBi[i][k]);
        }
    }

    console.log(newArray);

    return newArray;
}

let array1 = [1,2,3,4];
let array2 = [5,6,7,8];

cambiaArray();
aplanaArray();

// Daniel Vilar Martínez