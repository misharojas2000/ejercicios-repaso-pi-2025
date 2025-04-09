/**17. Mayor de tres números
Tema: if-else anidado
let a = 10,
    b = 5,
    c = 7
Muestra cuál es el número mayor entre los tres. */
let a = 10
let b = 5
let c = 7
if(a > b){
    if(a > c){console.log(`${a} es mayor que ${b} y ${c}.`)}
}else{if(b > c){
    console.log(`${b} es mayor que ${a} y ${c}.`)
}else{console.log(`${c} es mayor que ${a} y ${b}.`)}

}