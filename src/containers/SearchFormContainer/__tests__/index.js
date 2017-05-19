import React from 'react'
import { shallow, mount } from 'enzyme'
import SearchForm from '../index'
import {Form, Message, Button} from 'semantic-ui-react'

describe('<SearchForm/>', () => {
  it('renders without crashing', () => {
    shallow(<SearchForm/>)
  })

  it('renders one <Form /> component', () => {
    const wrapper = shallow(<SearchForm/>)
    expect(wrapper.find(Form)).toHaveLength(1)
  })

  it('renders one <Form.Dropdown /> component', () => {
    const wrapper = shallow(<SearchForm/>)
    expect(wrapper.find(Form.Dropdown)).toHaveLength(1)
  })

  it('renders one <Form.Button /> component', () => {
    const wrapper = shallow(<SearchForm/>)
    expect(wrapper.find(Form.Button)).toHaveLength(1)
  })

  it('handles emptySelection error state correctly', () => {
    const wrapper = shallow(<SearchForm currentLocation={{}} />)
    const submitButton = wrapper.find(Form.Button)
    expect(wrapper.state('errors')).toEqual({
      emptySelection: false
    })

    submitButton.simulate('click', {
      preventDefault: () => console.log('clicked!')
    })

    expect(wrapper.state('errors')).toEqual({
      emptySelection: true
    })
  })

  it('displays error message when trying to submit form with empty search box', () => {
    const wrapper = mount(<SearchForm currentLocation={{}} />)
    const messageBox = wrapper.find(Message)
    const submitButton = wrapper.find(Button)

    expect(messageBox.hasClass('visible')).toEqual(false)

    submitButton.simulate('click', {
      preventDefault: () => console.log('clicked!')
    })

    expect(messageBox.hasClass('visible')).toEqual(true)
  })
})
