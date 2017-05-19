import React from 'react'
import { shallow } from 'enzyme'
import CurrentWeatherDataContainer from '../index'

describe('<CurrentWeatherDataContainer/>', () => {
  it('renders without crashing', () => {
    shallow(<CurrentWeatherDataContainer/>)
  })
})
