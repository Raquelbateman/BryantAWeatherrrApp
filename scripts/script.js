let currentLocation = document.getElementById("currentLocation");

// 5 day forecast == fiveDay
let fiveDay = document.getElementById("fiveDay");

//current day == dayofWeek
let dayOfWeek = document.getElementById("dayOfWeek");

//curent temp == dayofWeekTemp
let dayOfWeekTemp = document.getElementById("dayOfWeekTemp");

//weather icon == weatherIcon
let weatherIcon = document.getElementById("weatherIcon");

let defaultCity = "stockton";

let currentCity = defaultCity;

async function getweatherData(defaultCity){
    let apiResponse = await fetch("https://api.openweathermap.org/data/2.5/weather?q=" + defaultCity + "&units=imperial&appid=" + "").then(Response => Response.json());

        console.log(apiResponse);
    
}

getweatherData(defaultCity);


// let currentLocation = document.getElementById("currentLocation");
// let dayOfWeek = document.getElementById("dayOfWeek");
// let dayOfWeekTemp = document.getElementById("dayOfWeekTemp");
// let weatherIcon = document.getElementById("weatherIcon");

// let defaultCity = "stockton";

// async function getWeatherData(defaultCity) {
//     try {
//         let apiResponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${defaultCity}&units=imperial&appid=0b21588c5bd6e32721b905cd8aacabd7`);
//         let weatherData = await apiResponse.json();

//         if (currentLocation && dayOfWeek && dayOfWeekTemp && weatherIcon) {
//             currentLocation.textContent = `Current Weather in ${defaultCity}`;
//             dayOfWeek.textContent = "Current Temperature:";
//             dayOfWeekTemp.textContent = `${weatherData.main.temp} °F`;
//             weatherIcon.src = `http://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`;
//             weatherIcon.alt = weatherData.weather[0].description;
//         } else {
//             console.error("One or more elements not found.");
//         }
//     } catch (error) {
//         console.error("Error fetching weather data:", error);
//     }
// }

// getWeatherData(defaultCity);

    