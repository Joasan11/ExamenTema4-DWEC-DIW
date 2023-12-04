import { mostrarResultados } from "../scripts/main.js";

export class Vehiculo {
    #marca;
    #modelo;
    #color;
    #anoFabricacion;
    #cilindrada;

    constructor(marca, modelo, color, anoFabricacion, cilindrada){
        this.#marca = marca;
        this.#modelo = modelo;
        this.#color = color;
        this.#anoFabricacion = anoFabricacion;
        this.#cilindrada = cilindrada;
    }

    mostrarDatos(){
        const datos = `
            La marca del coche es: ${this.marca}
            El modelo del coche es: ${this.modelo}
            El color del coche es: ${this.color}
            El coche se fabrico en: ${this.anoFabricacion}
            El coche tiene una cilindrada de: ${this.cilindrada}
        `;
    }
}