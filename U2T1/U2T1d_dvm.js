// U2T1 - ENTREGABLE 1d - Ventanas (prompt) y condicionales
// Suponemos que siempre se introduce un valor numérico en la edad, que cualquier nombre introducido es válido y NO está controlado que pulsemos en cancelar

let nombre = prompt("¿Cómo te llamas?");
let edad = parseInt(prompt("¿Cuántos años tienes?"));

if (edad >= 18) {
    alert("Hola " + nombre + "\n" + "Eres mayor de edad y has vivido " + edad*365 + " dias");
} else {
    alert("Hola " + nombre + "\n" + "Eres menor de edad y has vivido " + edad*365 + " dias");
}

// Daniel Vilar Martínez