import WeatherQuery from '../WeatherQuery'

describe('WeatherQuery', () => {
  const args = {
    place: 'Toronto, Ontario, Canada',
    unitSystem: 'imperial',
    appId: '1234567'
  }

  const args2 = {
    unitSystem: 'imperial',
    appId: '1234567'
  }

  it('Can instantiate new WeatherQuery object', () => {
    const query = new WeatherQuery(args)
    expect(query).toBeInstanceOf(WeatherQuery)
  })
  it('Can validate correct arguments', () => {
    expect(WeatherQuery.validate(args.place, args.unitSystem, args.appId)).toBe(true)
  })
  it('Can throw error to invalid init args', () => {
    expect(() => {
      const query = new WeatherQuery(args2)
    }).toThrow('Unable to instantiate WeatherQuery with passed arguments')
  })
})
