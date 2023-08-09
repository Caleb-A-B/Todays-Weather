const apiKey = "a83bd34fc6043bb26a94bdc21c821eb8";
const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=imperial&q=";


const searchBox =  document.querySelector(".search input")
const searchBtn =  document.querySelector(".search button")
const weatherIcon = document.querySelector(".weather-icon")


async function checkWeather(city){
    const response = await fetch(apiURL + city + `&appid=${apiKey}`);
    var data = await response.json();
    
    console.log(data)

    document.querySelector(".city").innerHTML = data.name
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp)  + "°f"
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%"
    document.querySelector(".wind").innerHTML = data.wind.speed + " m/h"

if(data.weather[0].main == "Clouds"){
    weatherIcon.src = "assets/images/clouds.png"
} else if (data.weather[0].main == "Clear"){
    weatherIcon.src = "assets/images/clear.png"
} else if (data.weather[0].main == "Rain"){
    weatherIcon.src = "assets/images/rain.png"
} else if (data.weather[0].main == "Drizzle"){
    weatherIcon.src = "assets/images/drizzle.png"
} else if (data.weather[0].main == "Snow"){
    weatherIcon.src = "assets/images/snow.png"
} else if (data.weather[0].main == "Mist"){
    weatherIcon.src = "assets/images/mist.png"
}



}
searchBtn.addEventListener("click", ()=>{
    
checkWeather(searchBox.value);
})