import WeatherService from '../WeatherService'
import URL from 'url-parse'
import currentWeatherData from '../../mocks/data/currentWeatherData.json'
import currentWeatherAxiosResponse from '../../mocks/data/currentWeatherAxiosResponse'
import currentWeatherDataAll from '../../mocks/data/currentWeatherDataAll.json'
import forecastData from '../../mocks/data/forecastData.json'
import forecastDataAll from '../../mocks/data/forecastDataAll.json'

jest.mock('axios')

const service = new WeatherService('12345678')
const place = 'El Paso, Texas, United States'
const place2 = 'Toronto, Ontario, Canada'

const options = {
  unitSystem: 'metric'
}

describe('generateEndpointURL', () => {
  it('can generate an URL object of type URL', () => {
    const endpoint = service.generateEndpointURL('current', place, options)
    expect(endpoint).toBeInstanceOf(URL)
  })

  it('can generate an endpoint base path for current weather queries', () => {
    const endpoint = service.generateEndpointURL('current', place, options)
    expect(endpoint.pathname).toEqual('/data/2.5/weather')
  })
  it('can generate an endpoint base path for forecast queries', () => {
    const endpoint = service.generateEndpointURL('forecast', place, options)
    expect(endpoint.pathname).toEqual('/data/2.5/forecast')
  })

  it('can generate an endpoint url with correct query strings', () => {
    const endpoint = service.generateEndpointURL('current', place, options)
    expect(endpoint.query).toEqual({
      q: 'El Paso, Texas, United States',
      units: 'metric',
      appid: '12345678'
    })
  })
  it('can generate another endpoint url with correct query strings', () => {
    const endpoint = service.generateEndpointURL('current', place2, options)
    expect(endpoint.query).toEqual({
      q: 'Toronto, Ontario, Canada',
      units: 'metric',
      appid: '12345678'
    })
  })
})

describe('handleResponse', () => {
  // Test
  it('Can handle an axios response object appropriately', () => {
    expect.assertions(1)
    return WeatherService.handleResponse(currentWeatherAxiosResponse, WeatherService.convertCurrentWeatherData)
      .then(data => {
        expect(data).toEqual({
          data: currentWeatherDataAll,
          status: 200
        })
      })
  })
})

describe('getCurrentWeather', () => {
  // Test
  it('Can return a correct CurrentWeather response object', () => {
    expect.assertions(1)
    return service.getCurrentWeather(place, options).then(response => {
      expect(response).toEqual({
        query: {
          place: 'El Paso, Texas, United States',
          unitSystem: 'metric'
        },
        data: currentWeatherDataAll,
        status: 200
      })
    }
    )
  })
})

describe('convertForecastData', () => {
  // Test
  it('can convert list items in Forecast data object', () => {
    expect.assertions(1)
    return WeatherService.convertForecastData(forecastData)
      .then(convertedData => {
        expect(convertedData).toEqual(forecastDataAll)
      })
  })
})

describe('getForecast', () => {
  // Test
  it('Can return a correct Forecast response object', () => {
    return service.getForecast(place, options).then(response => {
      expect.assertions(1)
      expect(response).toEqual(
        {
          query: {
            place: 'El Paso, Texas, United States',
            unitSystem: 'metric'
          },
          data: forecastDataAll,
          status: 200
        }
        )
    }
    )
  })
})
