const readline = require('readline-sync')
const ESTATURA_MINIMA = 60
const ESTATURA_MAXIMA = 120

let estaturaTexto = readline.prompt({ prompt: 'Ingrese la estatura del cliente en centímetros: ' })

let estatura = parseInt(estaturaTexto)

let puedePasar = estatura >= ESTATURA_MINIMA && estatura <= ESTATURA_MAXIMA

console.log(`¿El cliente es lo suficientemente alto puede pasar? ${puedePasar}`)
