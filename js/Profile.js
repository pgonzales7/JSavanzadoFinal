document.getElementById("txtId").disabled = true;
document.getElementById("txtNombre").disabled = true;
document.getElementById("txtCorreo").disabled = true;
document.getElementById("txtUsuario").disabled = true;

function habilitarForm(){ 
    document.getElementById("txtNombre").disabled = false;
    document.getElementById("txtCorreo").disabled = false;
    document.getElementById("txtUsuario").disabled = false;
}


const btnEditar = document.getElementById("btnEditar");
const btnGuardar = document.getElementById("btnGuardar");
const btnEliminar = document.getElementById("btnEliminar")

btnEditar.addEventListener("click", habilitarForm)

btnGuardar.addEventListener("click",() => {
    confirm("¿Desea guardar los cambios?")
})

btnEliminar.addEventListener("click", () => {
    confirm("¿Está seguro que quiere eliminar su cuenta?")
    window.location="login.html";
})