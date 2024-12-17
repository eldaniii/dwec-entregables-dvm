// EXAMEN 2024-2025: RA6: Desarrolla aplicaciones Web analizando y aplicando las características del modelo de objetos del documento.
// Función para generar los inputs

function generarInputs() {
    let inputs=document.getElementById("inputs");

    while(inputs.firstChild) inputs.removeChild(inputs.firstChild);

    let nuevoInput1=document.createElement("input");
    let nuevoInput2=document.createElement("input");
    let boton=document.createElement("button");

    nuevoInput1.placeholder="Introduce tu nombre";
    nuevoInput2.placeholder="Introduce tu email";
    boton.textContent="Enviar Datos";

    inputs.appendChild(nuevoInput1);
    inputs.appendChild(document.createElement("br"));

    inputs.appendChild(nuevoInput2);
    inputs.appendChild(document.createElement("br"));

    inputs.appendChild(boton);
    inputs.appendChild(document.createElement("br"));

};

// Función para cambiar la primera imagen
function cambia_imagen1() {
    let imgLike=document.getElementById("imgLike");
    let contadorLike=document.getElementById("contadorLike");

    if (imgLike.src.includes("img/gusta2.png")) {
        let contador=parseInt(contadorLike.firstChild.textContent);
        
        contador++;
        contador=contador.toString();
        
        contadorLike.firstChild.textContent=contador;
        imgLike.src="img/gusta.png";
    } else {
        let contador=parseInt(contadorLike.firstChild.textContent);
        
        contador--;
        contador=contador.toString();

        contadorLike.firstChild.textContent=contador;
        imgLike.src="img/gusta2.png";
    };
};

// Función para cambiar la primera imagen
function cambia_imagen2() {
    let imgDislike=document.getElementById("imgDislike");
    let contadorDislike=document.getElementById("contadorDislike");

    if (imgDislike.src.includes("img/disgusto2.png")) {
        let contador=parseInt(contadorDislike.firstChild.textContent);
        
        contador++;
        contador=contador.toString();
        
        contadorDislike.firstChild.textContent=contador;
        imgDislike.src="img/disgusto.png";
    } else {
        let contador=parseInt(contadorDislike.firstChild.textContent);
        
        contador--;
        contador=contador.toString();

        contadorDislike.firstChild.textContent=contador;
        imgDislike.src="img/disgusto2.png";
    };
};

// Daniel Vilar Martínez