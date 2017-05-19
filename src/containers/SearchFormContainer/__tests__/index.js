import React from 'react'
import { shallow, mount } from 'enzyme'
import SearchFormContainer from '../index'
import {Form, Message, Button} from 'semantic-ui-react'

describe('<SearchFormContainer/>', () => {
  it('renders without crashing', () => {
    shallow(<SearchFormContainer/>)
  })

  // it('displays error message when trying to submit form with empty search box', () => {
  //   const wrapper = mount(<SearchFormContainer/>)
  //   const messageBox = wrapper.find(Message)
  //   const submitButton = wrapper.find(Button)
  //
  //   expect(messageBox.hasClass('visible')).toEqual(false)
  //
  //   submitButton.simulate('click', {
  //     preventDefault: () => console.log('clicked!')
  //   })
  //
  //   expect(messageBox.hasClass('visible')).toEqual(true)
  // })
})
