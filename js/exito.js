
const paciente = JSON.parse(localStorage.getItem("paciente"));



document.getElementById("dato1").textContent = paciente.nombre;

document.getElementById("dato2").textContent = paciente.edad;

document.getElementById("dato3").textContent = paciente.fecha;

document.getElementById("dato4").textContent = paciente.especialidad;

document.getElementById("dato5").textContent = paciente.hora;

document.getElementById("dato5").textContent = paciente.motivo;


document.getElementById("btnCerrar").addEventListener("click", () => {
    localStorage.removeItem("paciente");
    window.location.href = "login.html";
});

