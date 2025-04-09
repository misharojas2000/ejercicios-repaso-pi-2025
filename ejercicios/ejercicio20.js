/**Usa switch para mostrar el día correspondiente:
1 → "Lunes"
2 → "Martes"
3 → "Miércoles"
4 → "Jueves"
5 → "Viernes"
Cualquier otro número → "Día inválido"*/
const readline = require('readline-sync')
let numeroDia = Number(readline.question("Ingrese el numero de dia de la semana: "))
let diaTexto = ""
switch(numeroDia){
    case 1:
        diaTexto = "Lunes"
        console.log(`El número ${numeroDia} equivale al día ${diaTexto}`)
        break
    case 2:
        diaTexto = "Martes"
        console.log(`El número ${numeroDia} equivale al día ${diaTexto}`)
        break
    case 3:
        diaTexto = "Miércoles"
        console.log(`El número ${numeroDia} equivale al día ${diaTexto}`)
        break
    case 4:
        diaTexto = "Jueves"
        console.log(`El número ${numeroDia} equivale al día ${diaTexto}`)
        break
    case 5:
        diaTexto = "Viernes"
        console.log(`El número ${numeroDia} equivale al día ${diaTexto}`)
        break
    case 6:
        diaTexto = "Sábado"
        console.log(`El número ${numeroDia} equivale al día ${diaTexto}`)
        break
    case 7:
        diaTexto = "Domingo"
        console.log(`El número ${numeroDia} equivale al día ${diaTexto}`)
        break
    default:
        console.log(`El número ${numeroDia} no equivale a ningún día de la semana`)
}
