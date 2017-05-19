import React from 'react'
import { shallow } from 'enzyme'
import Percentage from '../index'

describe('<Percentage/>', () => {
  it('renders without crashing', () => {
    shallow(<Percentage/>)
  })
})
