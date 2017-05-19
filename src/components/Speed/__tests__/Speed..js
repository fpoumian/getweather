import React from 'react'
import { shallow } from 'enzyme'
import Speed from '../index'

describe('<Speed/>', () => {
  const props = {
    wind: {
      speed: {
        imperial: 1,
        metric: 1
      }
    }
  }

  it('renders without crashing', () => {
    shallow(<Speed {...props}/>)
  })
})
