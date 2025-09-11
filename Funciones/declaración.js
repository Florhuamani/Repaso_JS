//Crear funcionespara el manejo de operadores aritméticos:
// let numeroUno=34
// let numeroDos=37 
// let suma=numeroUno+numeroDos
// console.log(suma)

//Función por declaración:
function sumaDeDosNumeros(a,b){
    return a+b
}
//llamada de función con argumentos posicionales:
console.log(sumaDeDosNumeros(34,37))
console.log(sumaDeDosNumeros(36,67))
//llamada de función con argumento nominal:
console.log(sumaDeDosNumeros(b=56,a=37))