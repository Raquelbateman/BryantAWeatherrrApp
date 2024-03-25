let searchBar = document.getElementById("searchBar");

let dayAndDate = document.getElementById("dayAndDate");

let currentLocation = document.getElementById("currentLocation");

let currentTemp = document.getElementById("currentTemp");

let tempNowMax = document.getElementById("tempNowMax");

let tempNowMin = document.getElementById("tempNowMin");


let dayOneTemp = document.getElementById("dayOneTemp");
let dayOneTempNowMin = document.getElementById("dayOneTempNowMin");
let dayOneTempNowMax = document.getElementById("dayOneTempNowMax");
let dayOneIcon = document.getElementById("dayOneIcon");

let dayTwoTemp = document.getElementById("dayTwoTemp");
let ddayTwoTempNowMin = document.getElementById("dayTwoTempNowMin");
let dayTwoTempNowMax = document.getElementById("dayTwoTempNowMax");
let dayTwoIcon = document.getElementById("dayTwoIcon");


let dayThreeTemp = document.getElementById("dayThreeTemp");
let dayThreeTempNowMin = document.getElementById("dayThreeTempNowMin");
let dayThreeTempNowMax = document.getElementById("dayThreeTempNowMax");
let dayThreeIcon = document.getElementById("dayThreeIcon");

let dayFourTemp = document.getElementById("dayFourTemp");
let dayFourTempNowMin = document.getElementById("dayFourTempNowMin");
let dayFourTempNowMax = document.getElementById("dayFourTempNowMax");
let dayFourIcon = document.getElementById("dayFourIcon");

let dayFiveTemp = document.getElementById("dayFiveTemp");
let dayFiveTempNowMin = document.getElementById("dayFiveTempNowMin");
let dayFiveTempNowMax = document.getElementById("dayFiveTempNowMax");
let dayFiveIcon = document.getElementById("dayFiveIcon");

let choosenCity ="";


// connects button to getWeatherData by a keypress. whenever a city is entered, it will display it in the left hand corner
  searchBar.addEventListener("keypress", function(event){
    if(event.key === "Enter"){
        choosenCity = searchBar.value;


        getweatherData(choosenCity)}
    });
    


//


// async function to get "cLocation" from the HTML and hook it up with innerText so it displays whatever name is entered when "searchBtn" is pressed
async function getweatherData(choosenCity){
  let apiResponse = await fetch("https://api.openweathermap.org/data/2.5/forecast?q=" + choosenCity + "&units=imperial&appid=0b21588c5bd6e32721b905cd8aacabd7").then(Response => Response.json());
    
  
  currentLocation.innerText = apiResponse.name;
  currentTemp.innerText = Math.round(apiResponse.list[0].main.temp);
  tempNowMin.innerText = Math.round(apiResponse.list[0].main.temp_min);
  tempNowMax.innerText = Math.round(apiResponse.list[0].main.temp_max);


 console.log(apiResponse);

};


// FIVE DAY TEMP

// async function getweatherData(choosenCity){
//   let apiResponse = await fetch("https://api.openweathermap.org/data/2.5/forecast?q=" + choosenCity + "&units=imperial&appid=0b21588c5bd6e32721b905cd8aacabd7").then(Response => Response.json());

//// 1 DAY
// dayOneTemp.innerText = Math.round(apiResponse.list[4].main.temp);
// dayOnetempNowMin.innerText = Math.round(apiResponse.list[4].main.temp_min);
// dayOnetempNowMax.innerText = Math.round(apiResponse.list[4].main.temp_max);
// dayOneIcon = apiResponse.weather.icon;


//// 2 DAY
// dayTwoTemp.innerText = Math.round(apiResponse.list[12].main.temp);
// dayTwotempNowMin.innerText = Math.round(apiResponse.list[12].main.temp_min);
// dayTwotempNowMax.innerText = Math.round(apiResponse.list[12].main.temp_max);
// dayTwoIcon = apiResponse.weather.icon;dayTwoIcon

//// 3 DAY
// dayThreeTemp.innerText = Math.round(apiResponse.list[20].main.temp);
// dayThreetempNowMin.innerText = Math.round(apiResponse.list[20].main.temp_min);
// dayThreetempNowMax.innerText = Math.round(apiResponse.list[20].main.temp_max);
// dayThreeIcon = apiResponse.weather.icon;

//// 4 DAY
// dayFourTemp.innerText = Math.round(apiResponse.list[28].main.temp);
// dayFourtempNowMin.innerText = Math.round(apiResponse.list[28].main.temp_min);
// dayFourtempNowMax.innerText = Math.round(apiResponse.list[28].main.temp_max);
// dayFourIcon = apiResponse.weather.icon;

//// 5 DAY
// dayFiveTemp.innerText = Math.round(apiResponse.list[36].main.temp);
// dayFivetempNowMin.innerText = Math.round(apiResponse.list[36].main.temp_mint);
// dayFivetempNowMax.innerText = Math.round(apiResponse.list[36].main.temp_max);
// dayFiveIcon = apiResponse.weather.icon;


   


//  console.log(apiResponse);
// };


// one call API response



 // tempNowMin.innerText = Math.round(apiResponse.list[0].main.temp_mint);
  // tempNowMax.innerText = Math.round(apiResponse.list[0].main.temp_max);

// async function getweatherData(defaultCity){
//   let apiResponse = await fetch("https://api.openweathermap.org/data/2.5/weather?q="+defaultCity+"&appid=0b21588c5bd6e32721b905cd8aacabd7&units=imperial").then(Response => Response.json());
//   currentTemp.innerText = apiResponse.city.name;
//   console.log(apiResponse);

