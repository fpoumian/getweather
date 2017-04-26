import React, {
  Component,
  PropTypes
} from 'react'
import {Form} from 'semantic-ui-react'
import Radium from 'radium'

class SearchForm extends Component {
  render () {
    return (
      <div style={{marginTop: '2rem'}}>
        <Form>
          <Form.Dropdown placeholder='Select city...' fluid search selection/>
          <Form.Button type="submit">Get Weather</Form.Button>
        </Form>
      </div>
    )
  }
}

SearchForm.propTypes = {}
SearchForm.defaultProps = {}

export default Radium(SearchForm)
