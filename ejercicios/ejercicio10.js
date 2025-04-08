/**10. Verificar si es par o impar
Tema: operador módulo %
let numero = 9
Muestra si el número es par o impar. */
let numero = 9
let resultadoNumero = ""
if(numero % 2 === 0 ){
    resultadoNumero = "es un número par"
} else {
    resultadoNumero = "es un número impar"
}
console.log(`${numero} ${resultadoNumero}`)