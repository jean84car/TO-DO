"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const yargs_1 = require("./config/yargs");
const ToDo_1 = require("./src/ToDo");
let comando = yargs_1.argv._[0];
switch (comando) {
    case 'crear':
        let tarea = ToDo_1.Todo.crear(yargs_1.argv.descripcion);
        console.log(tarea);
        break;
    case 'listar':
        ToDo_1.Todo.listarTareas();
        break;
    case 'actualizar':
        let actualizado = ToDo_1.Todo.actualizarTarea(yargs_1.argv.descripcion, yargs_1.argv.completado);
        if (actualizado) {
            console.log("Tarea actualizada");
        }
        break;
    case 'borrar':
        let borrado = ToDo_1.Todo.borrarTarea(yargs_1.argv.descripcion);
        if (borrado) {
            console.log("Tarea borrada");
        }
        break;
    default:
        console.log("Comando o reconocido");
}
