const apiKey = "371db5a5593ac42270ca5901112ec179";
const form = document.getElementById("form");
let ciudad = document.getElementById("ciudad").value;
const descripcion = document.getElementById("descripcion");
const alturaPantalla = window.innerHeight;
document.body.style.height = alturaPantalla + "px";

function llamarAPI(city,countryCode,apiKey){
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${countryCode}&appid=${apiKey}&units=metric&lang=es`)
    .then((response) => response.json())
    .then((json) => {
        let city = json.name;
        let info = json.weather[0].description;
        let temp = json.main.temp

        console.log(city);
        console.log(info);
        console.log(temp);

        ciudad = `
            ${city}
        `

    })
}


form.addEventListener("submit", (event) => {
    event.preventDefault();
    const city = document.getElementById("city").value;
    const countryCode = document.getElementById("country").value;
    llamarAPI(city,countryCode,apiKey)
})

