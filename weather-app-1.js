
console.log("Hello");

const apiKey = "65211a8acdd183a34d3df5ab5b2f942a";
const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

const weatherIcons = document.querySelector(".weatherIcons");

const backgroundApp = document.getElementById("BackgroundApp");



async function checkWeather(city) {

    const response = await fetch(apiURL + city + `&appid=${apiKey}`);
   
   if (response.status == 404 || !city ) {

    document.querySelector(".cityName").innerHTML = "Spelling error";
    document.querySelector(".errorMessage").style.display = "block";
    document.querySelector(".cityTemp").innerHTML = "";
    document.querySelector(".errorMessage").innerHTML = "Try again with correct city name";
    document.querySelector(".errorMessage").style.color = "#ff8d8d";

   } else
   
    var data = await response.json();
    document.querySelector(".cityTemp").style.display = "block";
   


    document.querySelector(".cityName").innerHTML = data.name;
    document.querySelector(".cityTemp").innerHTML = Math.round(data.main.temp) + " °C";
    document.querySelector(".cityFeelsLike").innerHTML = Math.round(data.main.feels_like) + " °C";
    document.querySelector(".cityType").innerHTML = data.weather[0].main;
    document.querySelector(".cityMax").innerHTML = Math.round(data.main.temp_max) + " °C";

    document.querySelector(".main-weather-app h3").style.display = "none";


    if(data.weather[0].main == "Clouds" ) {
         weatherIcons.src = "./weather-icons/Clouds.png";
         backgroundApp.className = "";
        backgroundApp.className = "gradientBackgroundClouds";
     } 

    else if(data.weather[0].main == "Drizzle" ) {
        weatherIcons.src = "./weather-icons/Drizzle.png";
        
        backgroundApp.className = "";
        backgroundApp.className = "gradientBackgroundDrizzle";
    } 

    else if(data.weather[0].main == "Rain" ) {
        weatherIcons.src = "./weather-icons/Rain.png";

        backgroundApp.className = "";
        backgroundApp.className = "gradientBackgroundRain";
    } 

    else if(data.weather[0].main == "Snow" ) {
        weatherIcons.src = "./weather-icons/Snow.png";
        weatherIcons.style.height = "85px";
       
        backgroundApp.className = "";
        backgroundApp.className = "gradientBackgroundSnow";
    } 

    else if(data.weather[0].main == "Atmosphere" ) {
        weatherIcons.src = "./weather-icons/Atmosphere.png";

        backgroundApp.className = "";
        backgroundApp.className = "gradientBackgroundAtmosphere";
    } 

    else if(data.weather[0].main == "Clear" ) {
        weatherIcons.src = "./weather-icons/Clear.png";
        weatherIcons.style.height = "95px";

        backgroundApp.className = "";
        backgroundApp.className = "gradientBackgroundClear";
    } 

    else if (data.weather[0].main == "Thunderstorm" ) {
        weatherIcons.src = "./weather-icons/Thunderstorm.png";

        backgroundApp.className = "";
        backgroundApp.className = "gradientBackgroundThunderstorm";
    } 

}




function onClickorEnter(event) {

    if (event.type === "click" || event.key === "Enter") {
    checkWeather(searchBox.value);

}};


searchBtn.addEventListener("click", onClickorEnter);
searchBox.addEventListener("keydown", onClickorEnter);

  

// Lsit of cities

const cityData = {
    "cities": [
        "New York City",
        "Los Angeles",
        "London",
        "Tokyo",
        "Paris",
        "Sydney",
        "Berlin",
        "São Paulo",
        "Mumbai",
        "Moscow",
        "Shanghai",
        "Toronto",
        "Mexico City",
        "Cairo",
        "Madrid",
        "Dubai",
        "Rome",
        "Beijing",
        "Istanbul",
        "Buenos Aires",
        "Rio de Janeiro",
        "Seoul",
        "Los Angeles",
        "San Francisco",
        "Lagos",
        "Kuala Lumpur",
        "Hong Kong",
        "Jakarta",
        "Cape Town",
        "Lagos",
        "Oslo",
        "Chicago",
        "São Paulo",
        "Dubai",
        "Berlin",
        "Bangkok",
        "Paris",
        "Singapore",
        "Lagos",
        "Miami",
        "Cape Town",
        "Caracas",
        "Lima",
        "Sydney",
        "Tokyo",
        "Seattle",
        "Madrid",
        "Vienna",
        "Dallas",
        "Berlin",
        "San Diego",
        "Los Angeles",
        "Detroit",
        "Dallas",
        "Copenhagen",
        "Athens",
        "Stockholm",
        "Tehran",
        "Zurich",
        "Helsinki",
        "Barcelona",
        "Mexico City",
        "Warsaw",
        "Los Angeles",
        "Riyadh",
        "Milan",
        "Bucharest",
        "Dubai",
        "Lagos",
        "Bengaluru",
        "Lagos",
        "Lagos",
        "Bangladesh",
        "Lagos",
        "Auckland",
        "Frankfurt",
        "Lisbon",
        "Buenos Aires",
        "Montreal",
        "Rio de Janeiro",
        "Manila",
        "Durban",
        "Osaka",
        "St. Petersburg",
        "Jakarta",
        "Cape Town",
        "Lagos",
        "Calcutta",
        "Milan",
        "Bucharest",
        "Vancouver",
        "Vienna"
    ]
};



window.onload = randomCityGenerator;

// Generate City

document.getElementById("cityButtonShuffle").onclick = randomCityGenerator;

function randomCityGenerator() {

    const randomCityNumber = Math.floor(Math.random() * 92);
  
    const cityName = cityData.cities[randomCityNumber];
  
    document.getElementById("cityButton").textContent = cityName

    document.getElementById("cityButton").style.color = "rgb(110, 110, 110)";

    }

// Display city

document.getElementById("cityButton").onclick = displayRandomCity;
  


function displayRandomCity() {

    document.getElementById("cityButton").style.color = "black";
    
    const currentRandomCity = document.getElementById("cityButton").innerHTML;

    console.log(currentRandomCity);
    
    document.getElementById("weatherSearch").value = "";

    checkWeather(currentRandomCity) 

}