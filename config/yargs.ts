import * as yargs from "yargs";

export let argv = yargs
    .command('crear', 'Crea un elemento TO-DO', {
        descripcion:{
            demand:true,
            alias:'d'
        }
    })
    .command('actualizar', 'Actualiza el estado completado de una tarea', {
        completado:{
            alias:'c',
            default:true
        },
        descripcion:{
            alias:'d'
        }
    })
    .command('borrar', 'borrar una tarea', {
        descripcion:{
            alias:'d'
        }
    })
    .help()
    .argv;