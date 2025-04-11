/**38. Verificar si un número es par
Tema: función condicional
Crea una función esPar(numero). La función debe retornar true si el número es par, o false si es impar.
Prueba la función con el número 7. */
const readline = require('readline-sync')
let numero = Number(readline.question(`Ingrese un numero:
    `))
function esPar(numero){
    if(numero % 2 === 0){
        return true
    } else {
        return false
    }
} let resultado = esPar(numero)
console.log(`El número ${numero} es par? ${resultado}`)