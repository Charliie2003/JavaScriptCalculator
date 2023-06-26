let elementoEdad = document.getElementById("campoEdad");
let elementoRespuesta= document.getElementById("textoRespuesta");

function recomendar(tipoPelicula) {
    let elementoImagen =document.getElementById("imagen");
    let edad = parseInt(elementoEdad.value);
    if(edad === "" || edad === 0){
        alert("Indique la edad para poder recomendarle una película")
    } else{
    switch (tipoPelicula) {
        case "drama":
            if (edad < 13) {
                elementoImagen.src = "img/CasablancaPoster.jpg";
                elementoRespuesta.textContent = "Casa Blanca";
            } else if (edad < 16) {
                elementoImagen.src = "img/TheShawshankRedemption.jpg";
                elementoRespuesta.textContent = "The Shawshank Redemption";
            } else {
                elementoImagen.src = "img/TaxiDriver.jpg";
                elementoRespuesta.textContent = "Taxi Driver";
            }
            break;
        case "comedia":
            if (edad < 13) {
                elementoImagen.src = "img/BackToTheFuture.jpg";
                elementoRespuesta.textContent = "Back To The Future";
            } else if (edad < 16) {
                elementoImagen.src = "img/TheTrumanShow.jpg";
                elementoRespuesta.textContent = "The Truman Show";
            } else {
                elementoImagen.src = "img/TheWolfOfWallStreet.jpg";
                elementoRespuesta.textContent = "The Wolf Of Wall Street";
            }
            break;
        case "musical":
            if (edad < 13) {
                elementoImagen.src = "img/LaLaLand.jpg";
                elementoRespuesta.textContent = "La La Land";
            } else if (edad < 16) {
                elementoImagen.src = "img/LesMiserables.jpg";
                elementoRespuesta.textContent = "Les Miserables";
            } else {
                elementoImagen.src = "img/TheRockyHorrorPictureShow.jpg";
                elementoRespuesta.textContent = "The Rocky Horror Picture Show";
            }
            break;
        case "crimen":
            if (edad < 13) {
                elementoImagen.src = "img/crimenATP.png";
                elementoRespuesta.textContent = "No hay pelicula disponible crimen ATP";
                
            } else if (edad < 16) {
                elementoImagen.src = "img/ElSecretoDeSusOjos.jpg";
                elementoRespuesta.textContent = "El Secreto De Sus Ojos";
            } else {
                elementoImagen.src = "img/TheGodfather.jpg";
                elementoRespuesta.textContent = "The God Father";
            }
            break;
        }
    }
}