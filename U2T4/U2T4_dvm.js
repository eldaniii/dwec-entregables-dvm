// U2T4 -ENTREGABLE 4 - Pizzería Bella Napoli

let pizzaVegetariana;
let ingrediente;

// Comprueba si quiere una pizza vegetariana y solo acepta si/no
do {
    pizzaVegetariana = prompt("¿Quiere una pizza vegetariana? (si/no)");
} while(pizzaVegetariana!=="si" && pizzaVegetariana!=="no");

do {
    // Dependiendo del tipo de pizza pide un ingrediente válido en bucle hasta que lo introduzca o cancele
    if (pizzaVegetariana==="si") {
        do {
            ingrediente=prompt("Eliga un ingrediente válido:\nIngredientes vegetarianos: Pimiento y Tofu.");
        } while(ingrediente!=="Pimiento" && ingrediente!=="Tofu" && ingrediente!==null);
    } else if (pizzaVegetariana==="no") {
        do {
            ingrediente=prompt("Eliga un ingrediente válido:\nIngredientes no vegetarianos: Pepperoni, Jamón y Salmón.");
        } while(ingrediente!=="Pepperoni" && ingrediente!=="Jamón" && ingrediente!=="Salmón" && ingrediente!==null);
    }

    // Si cancelo la ventana del ingrediente sale de la aplicación
    if (ingrediente==null) {
        alert("Saliste de la aplicación");
        break;
    }
    
    // Muestra la pizza elegida y sus ingredientes
    alert("La pizza elegida "+pizzaVegetariana+" es una pizza vegetariana.\nIngredientes: Tomate, Mozzarella, "+ingrediente);
} while (false);


// Daniel Vilar Martínez