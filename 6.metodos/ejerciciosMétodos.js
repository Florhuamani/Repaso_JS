let datosAlumnos={
    "nombre":"Antonio",
    "apellido":"Linares"
}
//agregar edad y sexo:
datosAlumnos["edad"]="23"
datosAlumnos["sexo"]="masculino"
console.log(datosAlumnos)
//Actualizar apellido
datosAlumnos["apellido"]="Flores"
console.log(datosAlumnos)
//Eliminar sexo
delete datosAlumnos.sexo
console.log(datosAlumnos)

let lista=[
    {
        "nombre":"Ruth","edad":19,"CUI":"7637236"
    },
    {
        "nombre":"Flor","edad":18,"CUI":"98493087"
    },
    {
        "nombre":"Ashly","edad":19,"CUI":"939389"
    }
]
let listaMenores=lista.filter(al=>al.edad<19)
console.log(listaMenores)

//agregar género
let nuevaLista=lista.map(el=>{return el["género"]="femenino"})
console.log(lista)

//de la lista se desea mostrar a la persona que tenga com CUI 7637236
let encontrarCUI=lista.find(el=>{return el["CUI"]="7637236"})
console.log(encontrarCUI)

