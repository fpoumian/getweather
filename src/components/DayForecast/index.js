import React from 'react'
import PropTypes from 'prop-types'
import TimeForecast from '../TimeForecast'
import { Header } from 'semantic-ui-react'
import moment from 'moment'

const DayForecast = ({dayForecastData, timestamp}) => {
  const mapDayForecastDataToTimeForecast = () => {
    return dayForecastData.map((timeData, index) => {
      return <TimeForecast timeForecastData={timeData} key={index}/>
    })
  }

  return (
    <div>
      <Header as="h3" attached="top">
        {moment.unix(timestamp).format('dddd D')}
      </Header>
      {mapDayForecastDataToTimeForecast()}
    </div>
  )
}

DayForecast.propTypes = {
  dayForecastData: PropTypes.array,
  timestamp: PropTypes.string
}
DayForecast.defaultProps = {}

export default DayForecast
