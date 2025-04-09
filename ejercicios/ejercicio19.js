/**19. Calculadora básica
Tema: condiciones múltiples + operadores
let num1 = 12
let num2 = 3
let operacion = '+'
Usa if/else if para realizar:
Suma, resta, multiplicación o división según operacion. Muestra el resultado final. */
let num1 = 12
let num2 = 3
let operacion = '*'
let suma = num1 + num2
let resta = num1 - num2
let division = num1 / num2
let multiplicacion = num1 * num2
if(operacion === "+"){console.log(`${num1} + ${num2} = ${suma}`)
}else if(operacion === "-"){console.log(`${num1} - ${num2} = ${resta}`)
}else if(operacion === "/"){console.log(`${num1} / ${num2} = ${division}`)
}else if(operacion === "*"){console.log(`${num1} * ${num2} = ${multiplicacion}`)
}else{console.log(`Syntax Error`)}