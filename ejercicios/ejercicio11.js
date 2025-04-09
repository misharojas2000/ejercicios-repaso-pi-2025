/**11. Puede conducir o no
Tema: operadores lógicos &&
let edad = 22
let tieneLicencia = true
Usa una condición para verificar si puede conducir. */
const readline = require('readline-sync')
let edad = 22
let tieneLicencia = true
let edadQuestion = Number(readline.question("Cual es su edad?"))
let licenciaQuestion = readline.question("Tiene licencia? (si/no): ").toLowerCase()
tieneLicencia = edadQuestion >= edad && licenciaQuestion === "si"
console.log(`El usuario es mayor de edad y tiene licencia? ${tieneLicencia}`)


//Para que se vea mejor también se podría utilizar el condicional if-else
let conduce = ""
if(edadQuestion >= edad && licenciaQuestion === "si"){
    conduce = "Usted puede conducir."
}else{
    conduce = "Usted no puede conducir."
}
console.log(`${conduce}`)
