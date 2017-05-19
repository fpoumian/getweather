import WeatherService from '../../../lib/__mocks__/WeatherService'
import currentWeatherDataAll from '../../../mocks/data/currentWeatherDataAll.json'
import forecastDataAll from '../../../mocks/data/forecastDataAll.json'
import * as utils from '../utils'

describe('getHashSubstring', () => {
  // Test
  it('Can extract unit system substring from url hash', () => {
    expect(utils.getHashSubstring('#metric')).toEqual('metric')
    expect(utils.getHashSubstring('#imperial')).toEqual('imperial')
  })
})

describe('validateUnitSystemHash', () => {
  // Test
  it('Can validate a correct unin system hash', () => {
    expect(utils.validateUnitSystemHash('#metric')).toBe(true)
    expect(utils.validateUnitSystemHash('#imperial')).toBe(true)
    expect(utils.validateUnitSystemHash('#wrong')).toBe(false)
  })
})

describe('getUnitSystemFromRequest', () => {
  // Setup
  const place1 = {
    country: 'United States'
  }

  const place2 = {
    country: 'United Kingdom'
  }

  const imperial = '#imperial'
  const metric = '#metric'

  // Test
  it('Can assign an unit system using for default United States weather queries', () => {
    expect(utils.getUnitSystemFromRequest(imperial, place1)).toEqual('imperial')
  })
  it('Can assign an unit system for United States weather queries using metric system', () => {
    expect(utils.getUnitSystemFromRequest(metric, place1)).toEqual('metric')
  })
  it('Can assign an unit system for United Kingdom weather queries using metric system', () => {
    expect(utils.getUnitSystemFromRequest(metric, place2)).toEqual('metric')
  })
  it('Can assign an unit system for United Kingdom weather queries using imperial system', () => {
    expect(utils.getUnitSystemFromRequest(imperial, place2)).toEqual('imperial')
  })
  it('Can assign default imperial unit system for United States weather queries using invalid hash', () => {
    expect(utils.getUnitSystemFromRequest('#wrong', place1)).toEqual('imperial')
  })
  it('Can assign default metric unit system for United Kingdom weather queries using invalid hash', () => {
    expect(utils.getUnitSystemFromRequest('#wrong', place2)).toEqual('metric')
  })
})

describe('getCurrentWeatherForPlace', () => {
  // Setup
  const place = {
    locality: 'El Paso',
    aal1: 'Texas',
    country: 'United States'
  }

  const options = {
    unitSystem: 'metric'
  }

  const weatherService = new WeatherService()

  it('Can get current weather from place', () => {
    expect.assertions(1)
    return utils.getCurrentWeatherForPlace(weatherService, place, options).then(response => {
      expect(response).toEqual(
        {
          query: {
            place: 'El Paso, Texas, United States',
            unitSystem: 'metric'
          },
          data: currentWeatherDataAll,
          status: 200
        }
      )
    })
  })
  it('Can get forecast for place', () => {
    expect.assertions(1)
    return utils.getForecastForPlace(weatherService, place, options).then(response => {
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
    })
  })
  it('Can get both current weather and forecast for place', () => {
    expect.assertions(1)
    return utils.getCurrentWeatherAndForecastForPlace(weatherService, place, options).then(responses => {
      expect(responses).toEqual({
        query: {
          place: 'El Paso, Texas, United States',
          unitSystem: 'metric'
        },
        results: {
          current: {
            status: 200,
            data: currentWeatherDataAll
          },
          forecast: {
            status: 200,
            data: forecastDataAll
          }
        }
      })
    })
  })
})
