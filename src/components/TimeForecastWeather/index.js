import React from 'react'
import PropTypes from 'prop-types'
import { Grid } from 'semantic-ui-react'
import WeatherGraphic from '../WeatherGraphic'

const TimeForecastWeather = ({weatherData, unitSystem}) => {
  const {temp} = weatherData.main
  const {weather} = weatherData

  return (
    <div>
      <Grid stackable columns={2} container>
        <Grid.Column width={8}>
          <WeatherGraphic width={100} weather={weather}/>
        </Grid.Column>
        <Grid.Column width={8} verticalAlign="middle">
          <h4>{unitSystem === 'imperial' ? `${temp.imperial} °F` : `${temp.metric} °C` }</h4>
        </Grid.Column>
      </Grid>
    </div>
  )
}

TimeForecastWeather.propTypes = {
  weatherData: PropTypes.object,
  unitSystem: PropTypes.string
}
TimeForecastWeather.defaultProps = {}

export default TimeForecastWeather
