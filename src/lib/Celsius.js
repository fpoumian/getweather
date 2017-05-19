import TemperatureUnit from './TemperatureUnit'
import Fahrenheit from './Fahrenheit'

export default class Celsius extends TemperatureUnit {
  constructor (temp) {
    super(temp)
    this._symbol = 'C'
  }

  toFahrenheit () {
    return new Fahrenheit((this._temp * 1.8) + 32)
  }

  derive () {
    return {
      metric: this.temp,
      imperial: this.toFahrenheit().temp
    }
  }
}
