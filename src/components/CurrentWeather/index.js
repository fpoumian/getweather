import React from 'react'
import { Grid, Segment } from 'semantic-ui-react'
import PropTypes from 'prop-types'
import CurrentWeatherGraphic from '../CurrentWeatherGraphic'
import CurrentWeatherData from '../CurrentWeatherData'
import CurrentWeatherDataContainer from '../../containers/CurrentWeatherDataContainer'

const CurrentWeather = (props) => {
  return (
    <Grid.Row>
        <CurrentWeatherGraphic {...props} />
        <CurrentWeatherDataContainer {...props} />
    </Grid.Row>
  )
}

CurrentWeather.propTypes = {
  temperature: PropTypes.object.isRequired,
  place: PropTypes.string.isRequired,
  dt: PropTypes.number
}

export default CurrentWeather
