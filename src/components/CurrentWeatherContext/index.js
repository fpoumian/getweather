import React from 'react'
import PropTypes from 'prop-types'
import {capitalize} from 'lodash'

import Date from 'components/Date'
import Percentage from 'components/Percentage'
import Speed from 'components/Speed'

const CurrentWeatherContext = (props) => {
  const {place, dt, wind, humidity, unitSystem, weather} = props
  return (
    <div>
      <h2>{place}</h2>
      <div>
        <strong>Last Updated:</strong> <Date timestamp={dt} format="LLL" as="span" />
      </div>
      <div>
        <strong>Description:</strong> <span> {capitalize(weather[0].description)}</span>
      </div>
      <div>
        <strong>Humidty:</strong> <Percentage percent={humidity}/>
      </div>
      <div>
        <strong>Wind:</strong> <Speed wind={wind} unitSystem={unitSystem} />
      </div>
    </div>
  )
}

CurrentWeatherContext.propTypes = {
  place: PropTypes.string.isRequired,
  dt: PropTypes.number,
  wind: PropTypes.object,
  humidity: PropTypes.number,
  unitSystem: PropTypes.string,
  weather: PropTypes.array
}
CurrentWeatherContext.defaultProps = {}

export default CurrentWeatherContext
