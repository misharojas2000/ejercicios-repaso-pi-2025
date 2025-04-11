/**27. Juego del número secreto
Tema: do...while con condición
const NUMERO_SECRETO = Math.floor(Math.random() * 100) + 1
console.log(`El número secreto es: ${NUMERO_SECRETO}`)
Crea un juego que pide números hasta adivinar el número secreto.
Muestra: "¡Adivinaste!" cuando el intento sea correcto.
Haz que el valor de intento cambie dentro del bucle. */
const readline = require('readline-sync')
const NUMERO_SECRETO = Math.floor(Math.random() * 100) + 1  //Math.floor() aproxima el numero hacia el menor más cercano 
// (quita el decimal)
//Math.random() genera un numero aleatorio entre 0 y 1 por lo que al multiplicar por 100 y aproximarlo tenemos un numero 
//entero entre 0 y 100
let intento = 0
do{
  intento = Number(readline.question(`Ingresa un numero del 1 al 100:
    `))
    if(intento < NUMERO_SECRETO) {
        console.log(`¡Demasiado bajo! Intenta con un número más alto.
          `)
      } else if((intento > NUMERO_SECRETO)){
        console.log(`¡Demasiado alto! Intenta con un número más bajo.
          `)}
} while (intento !== NUMERO_SECRETO)
    console.log("Adivinaste!")
    console.log(`El número secreto es: ${NUMERO_SECRETO}`)
