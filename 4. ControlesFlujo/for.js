for (let i = 0; i < 5; i++) {
    console.log("Contador en for:");
  }

/*
Syntaxis de for:
- Keyword
- Condición General
- Cuerpo

Partes de la condición general:
- Expresión inicial
- Condición
- Expresión final
*/

/*
suma normal inicial = inicial + 1
incremento inicial++
inicial+=1
*/

for(let inicial = 1;inicial<10;inicial++){
  console.log("hola")
}

/*
For es usado para acceder a recorrer(iterar) los elementos de una lista de diccionario
*/

let amigos = ["amigo 1","amigo 2","amigo 3","amigo 4"]
console.log(amigos)
console.log(amigos[3])

//Existe un método para saber la cantidad de elementos que tiene una lista "length" (GallinaTieneHuevo).
console.log(amigos[amigos.length -1])


//Ejercicio:
//Recorrer o iterar la lista de amigos con for:
for(let i=0;i<3;i++){
  console.log(amigos[i])
}

for(let i=0;i<amigos.length;i++){
  console.log(amigos[i])
}

//Ejercicio:
let frutas = ["manzana", "naranja", "piña", "plátano", "pera", "sandía"]
for(let i=3;i<frutas.length;i++){
  console.log(frutas[i])
}


for(let i=frutas.length-3;i<frutas.length ;i++){
  console.log(frutas[i])
}

//Ejercicio
for(let i=0;i<frutas.length;i++){
  if (frutas[i]=="manzana" || frutas[i]=="piña" || frutas[i]=="sandía"){
    console.log(frutas[i])
  }
}