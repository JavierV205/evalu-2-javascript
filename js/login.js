// Implementar login
//usuario valido:javier.venegas,	contraseña valida: JS2026JV18

const almacenErrores = document.getElementById("errores");
const formLogin = document.getElementById("formLogin");


// git=https://github.com/JavierV205/evalu-2-javascript.git



//validar usuario

let boton = document.getElementById("btnValidar");
boton.addEventListener("click", function(){

    let usuario=document.getElementById("usuario").value;
    let contraseña=document.getElementById("password").value;

    const pacienteValido = "javier.venegas";
    const contraseñaValida = "JS2026JV18";
    const almacenErrores = document.getElementById("errores");

    if(usuario ===""|| contraseña === ""){
        almacenErrores.textContent = "ingreso de paciente no encontrado";
    }else if (usuario===pacienteValido && contraseña===contraseñaValida){
        window.location.href = "formulario.html"
    }
})


