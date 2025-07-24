//Operadores unarios
//Operador de negación 
//Operador está a la izquierda del valor y cómo resultado obtenemos otro valor.
let negación=!false
//Expresión es un valor complejo que será solucionado y nos producirá o retornar un nuevo valor
console.log(negación)

//operadores binarios
//Son los que evalúan dos valores y nos dan como resultado un nuevo valor
let suma=12+12
console.log(suma)

//Tarea: Operadores de comparación 
//Igualdad (==) Verifica la igualdad de dos expresiones sin tener en cuenta el tipo de dato.
console.log(2 == "2")
//Igualdad estricta (===) Hace lo mismo que el anterior, pero verificando también que coincidan los tipos de datos.
console.log(2 === "2")
//Desigualdad (!=) Funciona de la misma forma que la igualdad, pero negándola.
console.log(2 != "2")
//Desigualdad estricta (!==) Lo mismo que la igualdad estricta, pero negándola.
console.log(2 !== "2") 
//Mayor que (>)
console.log(2>6)
//Menor que(<)
console.log(4<9)
//Mayor o igual que (>=)
console.log(12>=6*2)
//Menor o igual que (<=)
console.log(6<=6.1)
//Operadores lógicos
//Se utilizan normalmente con valores booleanos, cuando lo son, devuelven un valor booleano. Sin embargo, los operadores && y || en realidad devuelven el valor de uno de los operandos específicados.
//Operador AND(&&): Retorna true si ambos operandos son valores verdaderos y false en cualquier otro caso.
console.log(alert(true && true))
//Operador OR(||): Este operador está pensado para manipular solo valores booleanos. Si cualquiera de sus argumentos es true, retorna true, de lo contrario retorna false.
let hour = 9;

if (hour < 10 || hour > 18) {
  alert( 'La oficina esta cerrada.' );
}
//Operador NOT(!):Acepta un solo argumento y realiza:
// - Convierte el operando al tipo booleano: *true / false*.
// - Retorna el valor contrario 

//Operador ternario
// Es el único operador en JavaScript que tiene tres operandos. Este operador se usa con frecuencia como atajo para la instrucción if.
//sintaxis: "condición ? expr1 : expr2"
//Condición: Una expresión que se evalua como true o false
//expr1, expr2: Expresión con valores de algún tipo.
"La Cuota es de:  " + (isMember ? "$2.00" : "$10.00");
