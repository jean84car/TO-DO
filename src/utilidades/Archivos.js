"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
}
Object.defineProperty(exports, "__esModule", { value: true });
const fs = __importStar(require("fs"));
class Archivo {
    static crearArchivo(nombre, contenido) {
        return new Promise((resolve, reject) => {
            console.log(`INICIO Crear el archivo ${nombre}`);
            fs.writeFile(nombre, contenido, (err) => {
                if (err)
                    reject(err);
                else
                    resolve(nombre);
            });
        });
    }
}
exports.Archivo = Archivo;
