import React from 'react'
import { shallow } from 'enzyme'
import TimeForecastWeather from '../index'

describe('<TimeForecastWeather/>', () => {
  // Setup
  const props = {
    weatherData: {
      main: {
        temp: {

        }
      }
    }
  }
  it('renders without crashing', () => {
    shallow(<TimeForecastWeather {...props}/>)
  })
})
