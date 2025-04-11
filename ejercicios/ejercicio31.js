/**31. Contar números pares
Tema: condición dentro de fo
const numeros = [2, 7, 10, 15, 22, 33]
Cuenta cuántos números del arreglo son pares. */
const numeros = [2, 7, 10, 15, 22, 33]
let i = 0
let numerosPares = 0
let nuevoArreglo = []
for(i = 0; i < numeros.length; i++){
if(numeros[i] % 2 === 0){
    numerosPares++
    nuevoArreglo.push(numeros[i])
}
}
console.log(`La cantidad de números pares es: ${numerosPares}, los números son: ${nuevoArreglo}`)