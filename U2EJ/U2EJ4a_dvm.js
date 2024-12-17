// U2EJ4a - Estructuras de control

let nAlumnos = parseInt(prompt("¿Cuántos alumnos hay en el módulo?"));
let sumaNotaFinal = 0;

for (let i = 1; i<=nAlumnos; i++) {
   
    let notaFinal = parseFloat(prompt("¿Cuál es la nota final del alumno " + i + "?"));

    sumaNotaFinal += notaFinal;
}

let notaMedia = (sumaNotaFinal/nAlumnos).toFixed(2);

alert("La nota media final de la clase es " + notaMedia);

// Daniel Vilar Martínez