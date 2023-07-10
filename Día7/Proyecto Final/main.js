function crearTiendas(contenedorID, min, cantidadTiendas){
    //encontrar contenedor por su id
    let elementoContenedor = document.getElementById(contenedorID);

    //loop para crear tiendas 
    for(let conteoTiendas=1; conteoTiendas<=cantidadTiendas; conteoTiendas++ ){
        //crear texto de label
        let texoEtiqueta = "Tienda " + conteoTiendas;
        //crear tiendas con crearParrafoTienda
        let parrafoTienda = crearParrafoTienda(texoEtiqueta, min);
        
        //agregar el parrafo al ontenedor
        elementoContenedor.appendChild(parrafoTienda);
    }
}
function crearParrafoTienda(textoLabel, valorMin){
    //Crear etiquetas <p>
    let elementoParrafo = document.createElement("p");
    //Crear etiqueta label
    let elementoEtiqueta = document.createElement("label")
    elementoEtiqueta.innerText = textoLabel + " : ";
    //crear etiqueta input
    let elementoInput = document.createElement("input");
    //conectar con input
    elementoEtiqueta.setAttribute("for", textoLabel);
    //establecer atributos de input
    elementoInput.setAttribute("type", "number");
    elementoInput.setAttribute("id", textoLabel);
    elementoInput.setAttribute("min", valorMin)
    elementoInput.setAttribute("value", 0);

    //agregar label e input a <p>
    elementoParrafo.appendChild(elementoEtiqueta);
    elementoParrafo.appendChild(elementoInput);

    //devolver el parrafo
    return elementoParrafo;
}
function extraerNumeroDesdeElemento(elemento){
    let miTexto = elemento.value;
    let miNumero = parseInt(miTexto);
    return miNumero;
}
function calcular(){
    let ventas=[];
    let posicionVentas = 0;
    let elementosVentas = document.getElementById("itemsTiendas");

    for(let item of elementosVentas.children){
        let valorVenta = extraerNumeroDesdeElemento(item.children[1]);
        ventas[posicionVentas] = valorVenta
        posicionVentas = posicionVentas + 1;
    }
 
    let elementoResultado = document.getElementById("parrafoSalida");

    let totalVentas = sumarTotal(ventas);
    let ventaMayor = calcularMayor(ventas);
    let ventaMenor = calcularMenor(ventas);
    let ventasPromedio = promedio(ventas);
    elementoResultado.textContent = "Total Ventas:  " + totalVentas +  "/ Promedio: " + ventasPromedio;
    for(let item of elementosVentas.children){
        let valorVenta = extraerNumeroDesdeElemento(item.children[1])
        item.children[1].className = "inputNeutro";
        if(valorVenta == ventaMenor){
            item.children[1].className = "inputMenor";
        }
        if(valorVenta == ventaMayor){
            item.children[1].className = "inputMayor";
        }
    }
}
function sumarTotal(array){
    let total = 0;
    
    for(let venta of array){
        total = total + venta;
    }

    return total;
}
function calcularMayor(array){
    let maximo = array[0];
    for(let venta of array){
        if(venta > maximo){
            maximo = venta;
        }
    }
    return maximo;
}
function calcularMenor(array){
    let minimo = array[0];
    for(let venta of array){
        if(venta < minimo){
            minimo = venta;
        }
    }
    return minimo;
}
function promedio(array) {
    let suma = 0;
    for(let venta of array){
        suma = suma + venta;
    }
    let promedio = suma / array.length;
    return promedio;
    
}

