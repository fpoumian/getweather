import React from 'react'
import { Form, Message } from 'semantic-ui-react'
import debounce from 'debounce'
import PropTypes from 'prop-types'

const SearchForm = props => {
  const {errors, predictions, onSearchChange, onChange, onSubmitClick} = props
  return (
    <div style={{marginTop: '2rem'}}>
      <Form>
        <Form.Dropdown
          required
          placeholder='Select your city, town or locality...' fluid search selection
          options={predictions}
          onSearchChange={debounce(onSearchChange, 200)}
          onChange={onChange}
        />
        <Message
          error
          visible={errors.emptySelection}
          header="Error!"
          content="You need to provide a valid location."
        />
        <Form.Button className="button-submit-form" type="submit" onClick={onSubmitClick}>Get Weather</Form.Button>
      </Form>
    </div>
  )
}

SearchForm.propTypes = {
  errors: PropTypes.object,
  predictions: PropTypes.array,
  onSearchChange: PropTypes.func,
  onChange: PropTypes.func,
  onSubmitClick: PropTypes.func
}

export default SearchForm
