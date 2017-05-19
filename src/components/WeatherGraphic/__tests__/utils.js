import {assignWeatherIcon} from '../utils'
import ClearSkyDay from '../icons/day.svg'

describe('assignWeatherIcon', () => {
  // Setup
  const weather = [
    {
      icon: '01d'
    }
  ]

  // Test
  it('Can assign the correct weather icon', () => {
    expect(assignWeatherIcon(weather)).toEqual(ClearSkyDay)
  })
})
