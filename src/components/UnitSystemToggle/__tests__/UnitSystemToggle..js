import React from 'react'
import { shallow } from 'enzyme'
import UnitSystemToggle from '../index'

describe('<UnitSystemToggle/>', () => {
  // Setup
  const props = {
    switchUnitSystem: function () {}
  }

  it('renders without crashing', () => {
    shallow(<UnitSystemToggle {...props}/>)
  })
})
