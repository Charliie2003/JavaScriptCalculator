let elementoRespuesta1 = document.getElementById("respuesta1");
let elementoRespuesta2 = document.getElementById("respuesta2");
let elementoRespuesta3 = document.getElementById("respuesta3");
function calcular() {
    let elementoEdad = document.getElementById("textoEdad").value;
    let edad = parseInt(elementoEdad);

    if (edad >= 18) {
        elementoRespuesta1.textContent = "Sí"
    } else {
        elementoRespuesta1.textContent = "No"
    }

    if (edad >= 18 && edad <= 30) {
        elementoRespuesta2.textContent = "Sí"
    } else {
        elementoRespuesta2.textContent = "No"
    }

    if (edad == 20 || edad == 25) {
        elementoRespuesta3.textContent = "Sí"
    } else {
        elementoRespuesta3.textContent = "No"
    }
}