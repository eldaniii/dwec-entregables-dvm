// EJERCICIO 3

class Carta {
    constructor(palo, valor) {
        this.palo=palo;
        this.valor=valor;
    }
    darValor(palo, valor) {
        if (palo>=1 && palo<=4) this.palo=palo;
        else console.log("Número de palo  no válido");

        if (valor>=1 && valor<=10) this.valor=valor;
        else console.log("Número de valor  no válido");
    }
    toString() {
        let nombrePalo;
        console.log("Carta[]: palo="+palo+", valor="+valor);
        switch(palo) {
            case 1:
                nombrePalo="Oros";
                break;
            case 2:
                nombrePalo="Copas";
                break;
            case 3:
                nombrePalo="Espadas";
                break;
            case 4:
                nombrePalo="Bastos";
                break;
            default:
                break;
        }
        console.log(valor+" de "+nombrePalo);
    }
}

class Baraja {
    constructor() {
        this.cartas=[];
    }
    rellenarBaraja() {
        for (let i=1; i<=4; i++) {  
            let palo=[];
            for (let i=1; i<=10; i++) {
                palo.push(i);
            }
            this.cartas.push(palo);
        }
    }
    barajar() {
        for(let i = 0; i<this.cartas.length; i++) {
            let random1 = Math.floor(Math.random() * this.cartas.length);
            for(let k = 0; k<this.cartas[i].length; k++) {
                let random2 = Math.floor(Math.random() * this.cartas[i].length);
                [this.cartas[i][k], this.cartas[random1][random2]]=[this.cartas[random1][random2], this.cartas[i][k]];
            }
        };
        
    }
    muestraBaraja() {
        let nombrePalo;

        console.log("Baraja Original:");
        for (let i=0; i<this.cartas.length; i++) {
            switch(i) {
                case 0:
                    nombrePalo="Oros";
                    break;
                case 1: 
                    nombrePalo="Copas";
                    break;
                case 2:
                    nombrePalo="Espadas";
                    break;
                case 3:
                    nombrePalo="Bastos";
                    break;
                default:
                    break;
            }
            for (let k=0; k<this.cartas[i].length; k++) {
                console.log(this.cartas[i][k]+" de "+nombrePalo);
            }
        }
    }
}

let baraja1 = new Baraja();

baraja1.rellenarBaraja();
baraja1.muestraBaraja();
baraja1.barajar();
baraja1.muestraBaraja();

// Daniel Vilar Martínez