import { Vehiculo } from "../scripts/vehiculo.js";
import { mostrarResultados } from "../scripts/main.js";

export class AutomovilDeportivo extends Vehiculo {
    #potenciaMotor;

    constructor(marcal, modelo, color, anoFabricacion, cilindrada){
        super(marca, modelo, color, anoFabricacion, cilindrada);
        this.#potenciaMotor = potenciaMotor;
    }

    activarModoDeportivo(){
        const mensaje = `El modo deportivo ha sido activado`;
        mostrarResultados(`<p>${mensaje}</p>`);
    }

    get potenciaMotor(){
        return this.#potenciaMotor;
    }

    set potenciaMotor(value){
        this.potenciaMotor = value;
    }
}