/**18. Validar usuario y contraseña
Tema: doble condición
let usuario = 'admin'
let contrasena = '1234'
Verifica si ambos valores son correctos.
Si lo son, imprime "Acceso permitido"; si no, "Datos incorrectos". */
const readline = require('readline-sync')
let usuario = "admin"
let contrasena = "1234"
let acceso = ""
let ingresarUsuario = readline.question("Ingrese su usuario:   ").toLowerCase().trim()
let ingresarContrasena = readline.question("Ingrese su contrasena:   ").trim()
if(usuario === ingresarUsuario && contrasena === ingresarContrasena){
    acceso = "Acceso permitido"
}else{acceso = "Datos incorrectos"}
console.log(`${acceso}`)