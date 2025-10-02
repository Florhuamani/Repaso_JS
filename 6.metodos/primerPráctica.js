//Crear una lista de objetos de 5 vehículos que tengan información  como marca, modelo,año de fabricación, precio, número de placa.
let listaVehiculos=[
    {"marca":"toyota","modelo":"nova s","añofabricación":"2021","precio":36000,"numeroplaca":"763"},
    {"marca":"Nissan","modelo":"voyager x","año de fabricación":"2019","precio":31400,"numeroplaca":"344"},
    {"marca":"Kya","modelo":"Bolt","añofabricación":"2018","precio":14000,"numeroplaca":"983"},
    {"marca":"Chevrolet","modelo":"Explorer","añofabricación":"2025","precio":76000,"numeroplaca":"673"},
    {"marca":"Hyundai","modelo":"Horizon","añofabricación":"2022","precio":72000,"numeroplaca":"6378"}
]
//Crear funciones para cada uno de estas acciones.
//Actualizar el valor de una de sus caracteristicas.
const actualizar=listaVehiculos.map(el=>{el["numeroplaca"]=983
    return el
})
console.log(actualizar)
//Agregar un nuevo vehículo.
let añadirVehiculo={"marca":"ferrari","modelo":"abcd","añofabricación":"2025","precio":16700,"numeroplaca":234}
console.log(añadirVehiculo)
//Poder filtrar los vehículos por su año de fabricación.
let añoFabricación=listaVehiculos.filter(listaVehiculos=>listaVehiculos.añofabricación<2022)
console.log(añoFabricación)

//Poder filtrar un solo vehículo por su número de placa.
let filtrarVehiculo=listaVehiculos.filter(listaVehiculos=>listaVehiculos.numeroplaca===983)
console.log(filtrarVehiculo)