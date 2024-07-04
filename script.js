const apiKey = "4c3fb3dc336e3f3a2ccfc656bf857318";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcn = document.querySelector(".weather-icon");


async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".error").innerHTML = `${city} is an invalid city name`;
        document.querySelector(".weather").style.display = "none";
    }

    var data = await response.json();

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

    if(data.weather[0].main == "Clouds")
        weatherIcn.src = "Images/clouds.png";

    else if(data.weather[0].main == "Drizzle")
        weatherIcn.src = "Images/drizzle.png";

    else if(data.weather[0].main == "Humidity")
        weatherIcn.src = "Images/humidity.png";
    
    else if(data.weather[0].main == "Mist")
        weatherIcn.src = "Images/mist.png";

    else if(data.weather[0].main == "Rain")
        weatherIcn.src = "Images/rain.png";

    else if(data.weather[0].main == "Snow")
        weatherIcn.src = "Images/snow.png";

    else if(data.weather[0].main == "Wind")
        weatherIcn.src = "Images/wind.png";

    else if(data.weather[0].main == "Clear")
        weatherIcn.src = "Images/clear.png";


    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";

    console.log(data);
}

searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
});

