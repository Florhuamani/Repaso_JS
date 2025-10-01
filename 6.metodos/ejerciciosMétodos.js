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
