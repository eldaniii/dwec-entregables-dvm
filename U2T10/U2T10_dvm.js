// U2T10 - ENTREGABLE FINAL FINALÍSIMO - Contraseña avanzada- (SUBIR NOTA) - puntúa doble

// Inicializamos variables
let nombre;
let password;
let esValido;

do {
    esValido=true;

    nombre=prompt("Introduzca su nombre:");
        
    if(nombre===null) break;    

    for(let i=0; i<nombre.length; i++) {
        if((nombre.charCodeAt(i)<97 && nombre.charCodeAt(i)>57) || nombre.charCodeAt(i)<48 || nombre.charCodeAt(i)>122) {
            esValido=false;
            break;
        };
    };

    if(!esValido) alert("ERROR: El usuario solamente puede estar formado por minúsculas y números")

} while(!esValido && nombre!==null);   

if(nombre!==null) {
    do {
        let tieneMayus=false;
        let tieneMinus=false;
        let tieneNum=false;
        let tieneCaracterEsp=false;

        password=prompt("Ingrese la contraseña:");

        if(password===null) break;    

        for(let i=0; i<password.length; i++) {
            if(password.charCodeAt(i) >= 65 && password.charCodeAt(i) <= 90) tieneMayus=true; 
            else if(password.charCodeAt(i) >= 97 && password.charCodeAt(i) <= 122) tieneMinus=true;
            else if(password.charCodeAt(i) >= 48 && password.charCodeAt(i) <= 57) tieneNum=true;
            else tieneCaracterEsp=true;
        };

        if(tieneMayus && tieneMinus && tieneNum && tieneCaracterEsp) {
            esValido=true;
            alert("Se ha almacenado correctamente la información");
        } else {
            alert("ERROR: La contraseña debe contener una mayúscula, una minúscula, un número y un carácter especial");
            esValido=false;
        };
        
    } while(!esValido && password!==null);
};

alert("La aplicación ha terminado");


// Daniel Vilar Martínez