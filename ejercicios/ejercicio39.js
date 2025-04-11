/**39. Suma de arreglo
Tema: función con arreglo como parámetro
Crea una función sumarArreglo(arreglo). Debe retornar la suma total de los números ingresados por el usuario según un 
menú interactivo que permita ingresar un número y luego preguntar si desea ingresar más números hasta que ya no desee
ingresar más números y que muestre la suma.
Utiliza push para ingresar cada número dado por el usuario */
const readline = require('readline-sync')
let numeros = []
let continuar = ""
do{
    let ingresarNumero = Number(readline.question(`Ingrese un numero:
`))
        numeros.push(ingresarNumero)

    continuar = readline.question(`Desea ingresar otro numero? (si/no):
        `).toLowerCase()
} while (continuar === "si")
console.log(`Los números que desea sumar son: ${numeros}`)
function sumarArreglo(numeros){
    let suma = 0
    for(let i = 0; i < numeros.length; i++){
        suma += numeros[i]
    }
    return suma
}
let resultado = sumarArreglo(numeros)
console.log(`El resultado de la suma es: ${resultado}`)