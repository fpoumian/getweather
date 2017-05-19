import PlaceQuery from '../PlaceQuery'

describe('PlaceQuery', () => {
  const args = {
    locality: 'Toronto',
    aal1: 'Ontario',
    country: 'Canada'
  }

  const args2 = {
    locality: 'Toronto',
    aal1: 'Ontario',
    country: ''
  }

  it('Can instantiate new PlaceQuery object', () => {
    const query = new PlaceQuery(args)
    expect(query).toBeInstanceOf(PlaceQuery)
  })

  it('Can validate correct arguments', () => {
    expect(PlaceQuery.validate(args.locality, args.aal1, args.country)).toBe(true)
  })

  it('Can invalidate incorrect arguments', () => {
    expect(PlaceQuery.validate(args2.locality, args2.aal1, args2.country)).toBe(false)
  })

  it('Can throw error to invalid init args', () => {
    expect(() => {
      const query = new PlaceQuery(args2)
    }).toThrow('Unable to instantiate PlaceQuery with passed arguments')
  })
})
