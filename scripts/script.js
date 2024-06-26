
let faveCityAPI = [];
let favArr = [];
let cityData = [];
let weatherData = [];


let searchBar = document.getElementById("searchBar");
let saveBtn = document.getElementById("saveBtn")
let injectHere = document.getElementById("injectHere");

// CURRENT DAY IDS
let currentLocation = document.getElementById("currentLocation");
let dayAndDate = document.getElementById("dayAndDate");
let currentTemp = document.getElementById("currentTemp");
let tempNowMax = document.getElementById("tempNowMax");
let tempNowMin = document.getElementById("tempNowMin");
let dayOfWeek = document.getElementById("dayOfWeek");
let locationIcon = document.getElementById("locationIcon");

// 5 DAY FORECAST IDS: includes the temp, the name of the week, and a weather icom
let dayOneTemp = document.getElementById("dayOneTemp");
let dayOneIcon = document.getElementById("dayOneIcon");
let dayOfWeek1 = document.getElementById("dayOfWeek1");

let dayTwoTemp = document.getElementById("dayTwoTemp");
let dayTwoIcon = document.getElementById("dayTwoIcon");
let dayOfWeek2 = document.getElementById("dayOfWeek2");

let dayThreeTemp = document.getElementById("dayThreeTemp");
let dayThreeIcon = document.getElementById("dayThreeIcon");
let dayOfWeek3 = document.getElementById("dayOfWeek3");

let dayFourTemp = document.getElementById("dayFourTemp");
let dayFourIcon = document.getElementById("dayFourIcon");
let dayOfWeek4 = document.getElementById("dayOfWeek4");

let dayFiveTemp = document.getElementById("dayFiveTemp");
let dayFiveIcon = document.getElementById("dayFiveIcon");
let dayOfWeek5 = document.getElementById("dayOfWeek5");


let options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};

let choosenCity = "";
//accesses the days of the week from the computer and shows them for the 5 day forecast

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

// this innerText targets the assigned ID and replaces that text on the screen
let d = new Date();
let day = days[d.getDay()];
dayOfWeek1.innerText = days[d.getDay() + 1];
dayOfWeek2.innerText = days[d.getDay() + 2];
dayOfWeek3.innerText = days[d.getDay() + 3];
dayOfWeek4.innerText = days[d.getDay() + 4];
dayOfWeek5.innerText = days[d.getDay() + 5];


// connects button to getWeatherData by a keypress. whenever a city is entered, it will display it in the left hand corner
searchBar.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    choosenCity = searchBar.value;

    getweatherData(choosenCity);
    // console.log(weatherData);
  }
});

// save function for favorites list
saveBtn.addEventListener("click", function () {
  let obj = { "favCity": cityData.city.name };
  favArr.push(obj);
  localStorage.setItem("favCity", JSON.stringify(favArr));
  favArr = JSON.parse(localStorage.getItem("favoriteCity")) || [];
  console.log("Loaded favorites:", favArr);

  console.log(favArr);

  let colDiv = document.createElement("div");
  colDiv.classList = "col";

  let ptag = document.createElement("p");
  ptag.innerText = cityData.city.name;
  ptag.addEventListener("click", function () {
    getweatherData(ptag.innerText);
  });


// delete function for favorites section
  let deleteBtn = document.createElement("button");
  deleteBtn.classList.add("delete-btn");
  deleteBtn.innerText = "Delete";
  deleteBtn.addEventListener("click", function () {
    colDiv.remove();
    let index = favArr.findIndex((item) => item.favCity === ptag.innerText);
    favArr.splice(index, 1);
    localStorage.setItem("favoriteCity", JSON.stringify(favArr));
  });

  colDiv.appendChild(ptag);
  colDiv.appendChild(deleteBtn);
  injectHere.appendChild(colDiv);

});

//

// async function that pulls weather data from the open weather api
async function getweatherData(choosenCitys) {
  let apiResponse = await fetch(
    "https://api.openweathermap.org/data/2.5/forecast?q=" +
      choosenCitys +
      "&units=imperial&appid=0b21588c5bd6e32721b905cd8aacabd7").then(Response => Response.json());
  weatherData = apiResponse;
  cityData = apiResponse;
  let currentDate = new Date();
  console.log(choosenCitys);
  console.log(currentDate);



  // innerText is used to replace the text for the location, day and date, current temp, minimun and maximun temp
  locationIcon.src ="https://openweathermap.org/img/wn/" + apiResponse.list["4"].weather["0"].icon + ".png";
  currentLocation.innerText = apiResponse.city.name;
  dayAndDate.innerText = currentDate.toLocaleDateString(undefined, options);
  currentTemp.innerText = Math.round(apiResponse.list[0].main.temp) + "°";
  tempNowMin.innerText = Math.round(apiResponse.list[0].main.temp_min) + "°";
  tempNowMax.innerText = Math.round(apiResponse.list[0].main.temp_max) + "°";

  favArr = JSON.parse(localStorage.getItem("favoriteCity")) || [];
  console.log("Loaded favorites:", favArr);

  // FIVE DAY TEMP
  // once again, innerText is used to replace the text targeted by the ID

  // 1 DAY
  dayOneTemp.innerText = Math.round(apiResponse.list[4].main.temp);


  // 2 DAY
  dayTwoTemp.innerText = Math.round(apiResponse.list[12].main.temp);


  // // 3 DAY
  dayThreeTemp.innerText = Math.round(apiResponse.list[20].main.temp);


  // // 4 DAY
  dayFourTemp.innerText = Math.round(apiResponse.list[28].main.temp);

  // // 5 DAY
  dayFiveTemp.innerText = Math.round(apiResponse.list[36].main.temp);

/// FIVE DAY ICONS
  dayOneIcon.src =
    "https://openweathermap.org/img/wn/" +
    apiResponse.list["4"].weather["0"].icon +
    ".png";
  dayTwoIcon.src =
    "https://openweathermap.org/img/wn/" +
    apiResponse.list["12"].weather["0"].icon +
    ".png";
  dayThreeIcon.src =
    "https://openweathermap.org/img/wn/" +
    apiResponse.list["20"].weather["0"].icon +
    ".png";
  dayFourIcon.src =
    "https://openweathermap.org/img/wn/" +
    apiResponse.list["28"].weather["0"].icon +
    ".png";
  dayFiveIcon.src =
    "https://openweathermap.org/img/wn/" +
    apiResponse.list["36"].weather["0"].icon +
    ".png";

 



};



//OLD DISCARDED CODE THAT DIDNT WORK SO WELL.

// async function getWeatherData(choosenCity) {
//   let apiResponse = await fetch("https://api.openweathermap.org/data/2.5/forecast?q=" + choosenCity + "&units=imperial&appid=0b21588c5bd6e32721b905cd8aacabd7");
//   let weatherData = await apiResponse.json();

//   // Loop through the forecast data for the next seven days
//   for (let i = 0; i < 7; i++) {
//     let forecast = weatherData.list[i]; // Get the forecast data for each day

//     // Extract the date from the forecast data
//     let date = new Date(forecast.dt * 1000); // Convert UNIX timestamp to milliseconds
//     let dayOfWeek1 = getDayOfWeek(date.getDay()); // Get the corresponding day of the week

//     // Set the day of the week for each forecasted day
//     let dayElement = document.getElementById(`dayOfWeek1${i + 1}`); // Assuming you have elements with IDs dayOfWeek1, dayOfWeek2, ..., dayOfWeek7
//     dayElement.innerText = dayOfWeek1;
//   }
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
