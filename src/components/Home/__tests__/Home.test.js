import React from 'react'
import { shallow } from 'enzyme'
import Home from '../index'

describe('Test <Home/> component', () => {
  it('renders without crahsing', () => {
    shallow(<Home/>)
  })
})
