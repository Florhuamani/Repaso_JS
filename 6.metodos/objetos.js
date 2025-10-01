let objt={}
console.log(objt)

let objeto={}
objeto["nombre"]="ruth"
//Si no existe la clave, se crea. Caso contrario si existe se actualiza el valor.
objeto["nombre"]="jose"
objeto["apellido"]="Castillo"
objeto["edad"]=19
objeto["CUI"]=92849202
//notación de tipo punto
console.log(objeto.nombre)
//notación de tipo llaves
console.log(objeto["edad"])
delete objeto.edad
console.log(objeto)
