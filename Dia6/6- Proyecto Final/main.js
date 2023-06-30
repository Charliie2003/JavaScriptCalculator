misNotas = [5 , 9 , 3, 7, 6, 8, 4];

function mostrarLista(){
    let lista = document.getElementById("listaNotas");
    for(let nota of misNotas){
        let item = document.createElement("li");
        item.innerText = nota;
        lista.appendChild(item);
    }
}
function mostrarNotaPromedio(){
    let suma;
   
    for(let i=0; i<7; i++){
       suma += misNotas[i];
        
    }
    let promedio= (suma/7);
    document.getElementById("notaPromedio") = promedio;
    
}