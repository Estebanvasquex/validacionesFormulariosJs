
const inputNacimiento = document.querySelector("#birth");

inputNacimiento.addEventListener("blur", (evento)=>{
    validarNacimiento(evento.target);
    

    //console.log(evento.target)


})

function validarNacimiento(input){
    const fechaCliente = new Date (input.value);
    let mensaje = "";
    if (!mayorDeEdad(fechaCliente)){
        mensaje = "Debes tener al menos 18 años de edad";
        console.log(mensaje);
    };

    /*Define el mensaje de validación personalizado para el elemento seleccionado con el mensaje especifico*/ 
    input.setCustomValidity(mensaje);

    console.log("fecha cliente: " + fechaCliente);

}

function mayorDeEdad(fecha){
    const fechaActual = new Date();
    const diferenciaFechas = new Date(
        fecha.getUTCFullYear()+18,
        fecha.getUTCMonth(),
        fecha.getUTCDate()
       
    );

    /*Al realizar la comparación entre la fecha de nacimiento sumando 18 años esta debe ser menor o igual a la fecha actual en caso de que de una fecha mayor a fecha actual quiere decir que en ese año cumple los 18*/
    return diferenciaFechas <= fechaActual;

    

}



