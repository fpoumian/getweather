import React from 'react'
import { shallow } from 'enzyme'
import Forecast from '../index'

describe('<Forecast/>', () => {
  it('renders without crashing', () => {
    shallow(<Forecast/>)
  })
})
