import React from 'react'
import { shallow } from 'enzyme'
import Tabs from '../index'

describe('<Tabs/>', () => {
  const props = {
    activeItem: '',
    days: {}
  }

  it('renders without crashing', () => {
    shallow(<Tabs {...props}/>)
  })
})
