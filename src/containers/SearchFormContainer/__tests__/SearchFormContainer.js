import React from 'react'
import { shallow, mount } from 'enzyme'
import SearchFormContainer from '../index'

describe('<SearchFormContainer/>', () => {
  it('renders without crashing', () => {
    shallow(<SearchFormContainer/>)
  })
})
