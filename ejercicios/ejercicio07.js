/**7. Aplicar descuento
Tema: operadores aritméticos y porcentaje
let precioOriginal = 200
let descuento = 20 // porcentaje
Calcula y muestra el precio final después del descuento. */
let precioOriginal = 200
let descuento = 0.2 // porcentaje
let precioConDescuento = precioOriginal * descuento
let precioTotal = precioOriginal - precioConDescuento
console.log(`El precio del producto es de ${precioOriginal} monedas, el descuento es de ${precioConDescuento} monedas y el valor final del producto con el descuento aplicado es de ${precioTotal} monedas.`)