// U6EJ5 - Recorriendo el árbol

// Inicializamos las variables
let listaTh=document.querySelectorAll("table thead th");
let listaTd=document.querySelectorAll("table tbody td");

for(th of listaTh) {
    th.addEventListener("mouseenter", cambiar_color);
    th.addEventListener("mouseleave", volver_color);
};

for(td of listaTd) {
    td.addEventListener("mouseenter", cambiar_color);
    td.addEventListener("mouseleave", volver_color);
};

// Función para cambiar a rojo
function cambiar_color(evento) {
    let contenido=evento.target.parentElement;
    contenido.style.backgroundColor="red";
}

// Función para quitar el color
function volver_color(evento) {
    let contenido=evento.target.parentElement;
    contenido.style.backgroundColor="";
}

// Daniel Vilar Martínez