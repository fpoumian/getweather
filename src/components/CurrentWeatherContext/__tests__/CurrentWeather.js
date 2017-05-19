import React from 'react'
import { shallow } from 'enzyme'
import CurrentWeatherContext from '../index'

describe('<CurrentWeatherContext/>', () => {
  const props = {
    place: 'Toronto',
    dt: 1234567890,
    wind: {},
    humidity: 1,
    unitSystem: 'metric',
    weather: [{}]
  }

  it('renders without crashing', () => {
    shallow(<CurrentWeatherContext {...props}/>)
  })
})
