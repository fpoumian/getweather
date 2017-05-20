import React from 'react'
import PropTypes from 'prop-types'
import { Grid, Loader, Dimmer } from 'semantic-ui-react'
import CurrentWeather from '../../components/CurrentWeather/index'
import Forecast from '../../components/Forecast/index'
import './styles.css'

const Results = props => {
  const renderResults = () => {
    if (props.isLoading) {
      return (
        <Dimmer active>
          <Loader size="massive">Loading results...</Loader>
        </Dimmer>
      )
    } else {
      const {place} = props
      const {main, dt, weather, wind} = props.results.current.data
      const {list} = props.results.forecast.data

      return (
        <Grid columns="16" stackable={true} centered>
          <CurrentWeather
            temperature={main.temp}
            place={place} dt={dt}
            weather={weather}
            humidity={main.humidity}
            wind={wind}/>
          <Forecast list={list}/>
        </Grid>
      )
    }
  }

  return (
    <Grid.Column width={12}>
        {renderResults()}
    </Grid.Column>
  )
}

Results.propTypes = {
  isLoading: PropTypes.bool,
  results: PropTypes.object,
  place: PropTypes.string,
  dt: PropTypes.number
}
Results.defaultProps = {}

export default Results
