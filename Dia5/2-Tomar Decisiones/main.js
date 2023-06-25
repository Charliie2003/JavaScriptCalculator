function evaluarCompra() {
    let elementoRespuesta = document.getElementById("decision");

    let elementoPrecio = document.getElementById("textoPrecio").value;
    let precio = parseFloat(elementoPrecio);
    if (precio < 5) {
        elementoRespuesta.textContent = "Comprar dos cartones de leche";
    } else {
        if (precio < 8) {
            elementoRespuesta.textContent = "Comprar un cartón de leche";
        } else {
            elementoRespuesta.textContent = "No comprar leche en este establecimiento";
        }
    }

}