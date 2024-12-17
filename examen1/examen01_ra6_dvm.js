// EXAMEN 2024-2025: RA6: Desarrolla aplicaciones Web analizando y aplicando las características del modelo de objetos del documento.

let lista=document.getElementById("lista");
let elementos=lista.getElementsByTagName("li");

for (const element of elementos) {
    element.addEventListener("click", function cambiar_clase() {
        if (element.className!="done") element.className="done";
        else element.className="";
    });
}

// Daniel Vilar Martínez