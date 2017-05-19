import React from 'react'
import { shallow } from 'enzyme'
import CurrentWeatherData from '../index'

describe('<CurrentWeatherData/>', () => {
  it('renders without crashing', () => {
    shallow(<CurrentWeatherData/>)
  })
})
