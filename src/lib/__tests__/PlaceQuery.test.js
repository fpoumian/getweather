import PlaceQuery from '../Place'

describe('Place', () => {
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

  it('Can instantiate new Place object', () => {
    const query = new PlaceQuery(args)
    expect(query).toBeInstanceOf(PlaceQuery)
  })

  it('Can validate correct arguments', () => {
    expect(PlaceQuery.validate(args.locality, args.aal1, args.country)).toBe(true)
  })

  it('Can invalidate incorrect arguments', () => {
    expect(PlaceQuery.validate(args2.locality, args2.aal1, args2.country)).toBe(false)
  })

  it('Can generate a correctly formatted string with properties', () => {
    const query = new PlaceQuery(args)
    expect(query.toString()).toEqual('Toronto, Ontario, Canada')
  })

  it('Can throw error to invalid init args', () => {
    expect(() => {
      const query = new PlaceQuery(args2)
    }).toThrow('Unable to instantiate Place with passed arguments')
  })
})
