import currentWeatherDataAll from '../../mocks/data/currentWeatherDataAll.json'
import forecastDataAll from '../../mocks/data/forecastDataAll.json'

function WeatherService () {}

WeatherService.prototype.getCurrentWeather = function (place, options) {
  return new Promise((resolve, reject) => {
    resolve({
      query: {
        place: place,
        unitSystem: options.unitSystem
      },
      data: currentWeatherDataAll,
      status: 200
    })
  })
}

WeatherService.prototype.getForecast = function (place, options) {
  return new Promise((resolve, reject) => {
    resolve({
      query: {
        place: place,
        unitSystem: options.unitSystem
      },
      data: forecastDataAll,
      status: 200
    })
  })
}

export default WeatherService
