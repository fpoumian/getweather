import React from 'react'
import { shallow } from 'enzyme'
import DayForecast from '../index'

describe('<DayForecast/>', () => {
  const props = {
    dayForecastData: [{}],
    day: ''
  }

  it('renders without crashing', () => {
    shallow(<DayForecast {...props}/>)
  })
})
