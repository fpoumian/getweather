import currentWeatherAxiosResponse from '../src/mocks/data/currentWeatherAxiosResponse.js'
import forecastAxiosResponse from '../src/mocks/data/forecastAxiosResponse.js'
const axios = jest.genMockFromModule('axios')

axios.get = function (url) {
  console.log('mocking axios module')
  let response

  switch (true) {
    case /forecast\?/.test(url):
      response = forecastAxiosResponse
      break
    case /weather\?/.test(url):
      response = currentWeatherAxiosResponse
      break
  }

  return new Promise((resolve, reject) => {
    resolve(response)
  })
}

export default axios
