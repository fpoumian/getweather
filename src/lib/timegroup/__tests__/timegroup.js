import * as timegroup from '../timegroup'
import data from '../../../mocks/data/dates.json'
import moment from 'moment'

describe('sortBy', () => {
  const {list} = data

  const result = timegroup.sortByDay(list, 'timestamp')
  const keys = Object.keys(result)

  it('should sort an array with six items', () => {
    expect(keys).toHaveLength(6)
  })

  it('should sort an array with correct day timestamps', () => {
    expect(keys).toEqual(['1494568800', '1494655200', '1494741600', '1494828000', '1494914400', '1495000800'])
  })

  it('should return timestamps which correspond to the expected days', () => {
    const days = keys.map(key => moment.unix(parseInt(key)).format('ddd'))
    expect(days).toEqual(['Fri', 'Sat', 'Sun', 'Mon', 'Tue', 'Wed'])
  })
})
