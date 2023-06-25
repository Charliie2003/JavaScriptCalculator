let elementoResultado = document.getElementById("resultado");
let elementoOperandoUno = document.getElementById("operandoUno");
let elementoOperandoDos = document.getElementById("operandoDos");
let elementoResultadoRedondeado= document.getElementById("resultadoRedondeado");

function suma() {
    let valorOperandoUno = parseFloat(elementoOperandoUno.value);
    let valorOperandoDos = parseFloat(elementoOperandoDos.value);
    let resultadoSuma = valorOperandoUno + valorOperandoDos;
    elementoResultado.value = resultadoSuma;
}
function resta() {
    let valorOperandoUno = parseFloat(elementoOperandoUno.value);
    let valorOperandoDos = parseFloat(elementoOperandoDos.value);
    let resultadoResta = valorOperandoUno - valorOperandoDos;
    elementoResultado.value = resultadoResta;
}
function multiplicar() {
    let valorOperandoUno = parseFloat(elementoOperandoUno.value);
    let valorOperandoDos = parseFloat(elementoOperandoDos.value);
    let resultadoMultiplicar = valorOperandoUno * valorOperandoDos;
    elementoResultado.value = resultadoMultiplicar;
}
function division() {
    let valorOperandoUno = parseFloat(elementoOperandoUno.value);
    let valorOperandoDos = parseFloat(elementoOperandoDos.value);
    let resultadoDividir = valorOperandoUno / valorOperandoDos;
    elementoResultado.value = resultadoDividir;
}
function raiz(){
    let operandoUno = elementoOperandoUno.value;
    if (operandoUno === ""){
       alert("Complete Operando1 para poder hacer la raíz");
    } else{
        elementoResultado.value= Math.sqrt(elementoOperandoUno.value); 
    }
}
function potencia(){
    elementoResultado.value=Math.pow(elementoOperandoUno.value, elementoOperandoDos.value)
}
function absoluto(){
    elementoResultado.value =Math.abs(elementoOperandoUno.value);
}
function randoom(){
    let minimo = parseFloat(elementoOperandoUno.value);
    let maximo = parseFloat(elementoOperandoDos.value);
    maximo = maximo + 1;
    let resultado = Math.floor(Math.random() * (maximo - minimo) + minimo);
    elementoResultado.value = resultado;
    
}
function vaciar(){
    elementoResultado.value = "";
    elementoOperandoUno.value="";
    elementoOperandoDos.value="";
    elementoResultadoRedondeado.value=" ";
}
function redondear(){
    elementoResultadoRedondeado.value = Math.round(elementoResultado.value);
}
function redondearFloor(){
    elementoResultadoRedondeado.value = Math.floor(elementoResultado.value);
}
function redondearCeil(){
    elementoResultadoRedondeado.value = Math.ceil(elementoResultado.value);
}

