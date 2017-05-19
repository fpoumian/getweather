import React from 'react'
import { shallow } from 'enzyme'
import SearchForm from '../index'

describe('<SearchForm/>', () => {
  it('renders without crashing', () => {
    shallow(<SearchForm/>)
  })
})
