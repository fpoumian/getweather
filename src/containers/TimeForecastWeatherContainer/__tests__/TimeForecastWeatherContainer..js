import React from 'react'
import { shallow } from 'enzyme'
import TimeForecastWeatherContainer from '../index'

describe('<TimeForecastWeatherContainer/>', () => {
  it('renders without crashing', () => {
    shallow(<TimeForecastWeatherContainer/>)
  })
})
