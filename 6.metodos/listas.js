let lista=[]
lista[0]="manzana"
lista[1]="pera"
console.log(lista.length)
console.log(lista)

/**Crear una lista vacía y agregar de manera automática los números pares que existen entre 0 y 20 */

let numerosPares=[]
for(let i=1;i<=20;i++){
    if(i%2==0){
        numerosPares[numerosPares.length]=i
    }
}
numerosPares

let numeroPares=[]
let contador=0
for(let i=1;i<=20;i++){
    if(i%2==0){
        numeroPares[contador]=i
        contador++
    }
}
numeroPares

let numPar=[]
for (let i=1;i<20;i++){
    if(i%2==0){
        numPar.push(i)
    }
}
console.log(numPar)

let amigos=['e','i','o']
amigos.unshift('a')
amigos.push('u')
console.log(amigos )

let frutas=["manzana","naranja","plátano","mandarina"]
frutas.pop()
frutas.shift()
frutas

let texto=["Es","una","","oración"]
delete texto[2]
texto

let vocales=['a','e','i','o','u']
vocales.splice(2,1)
vocales

let amigoPrimaria=['amigo1','amigo2','amigo3','amigo4']
let amigoSecundaria=['amigo5','amigo6']
let amigoSuperior=['amigo7','amigo8']
let friends=amigoPrimaria.concat(amigoSecundaria,amigoSuperior)
friends

let amigo=["amigo1","amigo2","amigo3"]
amigo.find(el=>{el=="amigo3"})


let numeros=[1,2,3,4,5,6,7,8,9,0]
let numeroMenor=numeros.filter(num=>num<=6)
numeroMenor

const miFuncion=a=>{}
let numero=[1,2,3,4,5,6]
numero.forEach(n=>{console.log(n+1)})

let number=[1,2,3,4,5,6]
let newNumber=number.map(n=>{return n+1})
console.log(newNumber)

let vocal=['a','i','o','u']
let buscaE=vocal.includes('e')
console.log(buscaE)

let numbers=[3,5,84,2,4,24,1,0]
//Deseo una lista con los numeros que sean menor de 4
let nuevoNumero=numbers.filter(n=>{return n<10})
console.log(nuevoNumero)

//De una lista número del 1 al 10 usando filter eliminar el número 1.
let listaNumeros=[1,2,3,4,5,6,7,8,9,10]
listaSinUNo=listaNumeros.filter(n=>{return n!=1})
console.log(listaSinUNo)

let lisNumeros=[10,13,15,17]
//Devolver el número menor de 10
let menorDiez=lisNumeros.find(n=>{return n>10})
console.log(menorDiez)

let alumno={
    "nombre":"Miguel",
    "edad":"17"
 }
 console.log(alumno.nombre)
 