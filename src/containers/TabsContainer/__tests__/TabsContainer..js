import React from 'react'
import { shallow } from 'enzyme'
import TabsContainer from '../index'

describe('<TabsContainer/>', () => {
  // Setup
  const props = {
    days: {
      'mon': {}
    }
  }
  it('renders without crashing', () => {
    shallow(<TabsContainer {...props}/>)
  })
})
