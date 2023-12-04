import { Vehiculo } from "../scripts/vehiculo.js";

export class AutomovilDeportivo extends Vehiculo {
    #potenciaMotor;

    constructor(marcal, modelo, color, anoFabricacion, cilindrada){
        super(marca, modelo, color, anoFabricacion, cilindrada);
        this.#potenciaMotor = potenciaMotor;
    }
}