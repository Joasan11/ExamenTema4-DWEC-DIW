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
            </br>
            El modelo del coche es: ${this.modelo}
            </br>
            El color del coche es: ${this.color}
            </br>
            El coche se fabrico en: ${this.anoFabricacion}
            </br>
            El coche tiene una cilindrada de: ${this.cilindrada}
        `;

        mostrarResultados(`<p>${datos}</p>`);
    }

    acelerar(velocidad){
        const mensaje = `El vehiculo ${this.marca} ha acelerado a unos ${velocidad} Km/h`
        mostrarResultados(`<p>${mensaje}</p>`);
    }

    arrancar(){
        const mensaje = `El vehiculo ha arrancado`;
        mostrarResultados(`<p>${mensaje}</p>`);
    }

    frenar(){
        const mensaje = `El vehiculo ha frenado`;
        mostrarResultados(`<p>${mensaje}</p>`);
    }

    get marca(){
        return this.#marca;
    }

    set marca(value){
        this.marca = value;
    }

    get modelo(){
        return this.#modelo;
    }

    set modelo(value){
        this.modelo = value;
    }

    get color(){
        return this.#color;
    }

    set color(value){
        this.color = value;
    }

    get anoFabricacion(){
        return this.#anoFabricacion;
    }

    set anoFabricacion(value){
        this.anoFabricacion = value;
    }

    get cilindrada(){
        return this.#cilindrada;
    }

    set cilindrada(value){
        this.cilindrada = value;
    }
}