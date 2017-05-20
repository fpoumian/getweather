import React from 'react'
import { shallow } from 'enzyme'
import ResultsContainer from '../index'

describe('<Results/>', () => {

  const props = {
    location: {
      query: {
        aal1: 'Texas',
        country: 'United States',
        locality: 'El Paso'
      }
    }
  }

  it('renders without crashing', () => {
    shallow(<ResultsContainer {...props}/>)
  })
})
