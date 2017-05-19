import TemperatureUnit from './TemperatureUnit'
import Celsius from './Celsius'

export default class Fahrenheit extends TemperatureUnit {
  constructor (temp) {
    super(temp)
    this._symbol = 'F'
  }

  toCelsius () {
    return new Celsius((this._temp - 32) / 1.8)
  }

  derive () {
    return {
      imperial: this.temp,
      metric: this.toCelsius().temp
    }
  }
}
