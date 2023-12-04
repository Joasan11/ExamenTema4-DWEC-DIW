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

// Creamos un objeto llamado  vehiculoObject que contenga las propiedades de vehiculo1
const vehiculoObject = {
    marca: "BMW",
    modelo: "CLK",
    color: "rojo",
    anoFabricacion: 1992,
    cilindrada: "2400"
};

// Guardamos el objeto VehiculoObject en el localStorage bajo la clave "vehiculo"

localStorage.setItem("vehiculo", JSON.stringify(vehiculoObject));

const deportivo1 = new AutomovilDeportivo("Ferrari", "Spider", "amarillo", 2020, "4000", "5000");
mostrarResultados(`<p>Deportivo 1:</p>`)
deportivo1.mostrarDatos();
deportivo1.arrancar();
deportivo1.acelerar(140);
deportivo1.frenar();