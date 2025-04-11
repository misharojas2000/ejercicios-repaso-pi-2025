/**40. Validar correo electrónico
Tema: lógica dentro de función
Crea una función validarCorreo(correo). Debe verificar si el string contiene "@" y "."
Si es así, muestra "Correo válido", si no, "Correo inválido".
Solicita un correo al usuario. */
const readline = require('readline-sync')
let correo = readline.question(`Ingrese un correo electronico: 
    `)
function validarCorreo(correo){
return correo.includes('@') && correo.includes('.')
}
if(validarCorreo(correo)){
    console.log(`Correo válido`)
} else {console.log(`Correo inválido`)}