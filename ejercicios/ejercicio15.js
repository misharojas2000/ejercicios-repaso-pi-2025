/**15. Clasificación de notas
Tema: else if
let nota = 83
Imprime:
"A" si es mayor o igual a 90
"B" si es entre 80 y 89
"C" si es entre 70 y 79
"D" si es entre 60 y 69
"F" si es menor a 60 */
let nota = 83
let resultado = ""
if(nota >= 90){
    resultado = "A"
}else if(nota >= 80 && nota <= 89){
    resultado = "B"
}else if(nota >= 70 && nota <= 79){
    resultado = "C"
}else if(nota >= 60 && nota <= 69){
    resultado = "D"
}else{resultado = "F"}
console.log(`Si su calificación es ${nota}, su nota es: ${resultado}`)