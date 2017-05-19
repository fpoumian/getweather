import React from 'react'
import { shallow } from 'enzyme'
import MainContainer from '../index'

describe('<MainContainer/>', () => {
  it('renders without crashing', () => {
    shallow(<MainContainer/>)
  })
})
