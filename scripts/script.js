
let searchHistoryUL = document.getElementById('searchHistoryUL');
let searchForm = document.getElementById('searchForm')
let searchInput = document.getElementById('searchInput');
// let searchButton = document.getElementById('searchButton');


// curent location == currentLocation
let currentLocation = document.getElementById('currentLocation');

let weatherDIV = document.getElementById('weatherDIV')


// 5 day forecast == fiveDay
let fiveDay = document.getElementById('fiveDay');

//current day == dayofWeek
let dayOfWeek = document.getElementById('dayOfWeek')

//curent temp == dayofWeekTemp
let dayOfWeekTemp = document.getElementById('dayOfWeekTemp');

//weather icon == weatherIcon
let weatherIcon = document.getElementById('weatherIcon');



// let dayAndDate = document.getElementById("dayAndDate");





//Use MomentJS to get current time/date
let today = moment();

//Initialize Search Items and Max History Items Globally
let searchItems = [];
let maxHistoryItems = 5;

//Query Local Storage for existing information, if available populate search History.
function initLocalStorage(){
    if (localStorage.getItem('storedSearches')){
        searchItems = JSON.parse(localStorage.getItem('storedSearches'));
        for (let x = 0; x < searchItems.length; x++) {
            createStorageNodes(searchItems);
        }
    }
}

//Create Storage buttons from local Storage
function createStorageNodes(items) {
    searchHistoryUL.innerHTML = '';
    for (let x = 0; x < items.length; x++){
        let newEl = document.createElement('li');
        newEl.classList = "searchItem btn-info";
        newEl.textContent = items[x];
        searchHistoryUL.appendChild(newEl);
    }
    searchInput.value = '';
};

//Search Button Event processes
searchForm.addEventListener('submit', function(e) {
    searchDIV.classList = "";
    weatherDIV.style.display = 'block';
    e.preventDefault();
    const input = searchInput.value;
    if(input.length > 0) {
        currentWeather(input);
        searchItems.unshift(input);
        if(searchItems.length > maxHistoryItems) {
            searchItems.pop();
        }
        createStorageNodes(searchItems);
        searchButton.blur();
        localStorage.setItem('storedSearches', JSON.stringify(searchItems));
    }
})

searchHistoryUL.addEventListener('click', function(e) {
    if (e.target.matches('.searchItem')) {
        e.preventDefault();
        searchInput.value = e.target.textContent;
        searchButton.click();
    }
})

//Function to query API to get current weather and then query secondary API for forecast using Longitude
//and Latitude.
function currentWeather(location) {
    const apiKey = 'f0843e2d5655217e1be93c6df679445a';
    const requestURL = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}}&aqi=no`;
    
    fetch(requestURL)
    .then(function (response) {
      return response.json();
    })
    .then(function (weather) {
        const longitude = weather.location.lon;
        const latitude = weather.location.lat;
    
        locationName.textContent = weather.location.name + 
        ', ' + weather.location.region;

        todaysDate.textContent = today.format('MM/DD/YYYY');

   

        currentTemp.textContent = weather.current.temp_f;


        currentIcon.src = "https:" + weather.current.condition.icon;

        getForecast(latitude, longitude);
        });
}
