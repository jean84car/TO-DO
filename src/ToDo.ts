import { Archivo } from "./utilidades/Archivos";
import colors from "colors";

export class Todo{

    public static listadoPorHacer:any = [];

    public static guardarTarea = () => {
        let data= JSON.stringify(Todo.listadoPorHacer);
        Archivo.crearArchivo("./src/db/data.json", data).then((nombre) => {
            console.log(`Se guardo ${ data } en el archivo ${ nombre }`);
        }).catch((error) => {
            console.log(error);
        });
    }

    public static cargarTareas = () => {
        try{
            Todo.listadoPorHacer = require("./db/data.json");
            console.log(Todo.listadoPorHacer);
        }catch(error){
            console.log("Error recuperando archivo");
            Todo.listadoPorHacer = [];
        }
    }

    public static listarTareas = () => {
        Todo.cargarTareas();

        for(let tarea of Todo.listadoPorHacer){
            console.log(colors.green("*********** TO DO *************"));
            console.log(tarea.descripcion);
            console.log('Estado:', tarea.completado);
            console.log("colors.green(*****************************".green);
        }
    } 

    public static actualizarTarea = (descripcion:string, completado:boolean= true) => {
        Todo.cargarTareas();
        let i= Todo.listadoPorHacer.findIndex( (tarea:any) => {
            return tarea.descripcion === descripcion;
        });

        if(i>=0){
            Todo.listadoPorHacer[i].completado= completado;
            Todo.guardarTarea();
            return true;
        }else{
            console.log(`No se encontro una tarea con la descripcion ${ descripcion }`);
            return false;
        }
    }

    public static borrarTarea = (descripcion:string) =>{
        Todo.cargarTareas();
        let i:number= Todo.listadoPorHacer.findIndex( (tarea:any) => {
            return tarea.descripcion === descripcion;
        });

        if(i>=0){
            console.log(`Borrando la area ${ descripcion } posicion ${ i }`);
            Todo.listadoPorHacer.splice(i, 1);
            Todo.guardarTarea();
            return true;
        }

        return false;
    }

    public static crear = (descripcion:string) => {

        Todo.cargarTareas();

        let toDo = {
            completado:false,
            descripcion
        }
        Todo.listadoPorHacer.push(toDo);
        Todo.guardarTarea();

        return toDo;
    }

}

