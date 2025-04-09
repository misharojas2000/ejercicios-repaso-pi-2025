/**23. Mes del año
Tema: agrupación de casos
let mes = 'abril'
Muestra cuántos días tiene el mes:
30 días → "abril", "junio", "septiembre", "noviembre"
31 días → "enero", "marzo", "mayo", "julio", "agosto", "octubre", "diciembre"
28 días → "febrero"
Otro → "Mes no válido" */
let mes = 'abril'
let cantidadDias = ""
switch(mes){
    case "abril":
    case "junio":
    case "septiembre":
    case "noviembre":
        cantidadDias = "30 días"
        console.log(`${mes} tiene ${cantidadDias}`)
        break
    case "febrero":
        cantidadDias = "28 días"
        console.log(`${mes} tiene ${cantidadDias}`)
        break
    case "enero":
    case "marzo":
    case "mayo":
    case "julio":
    case "agosto":
    case "octubre":
    case "diciembre":
        cantidadDias = "31 días"
        console.log(`${mes} tiene ${cantidadDias}`)
        break
    default:
        cantidadDias = "mes no válido"
        console.log(`${mes} es un ${cantidadDias}`)
}