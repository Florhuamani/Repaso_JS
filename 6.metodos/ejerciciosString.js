/*
1. Crear un programa,  haciendo uso de una función un contador de vocales, la función deberá recibir un texto y la vocal a buscar y retornar la cantidad de veces que se encuentra dicha vocal.
Hacer uso de los métodos para string*/

let otroTexto="hola, cómo estás"
let vo="o"
//expresiones regulares
const contarVocales=(txt,v)=>{
    return txt.toLowerCase().split(v.toLowerCase()).length-1
}
console.log(contarVocales(otroTexto,vo))


/**
 * 2. Crear un programa que haciendo uso de una función pueda recibir una lista de amigos y que retorne otra lista de amigos y que retorne otra lista pero con los nombres en mayúscula. */ 
function textoMayuscula(lista){
    let nuevaLista=[]
    for(let i=0;i<lista.length;i++){
        nuevaLista[i]=lista[i].toUpperCase()
    }
    return nuevaLista
}
let amigos=["José", "Dara", "Ruth"]
console.log(textoMayuscula(amigos))