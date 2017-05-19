import React from 'react'
import PropTypes from 'prop-types'
import TimeForecast from '../TimeForecast'
import { Header } from 'semantic-ui-react'

const DayForecast = ({dayForecastData, day}) => {
  const mapDayForecastDataToTimeForecast = () => {
    return dayForecastData.map((timeData, index) => {
      return <TimeForecast timeForecastData={timeData} key={index}/>
    })
  }

  return (
    <div>
      <Header as="h3" attached="top">
        {day}
      </Header>
      {mapDayForecastDataToTimeForecast()}
    </div>
  )
}

DayForecast.propTypes = {
  dayForecastData: PropTypes.array,
  day: PropTypes.string
}
DayForecast.defaultProps = {}

export default DayForecast
