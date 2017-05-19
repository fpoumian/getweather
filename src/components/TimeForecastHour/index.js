import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'

const TimeForecastHour = ({timestamp}) => {
  const date = moment.unix(timestamp)
  return (
    <div>
      <h3>{date.format('h A')}</h3>
    </div>
  )
}

TimeForecastHour.propTypes = {
  timestamp: PropTypes.number
}
TimeForecastHour.defaultProps = {}

export default TimeForecastHour
