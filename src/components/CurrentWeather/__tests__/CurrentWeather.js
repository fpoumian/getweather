import React from 'react'
import { shallow } from 'enzyme'
import CurrentWeather from '../index'
import CurrentWeatherGraphic from '../../CurrentWeatherGraphic'
import CurrentWeatherDataContainer from '../../../containers/CurrentWeatherDataContainer'

describe('<CurrentWeather/>', () => {
  const props = {
    temperature: 10,
    dt: 1234567,
    place: 'El Paso, Texas, United States'
  }

  it('renders without crashing', () => {
    shallow(<CurrentWeather {...props}/>)
  })

  const wrapper = shallow(<CurrentWeather {...props}/>)

  it('renders one <CurrentWeatherGraphic /> component', () => {
    expect(wrapper.find(CurrentWeatherGraphic)).toHaveLength(1)
  })

  it('renders one <CurrentWeatherData /> component', () => {
    expect(wrapper.find(CurrentWeatherDataContainer)).toHaveLength(1)
  })
})
