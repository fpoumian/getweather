import React from 'react'
import { shallow } from 'enzyme'
import TimeForecast from '../index'

describe('<TimeForecast/>', () => {
  // Setup
  const props = {
    timeForecastData: {
      dt: 123456
    }
  }

  // Tests
  it('renders without crashing', () => {
    shallow(<TimeForecast {...props}/>)
  })
})
