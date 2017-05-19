import React from 'react'
import { shallow } from 'enzyme'
import Main from '../index'

describe('Test <Main/> component', () => {
  it('renders without crahsing', () => {
    const props = {
      children: ''
    }
    shallow(<Main {...props} />)
  })
})
