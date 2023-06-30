function multiplicar(){
    let elementoTextoTabla = document.getElementById("textoTabla");
    let textoNumeroTabla = parseInt(elementoTextoTabla.value);

    let elementoListaTabla = document.getElementById("listaTabla");

    for(let x=1; x<=10; x++){
        let numeroResultado = textoNumeroTabla * x;
        let textoResultado = textoNumeroTabla + "*" + x + "=" + numeroResultado;
        let itemLista = document.createElement("li");
        itemLista.innerText = textoResultado;
        elementoListaTabla.appendChild(itemLista);
    }
}