import React from 'react'
import { shallow } from 'enzyme'
import CurrentWeather from '../index'

describe('<CurrentWeather/>', () => {
  it('renders without crahsing', () => {
    shallow(<CurrentWeather/>)
  })

  const wrapper = shallow(<CurrentWeather/>)

  it('renders one <CurrentWeatherGraphic /> component', () => {
    expect(wrapper.find(CurrentWeatherGraphic)).toHaveLength(1)
  })

  it('renders one <CurrentWeatherData /> component', () => {
    expect(wrapper.find(CurrentWeatherData)).toHaveLength(1)
  })

  it('renders one <CurrentWeatherTemperature /> component', () => {
    expect(wrapper.find(CurrentWeatherTemperature)).toHaveLength(1)
  })

  it('renders one <TemperatureUnitSystemSwitcher /> component', () => {
    expect(wrapper.find(TemperatureUnitSystemSwitcher)).toHaveLength(1)
  })

  it('renders one <CurrentWeatherContext /> component', () => {
    expect(wrapper.find(CurrentWeatherContext)).toHaveLength(1)
  })

})
