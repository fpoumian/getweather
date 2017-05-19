import React from 'react'
import { shallow } from 'enzyme'
import CurrentWeatherTemperature from '../index'

describe('<CurrentWeatherTemperature/>', () => {
  it('renders without crashing', () => {
    shallow(<CurrentWeatherTemperature temperature={10}/>)
  })
})
