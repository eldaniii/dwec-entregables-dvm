 //Crear una cookie
function crear_cookie(){

    let expiracion = "expires=Tue, 14 Jan 2025 23:59:59 GMT";
    let ruta="path=/";
    document.cookie = "Contador=1"+";"+expiracion+";"+ruta+";SameSite=Lax";
    /*sessionStorage.setItem("Contador",1);
    localStorage.setItem("Contador",1);*/
}

// Función para obtener el valor de una cookie
function leerCookie() {
    {
        const valorCookie = document.cookie;
        console.log(valorCookie);
        
        if (valorCookie.length >0) {
            resultado.textContent = "El valor de la cookie es: "+valorCookie;
            /*alert(sessionStorage.getItem("Contador"));
            alert(localStorage.getItem("Contador"));*/
        } else {
            resultado.textContent = 'No se encontró la cookie "dato".';
        }
    }
}

// Manejar evento para crear cookie
document.getElementById('crearCookie').addEventListener('click', crear_cookie);

// Manejar evento para mostrar cookie
document.getElementById('mostrarCookie').addEventListener('click', leerCookie);


