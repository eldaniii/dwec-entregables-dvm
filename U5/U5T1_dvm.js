// U5T1 - ENTREGABLE 1

//Crear una cookie
function crear_cookie() {

    let expiracion = "expires=Wed, 31 Dec 2025 23:59:59 GMT";
    let ruta="path=/";

    document.cookie = "usuario=daniel"+";"+expiracion+";"+ruta+";SameSite=Lax";
    document.cookie = "edad=19"+";"+expiracion+";"+ruta+";SameSite=Lax";
    document.cookie = "curso=daw2"+";"+expiracion+";"+ruta+";SameSite=Lax";
};

// Función génerica para obtener el valor de una cookie
function getCookie(name) {
    const cookies = document.cookie.split(";");

    for (cookie of cookies) {
        cookie = cookie.trim();

        if (cookie.split("=")[0] === name) return cookie.split("=")[1];
    };

    return null;
};

// Código de prueba cookies
crear_cookie();

let pregunta = prompt("Introduce el nombre del valor a obtener:");

alert("Resultado búsqueda:\n"+pregunta+"="+getCookie(pregunta));

// Código de prueba LocalStorage y SessionStorage
sessionStorage.setItem("usuario","daniel");
sessionStorage.setItem("edad","19");
sessionStorage.setItem("curso","daw2");

localStorage.setItem("usuario","daniel");
localStorage.setItem("edad","19");
localStorage.setItem("curso","daw2");

alert("Resultados:\n\n"+"LocalStorage:\n"+"usuario="+localStorage.getItem("usuario")+"\n"+"edad="+localStorage.getItem("edad")+"\n"+"curso="+
localStorage.getItem("curso")+"\n\nSessionStorage:\n"+"usuario="+sessionStorage.getItem("usuario")+"\n"+"edad="+sessionStorage.getItem("edad")+
"\n"+"curso="+sessionStorage.getItem("curso"));

// Daniel Vilar Martínez