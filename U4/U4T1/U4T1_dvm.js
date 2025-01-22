// U4T1 - ENTREGABLE 1
document.getElementById("enviar").addEventListener("click", validar);


function validar(e) {
    e.preventDefault();

    if (validarNombre()  && validarDni() && validarFabricante() && validarPassword()) {
        alert("Envío de formulario");
        e.target.submit();
    } else {
        alert("Hay datos incorrectos");
    };
};

function validarNombre() {
    let nombre = document.getElementById("nombre");

    if (nombre.)
}

function validarDni() {d
    
}

function validarFabricante() {
    
}

function validarPassword() {
    
}

// Daniel Vilar Martínez