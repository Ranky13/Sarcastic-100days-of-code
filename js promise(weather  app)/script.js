const apikey = "80f4fc3ba4c9dc5037c05bdcd9cdac72";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search-bar input");
const searchBtn = document.querySelector(".search-bar button");
const weatherIcon = document.querySelector(".weather-icon");


async function checkWeather(city){
    const response = await fetch(apiurl + city + `&appid=${apikey}`);
    var data = await response.json();


    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML =  Math.round(data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + km/h;

    if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "img/cloud.png";
    }
    else if(data.weather[0].main == "Clear"){
        weatherIcon.src = "img/clear.png";
    }
    else if(data.weather[0].main == "Rain"){
        weatherIcon.src = "img/rain(1).png";
    }
    else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src = "img/drizzle.png";
    }
    else if(data.weather[0].main == "Mist"){
        weatherIcon.src = "img/mist.png";
    }

    document.querySelector(".weather").style.display = "block";

}

searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
})


checkWeather();
