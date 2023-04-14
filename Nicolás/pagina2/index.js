var formulario = document.getElementById("enviarcomentario")

function confirmarmensaje(){
    var mensaje = document.createTextNode(" Tu mensaje ha sido enviado! Gracias!");
    document.getElementById("contacto").appendChild(mensaje)
}
formulario.addEventListener('click',confirmarmensaje,true)