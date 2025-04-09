/**21. Menú de opciones
Tema: switch + strings
let opcion = 'editar'
Muestra según el valor de opcion:
"ver" → "Mostrando perfil"
"editar" → "Editando datos"
"salir" → "Saliendo del sistema"
Otro → "Opción no válida" */
let opcion = 'editar'
let mostrar = ""
switch(opcion){
    case "ver":
        mostrar = "Mostrando perfil"
        console.log(`${mostrar}`)
        break
    case "editar":
        mostrar = "Editando datos"
        console.log(`${mostrar}`)
        break
    case "salir":
        mostrar = "Saliendo del sistema"
        console.log(`${mostrar}`)
        break
    default:
        console.log(`${opcion} no es parte del menu de opciones`)
}