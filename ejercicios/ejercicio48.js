/**48. Verificar si un producto está en la lista
Tema: includes()
const productos = ['Mouse', 'Teclado', 'Monitor']
Verifica si "Monitor" está en el arreglo.
Muestra true o false. */
const productos = ['Mouse', 'Teclado', 'Monitor']
const incluido = productos.includes("Monitor")
console.log(`Monitor está incluido en el arreglo? ${incluido}`)