/**34. Promedio por estudiante (matriz)
Tema: matriz + anidado
const notas = [
    [80, 90, 100], // Estudiante 1
    [70, 60, 75], // Estudiante 2
    [88, 95, 92], // Estudiante 3
]
Calcula y muestra el promedio de cada estudiante en una lista. */
const notas = [
    [80, 90, 100], // Estudiante 1
    [70, 60, 75], // Estudiante 2
    [88, 95, 92], // Estudiante 3
]
for(let i = 0; i < notas.length; i++){
    let sumaNotas = 0
    let cantidadNotas = notas[i].length
    for(let i2 = 0; i2 < cantidadNotas; i2 ++){
        sumaNotas += notas[i][i2]
    }
    promedio = sumaNotas / cantidadNotas
    console.log(`El promedio del estudiante ${i + 1} es de: ${promedio.toFixed(2)}%`)
}
