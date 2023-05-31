const apiKey = "371db5a5593ac42270ca5901112ec179";
const form = document.getElementById("form");
const alturaPantalla = window.innerHeight;
const imagenClima = document.getElementById("imagenClima");
const seccionInfo = document.querySelector(".seccionInfo");
const main = document.querySelector("main")
let ciudad = document.getElementById("ciudad");
let descripcion = document.getElementById("descripcion");
let temperatura = document.getElementById("temperatura");
let info = "";
let temp = "";
document.body.style.height = alturaPantalla + "px";

if(ciudad.value == ""){
    seccionInfo.style.display = "none";
    main.style.height = "fit-content";
}

function llamarAPI(city,apiKey){
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=es`)
    .then((response) => response.json())
    .then((json) => {
        info = json.weather[0].description;
        temp = json.main.temp;
    })
}

function cambiarPresentacion() {
    ciudad.value = city.value.toUpperCase();
    cambiarInfoClima();
    temperatura.value = parseInt(temp.valueOf()) + "°C" ;
}

function cambiarInfoClima() {
    main.style.animation = "fadeInLeft 1.8s";
    main.style.height = "800px";
    seccionInfo.style.display = "flex";
    if(info.valueOf() === "nubes"){
        imagenClima.src = "images/nube.png";
        descripcion.value = "Nuboso";
    }
    else if(info.valueOf() === "muy nuboso"){
        imagenClima.src = "images/nubes.png";
        descripcion.value = "Muy Nuboso";
    }
    else if(info.valueOf() === "lluvia moderada"){
        imagenClima.src = "images/lluvia.png";
        descripcion.value = "Lluvia Moderada";
    }
}

form.addEventListener("submit", (event) => {
    main.style.animation = "fadeOutRight 1.8s"
    event.preventDefault()
    const city = document.getElementById("city").value;
    llamarAPI(city,apiKey);
    setTimeout(cambiarPresentacion, 1500);
})

