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