/**9. Comparación entre dos números
Tema: operadores de comparación
let numeroA = 15
let numeroB = 20
Muestra si numeroA es mayor, menor o igual que numeroB. */
let numeroA = 15
let numeroB = 20
let resultado = ""
if(numeroA > numeroB){
    resultado = "es mayor que"
}else if(numeroA < numeroB){
    resultado = "es menor que"
}else {resultado = "es igual que"}
console.log(`${numeroA} ${resultado} ${numeroB}.`)