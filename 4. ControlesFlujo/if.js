//Estructura de una condición:
//1. Palabra reservada (if)
//2. La condición o expresión a evaluar (que deberá ser siempre un tipo de dato booleano), la expresión o condición debe estar entre parentesis.
//3. El cuerpo que contendrá el código a ejecutar en caso la condición sea verdadera.

//4. Palabra reservada else
//5. Cuerpo que contedrá el código a ejecutar en caso la condición sea falso

if (true){
    let suma=24+34;
    let resta=14-14;
    console.log(suma,resta)
}
else{
    console.log("Soy falso")
};

//Crear un programa que evalúe si un número es mayor al otro y si este número es a la vez un número par
let firstNumber=18
let secondNumber=17
if (firstNumber>secondNumber){
    if (firstNumber%2==0){
        console.log("El número es mayor y par")
    }else{
        console.log("El número es mayor e impar")
    }

}else{
    console.log("El número es menor")
    
}


//Crear un programa que me muestre el número en texto

//forma del profe
let numero=2
if (numero==1){
    console.log("uno")
}
else if (numero==2){ //if anidado = else if.  cada linea de else if es evaluada por la computadora
    console.log("dos")
}
else if (numero==3){
    console.log("tres")
}
else if (numero==4){
    console.log("cuatro")
}
else if (numero==5){
    console.log("cinco")
}


switch (numero) { //usa menos poder computacional
    case 1:
        console.log("uno")
        break //cada que uso CASE y SWITCH se debe romper la cache ya que el switch almacena en cache
    case 2:
        console.log("dos")
        break
    case 2:
        console.log("dos")
        break
    default: // DEFAUL: es como un else. pero usa menos cpu
        console.log("fuera de rango")
        break
}


// // en caso de que no se cumpla la condicion, IF permite permite agregar una condicion
// // ELSE que incluye un bloque de codigo que se ejecuta al no cumplirse la primera condicion
// // no puede haber un ELSE sin compañia del IF
// var aprobe = true;
// if (aprobe == true) {
//     console.log("de vacaciones 😆!!!")
// }
// else {
//     console.log("a recuperacion 😢")
// };