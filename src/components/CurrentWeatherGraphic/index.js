import React from 'react'
import { Grid, Image } from 'semantic-ui-react'
import placeholder from './placeholder.png'
import WeatherGraphic from '../WeatherGraphic'

const CurrentWeatherGraphic = ({weather}) => {
  return (
      <Grid.Column width="8">
        <WeatherGraphic width={200} weather={weather}/>
      </Grid.Column>
  )
}

CurrentWeatherGraphic.propTypes = {}
CurrentWeatherGraphic.defaultProps = {}

export default CurrentWeatherGraphic
