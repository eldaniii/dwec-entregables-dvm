// U2T1 - ENTREGABLE 1c - Ventanas (prompt) y condicionales
// Suponemos que siempre se introduce un valor numérico y NO está controlado que pulsemos en cancelar

const pi = 3.14;
let radio = parseFloat(prompt("Introduce el radio de la circunferencia de la base en cm."));
let altura = parseFloat(prompt("Introduce la altura en cm."));

let volumen = pi*(radio*radio)*altura;

alert("El volumen es: " + volumen + " cm3");

// Daniel Vilar Martínez