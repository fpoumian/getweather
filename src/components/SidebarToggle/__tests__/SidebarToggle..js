import React from 'react'
import { shallow } from 'enzyme'
import SidebarToggle from '../index'

describe('<SidebarToggle/>', () => {
  it('renders without crashing', () => {
    shallow(<SidebarToggle/>)
  })
})
