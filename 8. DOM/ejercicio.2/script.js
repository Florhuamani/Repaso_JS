let titulo=document.querySelector("h1")
let primerTítulo=titulo.textContent
titulo.textContent="Otro Titulo"
let contenido=document.querySelector("#contenido")


contenido.innerHTML=`
    <p>${primerTítulo}</p>
`