function refreshWeather(response) {
  let temperatureElement = document.querySelector(
    "#weather-app-current-temperature"
  );
  let temperature = response.data.temperature.current;
  let cityElement = document.querySelector("#weather-app-city");

  cityElement.innerHTML = response.data.city;

  temperatureElement.innerHTML = Math.round(temperature);
}

function searchCity(city) {
  //make api call and update the interface//

  let apiKey = "09ca3208a3c54ff392o0d073ft81a8b1";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;

  axios.get(apiUrl).then(refreshWeather);
}

function handleSearchSubmit(event) {
  event.preventDefault();

  let searchInput = document.querySelector("#search-form-input");

  searchCity(searchInput.value);
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);

searchCity("Johannesburg");
