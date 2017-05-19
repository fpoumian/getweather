import React from 'react'
import { shallow } from 'enzyme'
import Date from '../index'

describe('<Date/>', () => {
  it('renders without crashing', () => {
    shallow(<Date/>)
  })
})
