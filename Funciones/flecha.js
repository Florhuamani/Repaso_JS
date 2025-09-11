//Es la nueva versión de ECMA SCRIPT6 para la creación de funciones, el objetivo de esta función es facilitar la creación de funciín y que el código sea legible:
const suma=(a,b)=>{return a+b}
console.log(suma(23,45))

const saludoNombre=nombre=>{
let mensaje=`hola ${nombre}`
return mensaje
}
console.log(saludoNombre("José"))

const saludo=()=>{
    return "hola"
}
console.log(saludo())
