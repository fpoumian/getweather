import React from 'react'
import { shallow } from 'enzyme'
import SearchForm from '../index'

describe('<SearchForm/>', () => {
  const props = {
    errors: {
      emptySelection: ''
    }
  }

  it('renders without crashing', () => {
    shallow(<SearchForm {...props} />)
  })
})
