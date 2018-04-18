"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
}
Object.defineProperty(exports, "__esModule", { value: true });
const yargs = __importStar(require("yargs"));
exports.argv = yargs
    .command('crear', 'Crea un elemento TO-DO', {
    descripcion: {
        demand: true,
        alias: 'd'
    }
})
    .command('actualizar', 'Actualiza el estado completado de una tarea', {
    completado: {
        alias: 'c',
        default: true
    },
    descripcion: {
        alias: 'd'
    }
})
    .command('borrar', 'borrar una tarea', {
    descripcion: {
        alias: 'd'
    }
})
    .help()
    .argv;
