let elementoCampoUno = document.getElementById("campoUno");
let elementoCampoDos = document.getElementById("campoDos");
let elementoCampoTres = document.getElementById("campoTres");
let elementoCampoCuatro = document.getElementById("campoCuatro");
let elementoCampoCinco = document.getElementById("campoCinco");
let tiempoActual = new Date();
let cronometroTimeOut;
let intervalID;
let fecha = tiempoActual.toLocaleDateString('es-ES');
let elementoSonidoAlarma = document.getElementById("sonidoAlarma");
function mostrarResultado() {
    if (
        elementoCampoUno.value === "" ||
        elementoCampoDos.value === "" ||
        elementoCampoTres.value === "" ||
        elementoCampoCuatro.value === "" ||
        elementoCampoCinco.value === ""
      ) {
        elementoSonidoAlarma.play();
       alert("GAME OVER!, te has dejado campos vacíos, vuelve a intentarlo")
       clearTimeout(cronometroTimeOut); 
       clearInterval(intervalID)
      } else{
    clearTimeout(cronometroTimeOut); 
    clearInterval(intervalID)
    alert("FELIZIDADES!, has completado el juego a tiempo \n"+fecha + "\n¿Por que no había chupado kuki antes? \n\t" + elementoCampoUno.value
        + " \n¿Por que los gatos tienen espinas en su pene? \n\t " +
        elementoCampoDos.value + " \n¿Por qué el cielo es azul? \n\t " + elementoCampoTres.value +
        " \n¿Donde sería la octava maravilla del mundo? \n\t " + elementoCampoCuatro.value +
        " \n ¿Por qué los barcos se hunden? \n\t " + elementoCampoCinco.value);
      }
}
function comenzarReloj() {
    cronometroTimeOut = setTimeout(gameOver, 1000 * 30);
    intervalID= setInterval(ticTac, 1000);
}
function ticTac() {
    let elementoCronometro = document.getElementById("cronometro");
    let tiempoRestante = parseInt(elementoCronometro.textContent);

    if (tiempoRestante > 0) {
        tiempoRestante -= 1;
        elementoCronometro.textContent = tiempoRestante;
    } 
}
function gameOver() {
    elementoSonidoAlarma.play();
    alert("GAME OVER!, se acabó el juego vuelve a intentarlo en el tiempo que se le indica")
    
}   
function volverIntentar(){
    location.reload();
}  
       