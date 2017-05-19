import axios from 'axios'
import URL from 'url-parse'
import WeatherQuery from './WeatherQuery'
import { deriveValueswithKeys, convertCelsiusToFahrenheit, convertMsToMph } from './utils'

export default class WeatherService {
  constructor (appId) {
    this._appId = appId
  }

  generateEndpointURL (queryType, place, options) {
    queryType = queryType === 'current' ? 'weather' : 'forecast'
    const endpoint = WeatherService.baseEndpointUrl + '/' + queryType
    const url = new URL(endpoint)
    const query = new WeatherQuery({place: place, unitSystem: options.unitSystem, appId: this._appId})
    url.set('query', {
      ...query
    })
    return url
  }

  getWeather (queryType, place, options, convertFn) {
    const url = this.generateEndpointURL(queryType, place, options)
    return axios.get(url.toString())
      .then(response => WeatherService.handleResponse(response, convertFn))
      .then(({data, status}) => {
        return {
          query: {
            place,
            unitSystem: options.unitSystem
          },
          data,
          status
        }
      })
  }

  getCurrentWeather (place, options) {
    return this.getWeather('current', place, options, WeatherService.convertCurrentWeatherData)
  }

  getForecast (place, options) {
    return this.getWeather('forecast', place, options, WeatherService.convertForecastData)
  }

  static convertCurrentWeatherData (data) {
    return WeatherService.deriveWeatherData(data)
  }

  static convertForecastData (data) {
    if (!data.hasOwnProperty('list')) throw new ReferenceError('data argument must have list property.')

    const promises = data.list.map(item => WeatherService.deriveWeatherData(item))
    return Promise.all(promises)
      .then(convertedList => {
        return {
          ...data,
          list: convertedList
        }
      })
  }

  static deriveTemperature (main, directives) {
    return deriveValueswithKeys(main, ['temp', 'temp_min', 'temp_max'], directives)
  }

  static deriveWindSpeed (wind, directives) {
    return deriveValueswithKeys(wind, ['speed'], directives)
  }

  static handleResponse ({data, status}, convertFn) {
    // returns a Promise
    return convertFn(data)
      .then(newData => {
        return {
          data: newData,
          status
        }
      })
  }

  static deriveWeatherData (weatherData) {
    return new Promise((resolve, reject) => {
      if (!weatherData.hasOwnProperty('main') || !weatherData.hasOwnProperty('wind')) {
        reject(new ReferenceError('data argument must have main and wind properties'))
      }

      let newMainData, newWindData

      try {
        newMainData = WeatherService.deriveTemperature(weatherData.main, WeatherService.temperatureDirectives)
        newWindData = WeatherService.deriveWindSpeed(weatherData.wind, WeatherService.speedDirectives)
      } catch (Error) {
        reject(Error)
      }

      resolve({
        ...weatherData,
        main: newMainData,
        wind: newWindData
      })
    })
  }
}

WeatherService.baseEndpointUrl = 'http://api.openweathermap.org/data/2.5'

WeatherService.temperatureDirectives = [{
  key: 'imperial',
  callback: convertCelsiusToFahrenheit
}]

WeatherService.speedDirectives = [{
  key: 'imperial',
  callback: convertMsToMph
}]
