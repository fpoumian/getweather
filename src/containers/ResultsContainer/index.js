import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { browserHistory } from 'react-router'

import Results from 'components/Results'
import * as utils from './utils'
import WeatherService from 'lib/WeatherService'
import WeatherServiceMock from 'lib/__mocks__/WeatherService'
import { OPEN_WEATHER_PUBLIC_KEY } from 'constants/settings'

class ResultsContainer extends Component {
  constructor (props) {
    super(props)

    if (!utils.validateLocationQuery(props.location)) {
      browserHistory.push('/')
    }

    this.state = {
      isLoading: true,
      query: {},
      results: {}
    }
  }

  componentDidMount () {
    const weatherService = new WeatherService(OPEN_WEATHER_PUBLIC_KEY)
    const {hash, query} = this.props.location
    const unitSystem = utils.getUnitSystemFromRequest(hash, query)
    this.props.switchUnitSystem(unitSystem)
    utils.getCurrentWeatherAndForecastForPlace(weatherService, this.props.location.query, {unitSystem: 'metric'})
      .then(response => {
        this.setState({
          isLoading: false,
          query: response.query,
          results: response.results
        })
      })
  }

  render () {
    const {isLoading, results} = this.state
    const {place} = this.state.query

    return (
    <Results isLoading={isLoading} results={results} place={place}/>
    )
  }
}

ResultsContainer.propTypes = {
  switchUnitSystem: PropTypes.func,
  location: PropTypes.object
}

export default ResultsContainer
