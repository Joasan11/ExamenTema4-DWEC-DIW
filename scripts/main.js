import { Vehiculo } from "../scripts/vehiculo.js";
import { AutomovilDeportivo } from "../scripts/automovilDeportivo.js";

const resultadoContainer = document.createElement("div");
document.body.appendChild(resultadoContainer);

export function mostrarResultados(mensaje){
    resultadoContainer.innerHTML += `<p>${mensaje}</p>`;
}

const vehiculo1 = new Vehiculo("BMW", "CLK", "rojo", 1992, "2400");