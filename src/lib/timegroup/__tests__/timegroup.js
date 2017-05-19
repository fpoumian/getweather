import * as timegroup from '../timegroup'
import data from '../../../mocks/data/dates.json'

describe('sortBy', () => {
  const {list} = data

  it('should sort an array of dates by day', () => {
    const result = timegroup.sortByDay(list, 'timestamp')
    const keys = Object.keys(result)
    expect(keys).toHaveLength(6)
    expect(keys).toEqual(['Fri', 'Sat', 'Sun', 'Mon', 'Tue', 'Wed'])
  })
})
