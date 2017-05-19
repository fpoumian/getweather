import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { browserHistory } from 'react-router'
import load from 'load-script'
import SearchForm from '../../components/SearchForm'

import {
  getPlacePredictions,
  getPlaceIdsFromPredictions,
  getPlacesData,
  formatPlaceData,
  normalizeCountryShortName,
  filterNonLocalities,
  getPlaceLongNames
} from './utils'

/* eslint-disable no-undef */

class SearchFormContainer extends Component {
  constructor (props) {
    super(props)
    this.state = {
      predictions: [],
      errors: {
        emptySelection: false
      },
      selectedLocation: {}
    }
    this.handleDropdownSearchChange = this.handleDropdownSearchChange.bind(this)
    this.handleOnDropdownValueChange = this.handleOnDropdownValueChange.bind(this)
    this.handleOnFormButtonClick = this.handleOnFormButtonClick.bind(this)
  }

  loadGoogleScripts () {
    return new Promise((resolve, reject) => {
      // If we already loaded Google API scripts then resolve to true and exit function
      if (this.props.gScriptsLoaded) {
        resolve({
          loaded: true
        })
        return
      }

      // If Google API scripts are not loaded, then load them and change state
      load('https://maps.googleapis.com/maps/api/js?key=AIzaSyB3pwql3llZAkzroK3KZb_cuS1MYMKuQOw&libraries=places', (err, script) => {
        if (err) {
          reject(new Error('error while loading script'))
        } else {
          resolve({loaded: true})
          this.props.setScriptsState(true)
        }
      })
    })
  }

  componentDidMount () {
    this.loadGoogleScripts()
      .then(loaded => {
        if (loaded) {
          this.autoCompleteService = new google.maps.places.AutocompleteService()
          this.placeDetailService = new google.maps.places.PlacesService(document.createElement('div'))
        }
      })
      .catch(err => console.log(err))
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
    // don't predict location until user types at least three characters
    if (value.length < 3) return

    getPlacePredictions(value, this.autoCompleteService)
      .then(filterNonLocalities)
      .then(getPlaceIdsFromPredictions)
      .then(placesIds => getPlacesData(placesIds, this.placeDetailService))
      .then(places => {
        this.setState({
          predictions: places.map(place => ({
            text: formatPlaceData(place),
            value: JSON.stringify(place),
            flag: normalizeCountryShortName(place.country.shortName)
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
    this.setState({
      selectedLocation: JSON.parse(value)
    })
  }

// Handles when user clicks on "Get Weather" button
  handleOnFormButtonClick (event, data) {
    event.preventDefault()
    const {selectedLocation} = this.state

    if (Object.keys(selectedLocation).length === 0) {
      this.setErrorState('emptySelection', true)
      return
    }

    const {locality, country, administrativeAreaLevel1} = getPlaceLongNames(selectedLocation)
    const unitSystem = country === 'United States' ? 'imperial' : 'metric'

    browserHistory.push(`/results?locality=${encodeURIComponent(locality)}&aal1=${encodeURIComponent(administrativeAreaLevel1)}&country=${encodeURIComponent(country)}#${unitSystem}`)
  }

  render () {
    const {predictions} = this.state
    const {errors} = this.state
    return (
      <SearchForm
        predictions={predictions}
        errors={errors}
        onSearchChange={this.handleDropdownSearchChange}
        onChange={this.handleOnDropdownValueChange}
        onSubmitClick={this.handleOnFormButtonClick}
      />
    )
  }
}

export default SearchFormContainer
