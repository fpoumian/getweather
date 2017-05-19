import React from 'react'
import PropTypes from 'prop-types'

const UnitSystemToggle = ({unitSystem, switchUnitSystem}) => {
  const styles = {
    fontWeight: 'bold',
    color: '#ffa500'
  }

  return (
    <span style={{fontSize: '1.6rem', marginLeft: '1rem'}}>
      <a href="#metric" style={unitSystem === 'metric' ? styles : null} onClick={switchUnitSystem.bind(null, 'metric')}>°C</a>
      <span> | </span>
      <a href="#imperial" style={unitSystem === 'imperial' ? styles : null}
         onClick={switchUnitSystem.bind(null, 'imperial')}>°F</a>
    </span>
  )
}

UnitSystemToggle.propTypes = {
  unitSystem: PropTypes.string,
  switchUnitSystem: PropTypes.func
}
UnitSystemToggle.defaultProps = {}

export default UnitSystemToggle
