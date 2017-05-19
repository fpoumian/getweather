import React from 'react'
import { shallow } from 'enzyme'
import CurrentWeatherContext from '../index'

describe('<CurrentWeatherContext/>', () => {
  it('renders without crashing', () => {
    shallow(<CurrentWeatherContext/>)
  })
})
