import React from 'react'
import { shallow } from 'enzyme'
import CurrentWeatherGraphic from '../index'

describe('<CurrentWeatherGraphic/>', () => {
  it('renders without crahsing', () => {
    shallow(<CurrentWeatherGraphic/>)
  })
})
