/**26. Suma hasta 100
Tema: acumulador en while
const numeros = [10, 15, 20, 25, 30, 5]
Usa un ciclo while para sumar los elementos hasta que la suma llegue o supere 100.
Imprime la suma y cuántos números usaste. */
const numeros = [10, 15, 20, 25, 30, 5]
suma = 0 // acumulador de suma
i = 0 // recorre el arreglo numeros
while(i < numeros.length && suma < 100){
    suma += numeros[i]
    i++
}
console.log(`La suma de los números es ${suma}, la cantidad de números usados fue de ${i}, y
    para lograr este resultado, se usaron los números ${numeros.slice(0,i)}`)
