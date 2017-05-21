import React from 'react'
import { Grid } from 'semantic-ui-react'
import PropTypes from 'prop-types'

import CurrentWeatherGraphic from 'components/CurrentWeatherGraphic'
import CurrentWeatherDataContainer from 'containers/CurrentWeatherDataContainer'

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
