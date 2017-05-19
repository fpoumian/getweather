import * as utils from '../utils'
import now from 'performance-now'

describe('convertFahrenheitToCelsius', () => {
  it('Can convert from fahrenheit to celsius', () => {
    expect(utils.convertFahrenheitToCelsius(0)).toEqual(-17.78)
    expect(utils.convertFahrenheitToCelsius(50)).toEqual(10)
    expect(utils.convertFahrenheitToCelsius(-30)).toEqual(-34.44)
  })
})

describe('convertCelsiusToFahrenheit', () => {
  it('Can convert from celsius to fahrenheit', () => {
    expect(utils.convertCelsiusToFahrenheit(0)).toEqual(32)
    expect(utils.convertCelsiusToFahrenheit(-4)).toEqual(24.8)
    expect(utils.convertCelsiusToFahrenheit(40)).toEqual(104)
  })
})

describe('convertMsToMph', () => {
  it('Can convert from meters per second to miles per hour', () => {
    expect(utils.convertMsToMph(1)).toEqual(2.24)
    expect(utils.convertMsToMph(7.2)).toEqual(16.11)
  })
})
describe('convertMphToMs', () => {
  it('Can convert from miles per hour to meters per second', () => {
    expect(utils.convertMphToMs(1)).toEqual(0.45)
    expect(utils.convertMphToMs(16.10)).toEqual(7.20)
  })
})
describe('deriveFromObjAsync', () => {
  it('Can derive an object with both temperature units from a Celsius value', () => {
    expect.assertions(1)
    var t0 = now()
    return utils.deriveFromObjAsync({
      key: 'metric', value: 0
    }, [
      {
        key: 'imperial',
        callback: utils.convertCelsiusToFahrenheit
      }
    ]).then(result => {
      expect(result).toEqual({
        metric: 0,
        imperial: 32
      })
      var t1 = now()
      console.log('Took', (t1 - t0).toFixed(4), 'milliseconds to generate ASYNC')
    })
  })
})
describe('deriveFromObj', () => {
  it('Can derive an object with both temperature units from a Celsius value', () => {
    var t0 = now()
    expect(utils.deriveFromObj({
      key: 'metric', value: 0
    }, [
      {
        key: 'imperial',
        callback: utils.convertCelsiusToFahrenheit
      }
    ])).toEqual({
      metric: 0,
      imperial: 32
    })
    var t1 = now()
    console.log('Took', (t1 - t0).toFixed(4), 'milliseconds to generate SYNC')
  })
  it('Can derive an object with both temperature units from a Fahrenheit value', () => {
    expect(utils.deriveFromObj({
      key: 'imperial', value: 32
    }, [
      {
        key: 'metric',
        callback: utils.convertFahrenheitToCelsius
      }
    ])).toEqual({
      metric: 0,
      imperial: 32
    })
  })
  it('Can derive an object with both speed units from a Meters per Second value', () => {
    expect(utils.deriveFromObj({
      key: 'metric', value: 1
    }, [
      {
        key: 'imperial',
        callback: utils.convertMsToMph
      }
    ])).toEqual({
      metric: 1,
      imperial: 2.24
    })
  })
})
describe('deriveValuesWtihKeys', () => {
  // Setup
  const main = {
    'temp': 29.67,
    'pressure': 1005,
    'humidity': 5,
    'temp_min': 29,
    'temp_max': 30
  }

  const wind = {
    'speed': 7.2,
    'deg': 120
  }

  const imperialTemperatureDirectives = [{
    key: 'imperial',
    callback: utils.convertCelsiusToFahrenheit
  }]

  const imperialSpeedDirectives = [{
    key: 'imperial',
    callback: utils.convertMsToMph
  }]

  it('Can derive all unit systems from main temperature object', () => {
    expect(utils.deriveValueswithKeys(main, ['temp', 'temp_min', 'temp_max'], imperialTemperatureDirectives)).toEqual({
      temp: {
        metric: 29.67,
        imperial: 85.41
      },
      pressure: 1005,
      humidity: 5,
      temp_min: {
        metric: 29,
        imperial: 84.2
      },
      temp_max: {
        metric: 30,
        imperial: 86
      }
    })
  })
  it('Can derive all unit systems from wind object', () => {
    expect(utils.deriveValueswithKeys(wind, ['speed'], imperialSpeedDirectives)).toEqual({
      speed: {
        metric: 7.2,
        imperial: 16.11
      },
      deg: 120
    })
  })
})
