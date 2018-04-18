import { argv } from "./config/yargs";
import { Todo } from "./src/ToDo";

let comando:string = argv._[0];

switch(comando){
    case 'crear' :
        let tarea= Todo.crear(argv.descripcion);
        console.log(tarea);
        break;
    case 'listar' :
        Todo.listarTareas();
        break;
    case 'actualizar' :
        let actualizado:boolean = Todo.actualizarTarea(argv.descripcion, argv.completado);
        if(actualizado){
            console.log("Tarea actualizada");
        }
        break;
    case 'borrar' :
        let borrado:boolean = Todo.borrarTarea(argv.descripcion);
        if(borrado){
            console.log("Tarea borrada");
        }
    break;
    default : 
        console.log("Comando o reconocido");
}