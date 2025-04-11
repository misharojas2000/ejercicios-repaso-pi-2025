/**36. Saludo personalizado
Tema: función con parámetro, sin retorno
Crea una función llamada saludar(nombre), Debe imprimir un saludo como:
"Hola, Juan. Bienvenido a la clase de programación."
Llama a la función con el nombre ingresado por el usuario. */
const readline = require('readline-sync')
let nombre = readline.question(`Por favor, ingrese su nombre:
    `)
function saludar(nombre){
    console.log(`Hola, ${nombre}. Bienvenido a la clase de programación`)
}
saludar(nombre)