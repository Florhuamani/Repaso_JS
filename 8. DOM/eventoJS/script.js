const buttonFuncExterna=document.querySelector("#funcion_externa")
buttonFuncExterna.addEventListener(`click`,funcionExterna)
function funcionExterna(){
    alert("Me estoy ejecutando desde una función externa")
}

const buttonFuncCallback=document.querySelector("#funcion_callback")
buttonFuncCallback.addEventListener(`click`,()=>{
    alert("Me estoy ejecutando desde un callback con una arrow function.")
})