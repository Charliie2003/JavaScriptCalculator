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
