"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
}
Object.defineProperty(exports, "__esModule", { value: true });
const Archivos_1 = require("./utilidades/Archivos");
const colors_1 = __importDefault(require("colors"));
class Todo {
}
Todo.listadoPorHacer = [];
Todo.guardarTarea = () => {
    let data = JSON.stringify(Todo.listadoPorHacer);
    Archivos_1.Archivo.crearArchivo("./src/db/data.json", data).then((nombre) => {
        console.log(`Se guardo ${data} en el archivo ${nombre}`);
    }).catch((error) => {
        console.log(error);
    });
};
Todo.cargarTareas = () => {
    try {
        Todo.listadoPorHacer = require("./db/data.json");
        console.log(Todo.listadoPorHacer);
    }
    catch (error) {
        console.log("Error recuperando archivo");
        Todo.listadoPorHacer = [];
    }
};
Todo.listarTareas = () => {
    Todo.cargarTareas();
    for (let tarea of Todo.listadoPorHacer) {
        console.log(colors_1.default.green("*********** TO DO *************"));
        console.log(tarea.descripcion);
        console.log('Estado:', tarea.completado);
        console.log("colors.green(*****************************".green);
    }
};
Todo.actualizarTarea = (descripcion, completado = true) => {
    Todo.cargarTareas();
    let i = Todo.listadoPorHacer.findIndex((tarea) => {
        return tarea.descripcion === descripcion;
    });
    if (i >= 0) {
        Todo.listadoPorHacer[i].completado = completado;
        Todo.guardarTarea();
        return true;
    }
    else {
        console.log(`No se encontro una tarea con la descripcion ${descripcion}`);
        return false;
    }
};
Todo.borrarTarea = (descripcion) => {
    Todo.cargarTareas();
    let i = Todo.listadoPorHacer.findIndex((tarea) => {
        return tarea.descripcion === descripcion;
    });
    if (i >= 0) {
        console.log(`Borrando la area ${descripcion} posicion ${i}`);
        Todo.listadoPorHacer.splice(i, 1);
        Todo.guardarTarea();
        return true;
    }
    return false;
};
Todo.crear = (descripcion) => {
    Todo.cargarTareas();
    let toDo = {
        completado: false,
        descripcion
    };
    Todo.listadoPorHacer.push(toDo);
    Todo.guardarTarea();
    return toDo;
};
exports.Todo = Todo;
