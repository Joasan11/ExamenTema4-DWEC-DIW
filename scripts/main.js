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
deportivo1.activarModoDeportivo();

// Creamos un objeto llamado deportivoObject que contenga las propiedades de deportivo1

const deportivoObject = {
    marca: deportivo1.marca,
    modelo: deportivo1.modelo,
    color: deportivo1.color,
    anoFabricacion: deportivo1.anoFabricacion,
    cilindrada: deportivo1.cilindrada,
    potenciaMotor: deportivo1.potenciaMotor
};

// Guardamos el objeto deportivoObject en el localstorage bajo la clave "deportivo"

for(let key in deportivoObject){
    //hasOwnProperty lo utilizamos para almacenar el nombre de la propiedad de cada objeto
    if(deportivoObject.hasOwnProperty(key)){
        localStorage.setItem(key, deportivoObject[key]);
    }
}

// Eliminar un elemento del localStorage

//localStorage.removeItem("color");
//localStorage.removeItem("marca");

// Limpiar localStorage de todo lo que tenga

//localStorage.clear();

