import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Form, Message } from 'semantic-ui-react'
import debounce from 'debounce'
import load from 'load-script'

import {
  getLocationPredictions,
  getPlaceIdsFromPredictions,
  getPlacesData,
  formatLocationData,
  normalizeCountryShortName,
  filterNonLocalities
} from './utils'

/* eslint-disable no-undef */

class SearchForm extends Component {
  constructor () {
    super()
    this.state = {
      predictions: [],
      errors: {
        emptySelection: false
      }
    }
  }

  componentDidMount () {
    load('https://maps.googleapis.com/maps/api/js?key=AIzaSyB3pwql3llZAkzroK3KZb_cuS1MYMKuQOw&libraries=places', (err, script) => {
      if (err) {
        console.log('error while loading script')
      } else {
        this.autoCompleteService = new google.maps.places.AutocompleteService()
        this.placeDetailService = new google.maps.places.PlacesService(document.createElement('div'))
      }
    })
  }

  setErrorState (errorType, value) {
    const errors = {}
    errors[errorType] = value

    this.setState({
      errors
    })
  }

  // handlers when user is typing inside the Search textbox
  handleDropdownSearchChange (event, value) {
    if (value.length < 3) return

    getLocationPredictions(value, this.autoCompleteService)
      .then(filterNonLocalities)
      .then(getPlaceIdsFromPredictions)
      .then((places) => getPlacesData(places, this.placeDetailService))
      .then((predictions) => {
        this.setState({
          predictions: predictions.map(prediction => ({
            text: formatLocationData(prediction),
            value: JSON.stringify(prediction),
            flag: normalizeCountryShortName(prediction.country.shortName)
          }))
        })
      }
      )
      .catch(e => console.log('the error is %s', e))
  }

  // Handles when user selects an option from autocomplete dropdown
  handleOnDropdownValueChange (event, {value}) {
    if (typeof value === 'undefined' || value === '') {
      this.setErrorState('emptySelection', true)
      return
    }

    this.setErrorState('emptySelection', false)
    this.props.setCurrentLocation(JSON.parse(value))
  }

  // Handles when user clicks on "Get Weather" button
  handleOnFormButtonClick (event, data) {
    event.preventDefault()
    const {currentLocation} = this.props
    if (Object.keys(currentLocation).length === 0) {
      this.setErrorState('emptySelection', true)
    }
  }

  render () {
    const {predictions} = this.state
    const {errors} = this.state
    return (
      <div style={{marginTop: '2rem'}}>
        <Form>
          <Form.Dropdown
            required
            placeholder='Select city...' fluid search selection
            options={predictions}
            onSearchChange={debounce(this.handleDropdownSearchChange.bind(this), 200)}
            onChange={this.handleOnDropdownValueChange.bind(this)
            }
          />
          <Message
            error
            visible={errors.emptySelection}
            header="Error!"
            content="You need to provide a location"
          />
          <Form.Button className="button-submit-form" type="submit" onClick={this.handleOnFormButtonClick.bind(this)}>Get Weather</Form.Button>
        </Form>
      </div>
    )
  }
}

export default SearchForm
