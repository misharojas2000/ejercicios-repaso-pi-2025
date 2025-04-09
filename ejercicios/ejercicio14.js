/**14. Descuento por edad
Tema: condición múltiple
let edad = 68
Muestra "Descuento especial" si tiene menos de 12 o más de 65 años. De lo contrario, muestra "Sin descuento". */
let edad = 68
let aplicaDescuento = ""
if(edad < 65 || edad > 65){
    aplicaDescuento = "Descuento especial"
}else{
    aplicaDescuento = "Sin descuento"
}
console.log(`${aplicaDescuento}`)