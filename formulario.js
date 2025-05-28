var formulario = document.querySelector("#form")

formulario.onsubmit = function(e) {

  e.preventDefault(); //  el método correcto es preventDefault

  const n = formulario.elements[0] // se cambia var a let por estar en desuso  
  
  const edadInput = formulario.elements[1] // Cambio de nombre para evitar conflicto con e que es un evento y no una variable
                                           // se cambia var a let por estar en desuso 

  const na = formulario.elements[2]  // se cambia var a const por estar en desuso 

  let nombre = n.value  // se cambia var a let por estar en desuso 
  let edad = edadInput.value  // se cambia var a let por estar en desuso 

  let i = na.selectedIndex // se cambia var a let por estar en desuso 
  var nacionalidad = na.options[i].value // se cambia var a let por estar en desuso 
  console.log(nombre, edad)
  console.log(nacionalidad)

  if (nombre.length === 0) {
    n.classList.add("error")
  }
  if (edad < 18 || edad > 120) {
    edadInput.classList.add("error") // se cambia edadInput en lugar de e que se declaro en la linea 8
  }

  if (nombre.length > 0 && (edad > 18  && edad < 120) ) {  //se acomoda para ser mas leible para los demas
    agregarInvitado(nombre, edad, nacionalidad)
  }
}

var botonBorrar = document.createElement("button")
botonBorrar.textContent = "Eliminar invitado"
botonBorrar.id = "boton-borrar"
var corteLinea = document.createElement("br")
document.body.appendChild(corteLinea)
document.body.appendChild(botonBorrar);

function agregarInvitado(nombre, edad, nacionalidad) {

  if (nacionalidad === "ar") {
    nacionalidad = "Argentina"
  }
  else if (nacionalidad === "mx") {
    nacionalidad = "Mexicana"
  }
  else if (nacionalidad === "vnzl") {
    nacionalidad = "Venezolana"
  }
  else if (nacionalidad === "per") {
    nacionalidad = "Peruana"
  }

  const lista = document.getElementById("lista-de-invitados")  // se cambia var a let por estar en desuso 

  const elementoLista = document.createElement("div")  // se cambia var a let por estar en desuso 
  elementoLista.classList.add("elemento-lista") // se remplaza classList.add en lugar de classList.added ya que no existe added
  lista.appendChild(elementoLista)

  const spanNombre = document.createElement("span")  // se cambia var a let por estar en desuso 
  const inputNombre = document.createElement("input") // se cambia var a let por estar en desuso 
  const espacio = document.createElement("br") // se cambia var a let por estar en desuso 
  spanNombre.textContent = "Nombre: "
  inputNombre.value = nombre 
  elementoLista.appendChild(spanNombre)
  elementoLista.appendChild(inputNombre)
  elementoLista.appendChild(espacio)

  function crearElemento(descripcion, valor) {
    const spanNombre = document.createElement("span")  // se cambia var a let por estar en desuso 
    const inputNombre = document.createElement("input") // se cambia var a let por estar en desuso 
    const espacio = document.createElement("br") // se cambia var a let por estar en desuso 
    spanNombre.textContent = descripcion + ": "
    inputNombre.value = valor 
    elementoLista.appendChild(spanNombre)
    elementoLista.appendChild(inputNombre)
    elementoLista.appendChild(espacio)
  }

  crearElemento("Nombre", nombre)
  crearElemento("Edad", edad)
  crearElemento("Nacionalidad", nacionalidad)

  const botonBorrar = document.createElement("button")  // se cambia var a let por estar en desuso 
  botonBorrar.textContent = "Eliminar invitado"
  // botonBorrar.id = "boton-borrar" para evitar múltiples eventos repitiendo el id que debe ser unico
  const corteLinea = document.createElement("br") // se cambia var a let por estar en desuso 
  elementoLista.appendChild(corteLinea)
  elementoLista.appendChild(botonBorrar);

  botonBorrar.onclick = function() {
    // this.parentNode.style.display = 'none';
    botonBorrar.parentNode.remove()   
  }
}