import WeatherService from '../WeatherService'

describe('WeatherService', () => {
  const service = new WeatherService('12345678')

  it('can generate an endpoint url', () => {
    const query = {
      location: 'El Paso, United States, Texas',
      units: 'imperial'
    }
    const endpoint = service.generateEndpointURL('weather', query)
    expect(endpoint).toEqual('http://api.openweathermap.org/data/2.5/weather?q=El Paso, United States, Texas&units=imperial&appid=12345678')
  })
})
