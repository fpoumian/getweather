import React from 'react'
import PropTypes from 'prop-types'
import { Grid, Divider } from 'semantic-ui-react'
import { pick } from 'lodash'

import Date from 'components/Date'
import TimeForecastWeatherContainer from 'containers/TimeForecastWeatherContainer'

const TimeForecast = ({timeForecastData}) => {
  const weatherData = pick(timeForecastData, ['main', 'weather'])
  return (
    <div>
      <Grid container style={{paddingTop: '1.5rem', paddingBottom: '1.5rem'}} columns={2}>
        <Grid.Column width={6} verticalAlign="middle">
          <Date timestamp={timeForecastData.dt} as="h3" format="h A"/>
        </Grid.Column>
        <Grid.Column width={10} verticalAlign="middle">
          <TimeForecastWeatherContainer weatherData={weatherData}/>
        </Grid.Column>
      </Grid>
      <Divider/>
    </div>
  )
}

TimeForecast.propTypes = {
  timeForecastData: PropTypes.object
}

export default TimeForecast
