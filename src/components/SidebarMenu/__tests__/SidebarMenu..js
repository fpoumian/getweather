import React from 'react'
import { shallow } from 'enzyme'
import SidebarMenu from '../index'

describe('<SidebarMenu/>', () => {
  it('renders without crashing', () => {
    shallow(<SidebarMenu/>)
  })
})
