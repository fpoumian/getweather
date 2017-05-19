export default class WeatherQuery {
  constructor ({place, unitSystem, appId}) {
    if (!WeatherQuery.validate(place, unitSystem, appId)) {
      throw new Error('Unable to instantiate WeatherQuery with passed arguments')
    }
    this.q = place
    this.units = unitSystem
    this.appid = appId
  }

  static validate (place, unitSystem, appId) {
    const args = Array.prototype.slice.call(arguments)
    const invalidArgs = args.filter(arg => typeof arg === 'undefined' || arg === '')
    return invalidArgs.length === 0
  }

  toString () {
    return `${this.locality}, ${this.aal1}, ${this.country}`
  }
}
