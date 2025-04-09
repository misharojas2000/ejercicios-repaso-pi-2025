/**16. Ingreso a evento
Tema: operadores lógicos
let tieneEntrada = true
let estaEnLista = false
Muestra "Puede ingresar" solo si tiene entrada y está en lista. Si no, muestra "Acceso denegado".*/
const readline = require('readline-sync')
let tieneEntrada = true
let estaEnLista = false
let entradaQuestion = readline.question("Tiene entrada? (si/no)  ").toLowerCase()
let listaQuestion = readline.question("Esta en la lista? (si/no)  ").toLowerCase()
tieneEntrada = entradaQuestion === "si"
estaEnLista = listaQuestion === "si"
let acceso = ""
if(tieneEntrada === true && estaEnLista === true){
    acceso = "Puede ingresar"
}else{acceso = "Acceso denegado"}
console.log(`${acceso}`)