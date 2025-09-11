//Crear una función que reciba por parámetro una lista y un elemento a encontrar, retornar si el elemento fue encontrado o no.

function buscarElemento(lista, elemento){
    for (let i=0;i<lista.length;i++){
        if(lista[i]==elemento){
            mensaje="elemento encontrado"
            return mensaje
        }
    }
    mensaje="elemento no encontrado"
    return mensaje
}
let amigos=["Ashly","Alex","Ana"]
console.log(buscarElemento(amigos,"Ana"))