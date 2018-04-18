import * as fs from "fs";

export class Archivo{

    public static crearArchivo(nombre:string, contenido:string){

        return new Promise((resolve, reject) => {
            console.log(`INICIO Crear el archivo ${ nombre }`);

            fs.writeFile(nombre, contenido, (err) => {
                if (err) 
                    reject(err);
                else
                    resolve(nombre);
            });
   
        });

    }

}