// };



// async function getweatherData(defaultCity){
//   let apiResponse = await fetch("https://api.openweathermap.org/data/2.5/weather?q="+defaultCity+"&appid=0b21588c5bd6e32721b905cd8aacabd7&units=imperial").then(Response => Response.json());
//   dayAndDate.innerText = apiResponse.city.name;
//   console.log(apiResponse);

// };











// Function to display the current Weather
// function displayCurrentWeather(data) {

//   document.querySelector('.current-weather-info').innerHTML = `
//   <h3>${data.name}</h3>
//   <h1>${Math.round(data.main.temp)}째F</h1>
//   <h6>${data.main.temp_max}째</h6>
//   <h6>${data.main.temp_min}째</h6>
//   <img id="current-weather-icon">
//   <h4>-${data.weather[0].description}-</h4>   
//   `
//   // Setting the icon
//   document.querySelector('#current-weather-icon').setAttribute('src', `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`);
// }










// async function getFiveDayForecast(chosenCity) {
//     try {
//         let apiResponse = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${chosenCity}&appid=0b21588c5bd6e32721b905cd8aacabd7&units=imperial`);
//         let forecastData = await apiResponse.json();
//         console.log(forecastData);
//     }
// }

























// // let dayOfWeek = document.getElementById("dayOfWeek");

// //curent temp == dayofWeekTemplet currentLocation = document.getElementById("currentLocation");

// // let weatherData = defaultCity;


// let favArr = [];


// let currentLocation = document.getElementById("currentLocation");

// let searchBtn = document.getElementById("searchBtn");

// let highTemp = document.getElementById("highTemp");

// let lowTemp = document.getElementById("lowTemp");



// // 5 day forecast == fiveDay
// let fiveDay = document.getElementById("fiveDay");

// let dayOfWeekTemp = document.getElementById("dayOfWeekTemp");

// //weather icon == weatherIcon
// let weatherIcon = document.getElementById("weatherIcon");


// // let currentLocation = defaultCity;



// async function getweatherData(defaultCity){
//   let apiResponse = await fetch(
//     "https://api.openweathermap.org/data/2.5/weather?q=" +
//       defaultCity +
//       "&units=imperial&appid=" +
//       "0b21588c5bd6e32721b905cd8aacabd7"
//   ).then((Response) => Response.json());
//   currentLocation.innerText = apiResponse.name;
// //   weatherData = apiResponse;
//   console.log(apiResponse);
// }

// // getweatherData(defaultCity);




// async function getweatherData(defaultCity){
//     let apiResponse = await fetch(
//       "https://api.openweathermap.org/data/2.5/weather?q=" +
//         defaultCity +
//         "&units=imperial&appid=" +
//         "0b21588c5bd6e32721b905cd8aacabd7"
//     ).then((Response) => Response.json());
//     currentLocation.innerText = apiResponse.name;
//     weatherData = apiResponse;
    
//   }
  
//   getweatherData(defaultCity);

// searchBtn.addEventListener("click", function () {
//     getWeatherData(searchInput.value);
//   });
  






























// // let currentLocation = document.getElementById("currentLocation");

// // // 5 day forecast == fiveDay
// // let fiveDay = document.getElementById("fiveDay");

// // //current day == dayofWeek
// // let dayOfWeek = document.getElementById("dayOfWeek");

// // //curent temp == dayofWeekTemp
// // let dayOfWeekTemp = document.getElementById("dayOfWeekTemp");

// // //weather icon == weatherIcon
// // let weatherIcon = document.getElementById("weatherIcon");

// // let defaultCity = "stockton";
 
// // let weatherData = [];

// // let currentCity = defaultCity;

// // async function getweatherData(defaultCity){
// //   let apiResponse = await fetch(
// //     "https://api.openweathermap.org/data/2.5/weather?q=" +
// //       defaultCity +
// //       "&units=imperial&appid=" +
// //       "0b21588c5bd6e32721b905cd8aacabd7"
// //   ).then((Response) => Response.json());
// //   console.log(apiResponse);
// //   currentLocation.innerText = apiResponse.name;
// //   weatherData = apiResponse;
  
// // }

// // getweatherData(defaultCity);

// // let currentLocation = document.getElementById("currentLocation");
// // let dayOfWeek = document.getElementById("dayOfWeek");
// // let dayOfWeekTemp = document.getElementById("dayOfWeekTemp");
// // let weatherIcon = document.getElementById("weatherIcon");

// // let defaultCity = "stockton";

// // async function getWeatherData(defaultCity) {
// //     try {
// //         let apiResponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${defaultCity}&units=imperial&appid=0b21588c5bd6e32721b905cd8aacabd7`);
// //         let weatherData = await apiResponse.json();

// //         if (currentLocation && dayOfWeek && dayOfWeekTemp && weatherIcon) {
// //             currentLocation.textContent = `Current Weather in ${defaultCity}`;
// //             dayOfWeek.textContent = "Current Temperature:";
// //             dayOfWeekTemp.textContent = `${weatherData.main.temp} °F`;
// //             weatherIcon.src = `http://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`;
// //             weatherIcon.alt = weatherData.weather[0].description;
// //         } else {
// //             console.error("One or more elements not found.");
// //         }
// //     } catch (error) {
// //         console.error("Error fetching weather data:", error);
// //     }
// // }

// // getWeatherData(defaultCity);
