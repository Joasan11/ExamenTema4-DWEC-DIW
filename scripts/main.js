import { Vehiculo } from "../scripts/vehiculo.js";
import { AutomovilDeportivo } from "../scripts/automovilDeportivo.js";

const resultadoContainer = document.createElement("div");
document.body.appendChild(resultadoContainer);

export function mostrarResultados(mensaje){
    resultadoContainer.innerHTML += `<p>${mensaje}</p>`;
}

const vehiculo1 = new Vehiculo("BMW", "CLK", "rojo", 1992, "2400");
mostrarResultados(`<p>Vehiculo 1:</p>`);
vehiculo1.mostrarDatos();
vehiculo1.arrancar();
vehiculo1.acelerar(140);
vehiculo1.frenar();