const WEATHER_API_KEY = "bbeb34ebf60ad50f7893e7440a1e2b0b";
const API_STEM = "http://api.openweathermap.org/data/2.5/weather?";

function _getForecastForZip(zip) {
  return _getForecast(
  `${API_STEM}q=${zip}&units=imperial&APPID=${WEATHER_API_KEY}`);
}

function _getForecastForCoords(lat, lon) {
  return _getForecast(
  `${API_STEM}lat=${lat}&lon=${lon}&units=imperial&APPID=${WEATHER_API_KEY}`);
}

function _getForecast(url) {
  return fetch(url)
    .then(response => response.json())
    .then(responseJSON => {
      return {
        main: responseJSON.weather[0].main,
        description: responseJSON.weather[0].description,
        temp: responseJSON.main.temp
      };
    })
    .catch(error => {
      console.error(error);
    });
}

export default { _getForecastForZip: _getForecastForZip,
                 _getForecastForCoords: _getForecastForCoords };