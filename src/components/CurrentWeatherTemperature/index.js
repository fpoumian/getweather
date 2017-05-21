import React from 'react'
import PropTypes from 'prop-types'
import UnitSystemToggle from 'components/UnitSystemToggle'
import styles from './styles'

const CurrentWeatherTemperature = (props) => {
  const {temperature, unitSystem} = props
  return (
    <div style={styles.div}>
      <h2 style={styles.temp}>{unitSystem === 'imperial' ? temperature.imperial : temperature.metric }</h2>
      <UnitSystemToggle {...props} />
    </div>
  )
}

CurrentWeatherTemperature.propTypes = {
  temperature: PropTypes.object.isRequired,
  unitSystem: PropTypes.string.isRequired
}
CurrentWeatherTemperature.defaultProps = {
  unitSystem: 'metric'
}

export default CurrentWeatherTemperature
