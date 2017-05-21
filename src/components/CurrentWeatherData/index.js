import React from 'react'
import PropTypes from 'prop-types'
import { Grid } from 'semantic-ui-react'

import CurrentWeatherTemperature from 'components/CurrentWeatherTemperature'
import CurrentWeatherContext from 'components/CurrentWeatherContext'

const CurrentWeatherData = (props) => {
  return (
    <Grid.Column width="8" textAlign="center" className="current-weather-data">
      <CurrentWeatherTemperature {...props} />
      <CurrentWeatherContext {...props} />
    </Grid.Column>
  )
}

CurrentWeatherData.propTypes = {
  temperature: PropTypes.object,
  unitSystem: PropTypes.string,
  place: PropTypes.string,
  dt: PropTypes.number,
  wind: PropTypes.object,
  humidty: PropTypes.number
}

export default CurrentWeatherData
