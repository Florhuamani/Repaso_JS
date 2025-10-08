let numeros=[3,4,7,8,5,4]
let [a,b]=numeros


let [e,f,...rest]=numeros
rest

let alumno={
    "nombre":"Ronny",
    "edad":20
}
alumno["dni"]=8283929
//spread operation

let actualizacionAlumno={...alumno,"t_sangre":"b+"}
let {nombre,t_sangre}=actualizacionAlumno
nombre
t_sangre
actualizacionAlumno

// Agregar con el operador spread las letras faltantes de las vocales
let vocales=['a','e']
let completevocales=[...vocales,'i','o','u']
completevocales

