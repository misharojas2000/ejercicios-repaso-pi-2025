/**46. Calcular promedio de notas
Tema: reduce()
const notas = [80, 90, 70, 100]
Usa reduce() para obtener la suma de las notas y luego calcula el promedio. */
const notas = [80, 90, 70, 100]
const promedio = notas.reduce((suma, nota) => suma += nota, 0) / notas.length
console.log(`El promedio de las notas es de: ${promedio}`)