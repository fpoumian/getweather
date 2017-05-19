import React, { Component } from 'react'
import { Grid, Segment, Loader, Dimmer } from 'semantic-ui-react'

import CurrentWeather from '../../components/CurrentWeather/index'
import Forecast from '../../components/Forecast/index'
import * as utils from './utils'
import WeatherService from '../../lib/WeatherService'
import WeatherServiceMock from '../../lib/__mocks__/WeatherService'
import { OPEN_WEATHER_PUBLIC_KEY } from '../../constants/settings'

class Results extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isLoading: true,
      query: {},
      results: {}
    }
  }

  componentDidMount () {
    const weatherService = new WeatherServiceMock(OPEN_WEATHER_PUBLIC_KEY)
    const {hash, query} = this.props.location
    const unitSystem = utils.getUnitSystem(hash, query)
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
    const renderResults = () => {
      if (this.state.isLoading) {
        return (
          <Dimmer active inverted>
            <Loader>Loading results...</Loader>
          </Dimmer>
        )
      } else {
        const {main, dt} = this.state.results.current.data
        const {place} = this.state.query
        return (
          <div>
            <CurrentWeather temperature={main.temp} place={place} dt={dt}/>
            <Forecast/>
          </div>
        )
      }
    }

    return (
      <Grid.Column width={12}>
        <Segment style={{padding: '3rem'}}>
          {renderResults()}
        </Segment>
      </Grid.Column>
    )
  }
}

Results.propTypes = {}
Results.defaultProps = {}

export default Results
