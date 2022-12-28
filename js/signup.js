const nombre= document.getElementById("txtNombre");
const msgValNombre = document.getElementById("msgValNombre");

const email= document.getElementById("txtEmail");
const msgValEmail = document.getElementById("msgValEmail");

const usuario= document.getElementById("txtUser");
const msgValUsuario = document.getElementById("msgValUser");

const contraseña= document.getElementById("txtPwd");
const msgValPwd = document.getElementById("msgValPwd");

const contraseña2= document.getElementById("txtPwd2");
const msgValPwd2 = document.getElementById("msgValPwd2");

const btnEnviar = document.getElementById("btnEnviar");

function Validacion(){

    let vnombre = nombre.value;
    msgValNombre.innerText ="";
    let RegExpNom = /^[A-Za-z]+([\s]?[A-Za-z])*$/;

    let vemail = email.value;
    msgValEmail.innerText ="";
    let RegExpEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    let vusuario = usuario.value;
    msgValUsuario.innerText ="";
    let RegExpUser = /^[a-zA-Z0-9\_\-]{4,16}$/

    let vpwd = contraseña.value;
    msgValPwd.innerText ="";
    let RegExpPwd = /^[A-Z]+([a-z])*$/;

    let vpwd2 = contraseña2.value;
    msgValPwd2.innerText ="";
    let RegExpPwd2 = /^[A-Z]+([a-z])*$/;
    

    if(vnombre =="" || !RegExpNom.test(vnombre)){
        msgValNombre.innerText = "Nombre inválido";  
    }

    if(!RegExpEmail.test(vemail)){
        msgValEmail.innerText = "Email invalido";
    }

    if(!RegExpUser.test(vusuario)){
        msgValUsuario.innerText = "El usuario tiene que ser de 4 a 16 digitos y solo puede contener numeros, letras y guion bajo";
        
    }

    if(!RegExpPwd.test(vpwd)){
        msgValPwd.innerText = "Debe contener una mayuscula";
    }

    if(vpwd === vpwd2){
        msgValPwd2.innerText = "Son iguales"
    }else{
        msgValPwd2.innerText = "Ambas contraseñas deben ser iguales"
    }
    window.location= "lista.html";
    alert("Registro exitoso");
}


btnEnviar.onclick = () => Validacion();
