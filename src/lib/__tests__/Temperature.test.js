import Fahrenheit from '../Fahrenheit'
import Celsius from '../Celsius'

describe('Celsius Class', () => {
  // Setup
  const cel1 = new Celsius(0)
  const cel2 = new Celsius(-4)
  const cel3 = new Celsius(40)

  it('Can convert Celsius to Fahrenheit', () => {
    expect(cel1.toFahrenheit().temp).toEqual(32)
    expect(cel1.toFahrenheit().toString()).toEqual('32 °F')
    expect(cel2.toFahrenheit().temp).toEqual(24.8)
    expect(cel2.toFahrenheit().toString()).toEqual('24.8 °F')
    expect(cel3.toFahrenheit().temp).toEqual(104)
    expect(cel3.toFahrenheit().toString()).toEqual('104 °F')
  })
  it('Can derive a Celsius temperature object', () => {
    expect(cel1.derive()).toEqual({
      metric: 0,
      imperial: 32
    })
    expect(cel2.derive()).toEqual({
      metric: -4,
      imperial: 24.8
    })
  })
})
describe('Fahrenheit Class', () => {
  // Setup
  const far1 = new Fahrenheit(0)
  const far2 = new Fahrenheit(50)
  const far3 = new Fahrenheit(-30)

  it('Can convert Fahrenheit to Celsius', () => {
    expect(far1.toCelsius().temp).toEqual(-17.78)
    expect(far1.toCelsius().toString()).toEqual('-17.78 °C')
    expect(far2.toCelsius().temp).toEqual(10)
    expect(far2.toCelsius().toString()).toEqual('10 °C')
    expect(far3.toCelsius().temp).toEqual(-34.44)
    expect(far3.toCelsius().toString()).toEqual('-34.44 °C')
  })

  it('Can derive a Fahrenheit temperature object', () => {
    expect(far1.derive()).toEqual({
      metric: -17.78,
      imperial: 0
    })
    expect(far2.derive()).toEqual({
      metric: 10,
      imperial: 50
    })
  })
})
