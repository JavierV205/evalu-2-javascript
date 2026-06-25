// Implementar formulario

const formulario = document.getElementById("formulario");
const contenedorErrores = document.getElementById("errores");


let guardar = document.addEventListener("click", () => {

    //Limpiar contenedor
    contenedorErrores.innerHTML = "";

    //Obtener valor campo nombre
    const nombre = document.getElementById("nombre").value.trim();

    const edad = document.getElementById("edad").value.trim();

    const fecha = document.getElementById("fecha").value;

    const especialidad =document.getElementById("especialidad").value;

    const hora =document.getElementById("hora").value;

    const motivo =document.getElementById("motivo").value;


    //arreglo vacio va almacenar los errores del usuario

    let errores = [];

    //Validaciones
    //Validacion nombre vacio
    if (nombre === "") {
        errores.push("Debes ingresar el nombre");
    }

    if (edad === "" || edad >= 90 || edad <18) {
        errores.push("Debes ingresar una edad VALIDA");
        
    }
    if (fecha === "") {
        errores.push("Debes ingresar una fecha");
    }

    if(especialidad ==="") {
        errores.push("Debes ingresar una especialidad");
    }

    if (hora ===""){
        errores.push("Debes ingresar una hora");
    }
    if (motivo=== ""){
        errores.push("Debes de ingresar un motivo")
    }
    if(errores.length > 0){

        contenedorErrores.innerHTML = `
            <ul>
               ${errores.map(error => `<li>${error} </li>`).join("")} 
            </ul>

        `;

        return;
    }

    //Crear un objeto

    const paciente = {
        nombre, 
        edad, 
        fecha, 
        especialidad, 
        hora, 
        motivo
    };

    //Guardar en Localstorage
    localStorage.setItem(
        "paciente",
        JSON.stringify(paciente)

       );

    window.location.href ="exito.html"

});