// U2EJ4b - Estructuras de control

let nAcertadas = parseInt(prompt("¿Cuántas preguntas ha acertado el alumno?"));
let nFalladas = parseInt(prompt("¿Cuántas preguntas ha fallado el alumno?"));
let nNoContestadas = parseInt(prompt("¿Cuántas preguntas no ha contestado el alumno?"));

let totalPreguntas = nAcertadas+nFalladas+nNoContestadas;

let notaAlumno = ((nAcertadas-nFalladas)*10)/totalPreguntas;

alert("La nota final del alumno es de " + notaAlumno);

// Daniel Vilar Martínez
