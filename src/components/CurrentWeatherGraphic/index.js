import React from 'react'
import PropTypes from 'prop-types'
import { Grid } from 'semantic-ui-react'
import WeatherGraphic from '../WeatherGraphic'

const CurrentWeatherGraphic = ({weather}) => {
  return (
      <Grid.Column width="8">
        <WeatherGraphic width={200} weather={weather}/>
      </Grid.Column>
  )
}

CurrentWeatherGraphic.propTypes = {
  weather: PropTypes.array
}

export default CurrentWeatherGraphic
