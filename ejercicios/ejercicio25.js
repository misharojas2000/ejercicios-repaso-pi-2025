/**25. Menú interactivo (simulado)
Tema: do...while
Simula un menú que se muestra al menos una vez.
Si opcion es "A", muestra "Bienvenid@".
Si opcion es "B", permita la entrada de un nombre y muestra "Bienvenid@ ${nombreIngresado}".
Repite mientras opcion no sea "3". */
const readline = require('readline-sync')
let opcionMenu = ""
let nombre = ""
do{opcionMenu = readline.question(`
    Menu de opciones:
    A. Saludo
    B. Saludo personalizado
    3. Salir
`)
switch(opcionMenu.toUpperCase()){
    case "A":
        console.log(`Bienvenid@`)
        break
    case "B":
        nombre = readline.question("Ingrese su nombre: ")
        console.log(`Bienvenid@ ${nombre}`)
        break
}
} while(opcionMenu != "3")
    console.log(`Que tenga buen dia, gracias por usar el menú`)