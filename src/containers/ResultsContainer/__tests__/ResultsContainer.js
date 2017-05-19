import React from 'react'
import { shallow } from 'enzyme'
import ResultsContainer from '../index'

describe('<Results/>', () => {
  it('renders without crashing', () => {
    shallow(<ResultsContainer location={{query: ''}}/>)
  })
})
