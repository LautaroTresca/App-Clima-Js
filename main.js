const apiKey = "371db5a5593ac42270ca5901112ec179";
const form = document.getElementById("form")
const main = document.querySelector("main")

function llamarAPI(city,countryCode,apiKey){
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${countryCode}&appid=${apiKey}&units=metric&lang=es`)
    .then((response) => response.json())
    .then((json) => {
        console.log(json)
        let ciudad = json.name;
        let info = json.weather[0];
        let temperatura = json.main.temp

        main.innerHTML += `
            <p>${ciudad}</p>
            <p>${info.description}</p>
            <p>Temperatura: ${temperatura}C°</p>
        `
        console.log(ciudad)
        console.log(info)
        console.log(temperatura)
    })
}


form.addEventListener("submit", (event) =>{
    event.preventDefault();
    const city = document.getElementById("city").value;
    const countryCode = document.getElementById("country").value;
    llamarAPI(city,countryCode,apiKey)
})

