export default class TemperatureUnit {
  constructor (temp) {
    this._temp = parseFloat((temp).toFixed(2))
  }

  get temp () {
    return this._temp
  }

  toFahrenheit () {
    throw new Error('You have to implement the method toFahrenheit')
  }

  toCelsius () {
    throw new Error('You have to implement the method toCelsius')
  }

  toString () {
    return `${this._temp} °${this._symbol}`
  }
}
