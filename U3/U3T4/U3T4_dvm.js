// U3T4- ENTREGABLE - Objetos de usuario

class Socio {
    constructor(numSocio, dni, nombre, apellidos, fechaNacimiento, localidad) {
        this.numSocio = numSocio;
        this.dni = dni;
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.fechaNacimiento = fechaNacimiento;
        this.localidad = localidad;
    }

    modificarLocalidad(localidad) {
        this.localidad = localidad;
    };
};

function altaSocio(numSocio, dni, nombre, apellidos, fechaNacimiento, localidad) {
    let nuevoSocio = new Socio(numSocio, dni, nombre, apellidos, fechaNacimiento, localidad);
    arraySocios.push(nuevoSocio);
}

function categoriaFecha(fechaNacimiento) {
    let categoria;
    let edad = new Date().getFullYear() - new Date(fechaNacimiento).getFullYear();

    if (edad>=12 && edad<=13) categoria="Infantil";
    else if (edad>=10 && edad<=11) categoria="Alevín";
    else if (edad>=8 && edad<=9) categoria="Benjamín";
    else categoria="None";

    console.log("Pertenece a la categoría: "+categoria);

    return categoria;
};

function mostrarDatosSocios() {
    console.log("Información de todos los socios:\n")

    for (socio of arraySocios) {
        console.log("Número de socio: "+socio.numSocio);
        console.log("DNI: "+socio.dni);
        console.log("Nombre: "+socio.nombre);
        console.log("Apellidos: "+socio.apellidos);
        console.log("Fecha de nacimiento: "+socio.fechaNacimiento);
        console.log("Localidad: "+socio.localidad);
        console.log("");
    };
};

function mostrarByLocalidad(localidad) {
    let nuevoArray = [];

    for (socio of arraySocios) {
        if(socio.localidad === localidad) nuevoArray.push(socio);
    };

    console.log("Información de los socios de "+localidad+":\n")

    for (socio of nuevoArray) {
        console.log("Número de socio: "+socio.numSocio);
        console.log("DNI: "+socio.dni);
        console.log("Nombre: "+socio.nombre);
        console.log("Apellidos: "+socio.apellidos);
        console.log("Fecha de nacimiento: "+socio.fechaNacimiento);
        console.log("Localidad: "+socio.localidad);
        console.log("");
    };
}

function buscarByDni(dni) {
    let nuevoSocio;

    for (socio of arraySocios) {
        if (socio.dni === dni) nuevoSocio=socio;
    };

    console.log("Número de socio: "+nuevoSocio.numSocio);
    console.log("DNI: "+nuevoSocio.dni);
    console.log("Nombre: "+nuevoSocio.nombre);
    console.log("Apellidos: "+nuevoSocio.apellidos);
    console.log("Fecha de nacimiento: "+nuevoSocio.fechaNacimiento);
    console.log("Localidad: "+nuevoSocio.localidad);
    console.log("");
};

let arraySocios = [new Socio(18492210, "28448515P", "Francisco", "Martínez López", "03-09-2003", "Camas"), new Socio(79419815, "84278515K", "Javier", "Berlanga Hurtado", "21-07-2005", "Gines")];
let socio = arraySocios[0];

altaSocio(623204002, "45286061N", "Martina", "Romero Luque", "14-03-2004", "Castilleja de la Cuesta");

mostrarDatosSocios();
mostrarByLocalidad("Gines");
buscarByDni("28448515P");
categoriaFecha(socio.fechaNacimiento);

// Daniel Vilar Martínez