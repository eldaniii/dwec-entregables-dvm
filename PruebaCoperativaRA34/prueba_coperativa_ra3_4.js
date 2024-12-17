class Bandeja {
    constructor(tipo, variedad, cantidad) {
        this.tipo=tipo;
        this.variedad=variedad;
        this.cantidad=cantidad;
    }

    restar(cantidadPedida) {
        if (this.cantidad<cantidadPedida) {
            let cantidadFaltante=cantidadPedida-this.cantidad;

            console.log("Te has llevado "+this.cantidad+" pasteles, te faltarían "+cantidadFaltante);
            this.cantidad=0;
        } else {
            this.cantidad=this.cantidad-cantidadPedida;
            console.log("Te has llevado "+cantidadPedida+" pasteles, quedan "+this.cantidad+" en la bandeja");
        }
    }

    reponer(cantidadReponer) {
        if (this.cantidad+cantidadReponer>50) {
            let cantidadSobrante=(this.cantidad+cantidadReponer)-50;

            console.log("Has añadido "+(50-this.cantidad)+" pasteles, te han sobrado "+cantidadSobrante);
            this.cantidad=50;
        } else {
            this.cantidad=this.cantidad+cantidadReponer;
        }
        console.log("Ahora hay "+this.cantidad+" pasteles de "+this.tipo+" y de la variedad "+this.variedad);
    }

    toString() {
            console.log("Bandeja[]:")
            console.log("Tipo: "+this.tipo);
            console.log("Variedad: "+this.variedad);
            console.log("Cantidad: "+this.cantidad);

            // console.log("Bandeja[Tipo: "+this.tipo+", Variedad: "+this.variedad+", Cantidad: "+this.cantidad+"]");
    }
}

class laPlata {
    constructor() {
        this.mostrador=[];
    }

    ponerMostrador(bandejaReponer) {
        let reponer = true;

        for (bandeja of this.mostrador) {
            if(bandejaReponer.tipo === bandeja.tipo && bandejaReponer.variedad === bandeja.variedad) reponer=false;
        }

        /*this.mostrador.forEach(bandeja => {
            if(bandejaReponer.tipo === bandeja.tipo && bandejaReponer.variedad === bandeja.variedad) {
                reponer = false;
            }
        });*/

        if (reponer) {
            this.mostrador.push(bandejaReponer);
            console.log("Bandeja añadida al mostrador");
        } else console.log("Existe una bandeja con el mismo tipo y variedad de dulce");
    }

    venderPastel(tipo, variedad, cantidad) {
        let bandejaPasteles = this.mostrador.find(bandeja => bandeja.tipo===tipo && bandeja.variedad===variedad);

        if (bandejaPasteles != undefined) {
           bandejaPasteles.restar(cantidad);
        } else {
            console.log("No existe bandeja con ese tipo y variedad de dulce");
        }
    }

    verMostrador() {
        console.log("Mostrando las bandejas del mostrador:");

        // for (bandeja of this.mostrador) bandeja.toString();
        
        this.mostrador.forEach(bandeja => bandeja.toString());
    }
}

function completar(mostrador) {
    mostrador.forEach(ban => ban.cantidad=50);
}

let bandeja=new Bandeja("t1", "u2", 12);

bandeja.restar(20)
bandeja.reponer(10);
bandeja.reponer(45);
bandeja.reponer(15);
bandeja.toString();

let bandeja1=new Bandeja("Caracolas", "Crema", 15);
let bandeja2=new Bandeja("Tocinos de cielo", "Con azúcar", 10);
let bandeja3=new Bandeja("Riñoncitos", "Chocolate negro", 20);
let bandeja4= new Bandeja("Riñoncitos", "Chocolate negro", 50);

console.log("");
bandeja1.toString();
console.log("");
bandeja2.toString();
console.log("");
bandeja3.toString();

let laplata=new laPlata();

laplata.ponerMostrador(bandeja1);
laplata.ponerMostrador(bandeja2);
laplata.ponerMostrador(bandeja3);

console.log(laplata.mostrador);

laplata.ponerMostrador(bandeja1);
laplata.venderPastel("Caracolas", "Crema", 100);
laplata.verMostrador();
laplata.ponerMostrador(bandeja4);

completar(laplata.mostrador);
console.log("\nTras rellenar las bandejas al máximo (50):");
laplata.verMostrador();

