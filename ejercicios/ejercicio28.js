/**28. Validación de contraseña
Tema: verificación en do...while
const CONTRASENA_CORRECTA = 'claveSegura'
Repite el ingreso de contraseña hasta que coincida con la correcta.
Muestra "Contraseña incorrecta" cada vez que falle y "Acceso permitido" al final. */
const readline = require('readline-sync')
const CONTRASENA_CORRECTA = 'claveSegura'
let ingresarContrasena = ""
do{
    ingresarContrasena = readline.question(`Ingrese la contrasena:
        `).trim()
        if(ingresarContrasena !== CONTRASENA_CORRECTA){
            console.log("Contraseña incorrecta")
        }
} while(ingresarContrasena !== CONTRASENA_CORRECTA)
    console.log("Acceso permitido")
