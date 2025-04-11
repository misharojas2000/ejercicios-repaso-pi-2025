/**41. Generar contraseña aleatoria
Tema: lógica con bucle dentro de función
Crea una función generarContraseña(longitud). Debe retornar una contraseña aleatoria con letras y números.
Ejemplo: "a7d3g8" si la longitud es 6.
(No necesitas usar caracteres especiales). */
function generarContraseña(longitud){
    const variables = 'abcdefghijklmnopqrstuvwxyzABDCEFGHIJKLMNOPQRSTUVWXYZ1234567890'
    let contrasena = ''
    for(let i = 0; i < longitud; i++){
        const iAleatorio = Math.floor(Math.random() * variables.length)
        contrasena += variables[iAleatorio]
    }
    return contrasena
}
let nuevaContrasena = generarContraseña(6)
console.log(`La contraseña aleatoria temporal es: ${nuevaContrasena}`)