// U3T6 - ENTREGABLE FINAL
// EJERCICIO 3 (OBJETOS)

class Runner {
    // Creamos el constructor
    constructor(nombre, apellidos, evento, fecha, dorsal, horaInicio, horaFinalizacion) {
        this.nombre=nombre;
        this.apellidos=apellidos;
        this.evento=evento;
        this.fecha= new Date(fecha);
        this.dorsal=dorsal;
        this.horaInicio=new Date(horaInicio);
        this.horaFinalizacion=new Date(horaFinalizacion);
    }
    // Declaramos nuestro método calcularTiempo
    calcularTiempo() {
        if (isNaN(this.horaInicio)===null || isNaN(this.horaFinalizacion)===null) {
            return "00:00:00";
        } else {
            let tiempoMarca=this.horaFinalizacion-this.horaInicio;

            let hh=Math.floor(tiempoMarca/(1000*60*60));
            let mm=Math.floor((tiempoMarca%(1000*60*60))/(1000*60));
            let ss=Math.floor((tiempoMarca%(1000*60))/1000);
    
            return hh+":"+mm+":"+ss;
        }
    }
};

// Instanciamos un objeto runner1 y comprobamos
let runner1=new Runner("Pepe", "Martínez López", "Maratón Bormujos", "2020-09-20", 77, "2020-09-20T11:10:10", "2020-09-20T11:11:55");

console.log("Marca tiempo: "+runner1.calcularTiempo()); 

// Daniel Vilar Martínez