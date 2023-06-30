function extraerNumeroDesdeElemento(elemento){
    let miElemento  = document.getElementById(elemento);
    let miTexto = miElemento.value;
    let miNumero = parseInt(miTexto);
    return miNumero;
}
function calcular(){
    let ventas=[]
    let ventas1, ventas2, ventas3, ventas4, ventas5, ventas6;
    let elementoResultado = document.getElementById("parrafoSalida");
    ventas[0] = extraerNumeroDesdeElemento("ventasTienda1");
    ventas[1] = extraerNumeroDesdeElemento("ventasTienda2");
    ventas[2] = extraerNumeroDesdeElemento("ventasTienda3");
    ventas[3] = extraerNumeroDesdeElemento("ventasTienda4");
    ventas[4] = extraerNumeroDesdeElemento("ventasTienda5");
    ventas[5] = extraerNumeroDesdeElemento("ventasTienda6");

    let totalVentas = sumarTotal(ventas);
    let ventaMayor = calcularMayor(ventas);
    let ventaMenor = calcularMenor(ventas);
    let ventasPromedio = promedio(ventas);
    elementoResultado.textContent = "Total Ventas:  " + totalVentas + " / Venta Mayor: "
    + ventaMayor + " / Venta Menor: " + ventaMenor + " /Promedio: " + ventasPromedio ;
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
