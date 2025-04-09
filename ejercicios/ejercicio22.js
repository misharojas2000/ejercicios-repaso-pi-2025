/**22. Tipo de transporte
Tema: switch con texto
let tipo = 'bicicleta'
Muestra:
"Vehículo con motor" para "carro" o "moto"
"Vehículo sin motor" para "bicicleta" o "patineta"
"Tipo desconocido" si no coincide con ningún caso */
let tipo = 'barco'
let vehiculo = ""
switch(tipo){
    case "carro":
    case "moto":
        vehiculo = "vehículo con motor"
        console.log(`${tipo} es un ${vehiculo}`)
        break
    case "bicicleta":
    case "patineta":
        vehiculo = "vehículo sin motor"
        console.log(`${tipo} es un ${vehiculo}`)
        break
    default:
        vehiculo = "tipo desconocido"
        console.log(`${tipo} es un vehículo ${vehiculo}`)
}