import React from 'react'
import { shallow } from 'enzyme'
import CurrentWeatherData from '../index'
import CurrentWeatherTemperature from 'components/CurrentWeatherTemperature'
import CurrentWeatherContext from 'components/CurrentWeatherContext'

describe('<CurrentWeatherData/>', () => {
  it('renders without crashing', () => {
    shallow(<CurrentWeatherData/>)
  })

  const wrapper = shallow(<CurrentWeatherData/>)

  it('renders one <CurrentWeatherTemeprature /> component', () => {
    expect(wrapper.find(CurrentWeatherTemperature)).toHaveLength(1)
  })

  it('renders one <CurrentWeattherContext /> component', () => {
    expect(wrapper.find(CurrentWeatherContext)).toHaveLength(1)
  })
})
