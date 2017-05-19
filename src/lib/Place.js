export default class Place {
  constructor ({locality, aal1, country}) {
    if (!Place.validate(locality, aal1, country)) {
      throw new Error('Unable to instantiate Place with passed arguments')
    }
    this.locality = locality
    this.aal1 = aal1
    this.country = country
  }

  static validate (locality, aal1, country) {
    const args = Array.prototype.slice.call(arguments)
    const invalidArgs = args.filter(arg => typeof arg === 'undefined' || arg === '')
    return invalidArgs.length === 0
  }

  toString () {
    return `${this.locality}, ${this.aal1}, ${this.country}`
  }
}
