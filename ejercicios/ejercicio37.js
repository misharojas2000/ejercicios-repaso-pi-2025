/**37. Área de un triángulo
Tema: función con retorno
Crea una función calcularAreaTriangulo(base, altura). Debe retornar el área usando la fórmula (base * altura) / 2.
Llama a la función con los valores ingresados por el usuario e imprime el resultado. */
const readline = require('readline-sync')
function calcularAreaTriangulo(base, altura){
    return (base * altura) / 2
}
let base = Number(readline.question(`Ingrese la base del triangulo:
    `))
let altura = Number(readline.question(`Ingrese el altura del triangulo:
    `))
    let area = calcularAreaTriangulo(base, altura)
console.log(`El área del triángulo es : ${area}`)
