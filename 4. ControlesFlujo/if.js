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

//Crear un programa que me muestre el númerp en texto