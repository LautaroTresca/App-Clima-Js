const apiKey = "371db5a5593ac42270ca5901112ec179";
const form = document.getElementById("form");
const alturaPantalla = window.innerHeight;
const imagenClima = document.getElementById("imagenClima");
const seccionInfo = document.querySelector(".seccionInfo");
const main = document.querySelector("main")
let ciudad = document.getElementById("ciudad");
let descripcion = document.getElementById("descripcion");
let temperatura = document.getElementById("temperatura");
let humedad = document.getElementById("humedad");
let viento = document.getElementById("viento");
let sensacion_termica= document.getElementById("sensTermica");
let info = "";
let temp = "";
let hum = "";
let vient = "";
let sensTermica = "";
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
        sensTermica = json.main.feels_like;
        hum = json.main.humidity;
        vient = json.wind.speed;
    })
}

function cambiarPresentacion() {
    ciudad.value = city.value.toUpperCase();
    cambiarInfoClima();
    temperatura.value = parseInt(temp.valueOf()) + "°C" ;
    humedad.value = parseInt(hum.valueOf()) + "%";
    viento.value = parseInt(vient.valueOf()) + "km/h";
    sensacion_termica.value = parseInt(sensTermica.valueOf()) + "°C";
}
function cambiarInfoClima() {
    main.style.animation = "fadeIn 1s";
    seccionInfo.style.display = "flex";
    if(info.valueOf() === "nubes"){
        imagenClima.src = "images/nube.png";
        descripcion.value = "Nuboso";
    }
    if(info.valueOf() === "cielo claro"){
        imagenClima.src = "images/sol.png";
        descripcion.value = "Soleado";
    }
    if(info.valueOf() === "nubes dispersas"){
        imagenClima.src = "images/nubes_dispersas.png";
        descripcion.value = "Nubes Dispersas";
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
    main.style.animation = "fadeOut 1.7s";
    event.preventDefault();
    const city = document.getElementById("city").value;
    llamarAPI(city,apiKey);
    setTimeout(cambiarPresentacion, 1500);
})

