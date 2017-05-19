import React from 'react'
import PropTypes from 'prop-types'
import { Grid } from 'semantic-ui-react'
import CurrentWeatherTemperature from '../CurrentWeatherTemperature'
import CurrentWeatherContext from '../CurrentWeatherContext'

const CurrentWeatherData = (props) => {
  const {place, dt, wind, humidity, unitSystem} = props
  return (
    <Grid.Column width="8" textAlign="center" className="current-weather-data">
      <CurrentWeatherTemperature {...props} />
      <CurrentWeatherContext {...props} />
    </Grid.Column>
  )
}

CurrentWeatherData.propTypes = {
  temperature: PropTypes.object.isRequired,
  unitSystem: PropTypes.string,
  place: PropTypes.string.isRequired,
  dt: PropTypes.number,
  wind: PropTypes.object,
  humidty: PropTypes.number
}

export default CurrentWeatherData
