import React from 'react'
import PropTypes from 'prop-types'

const Speed = ({wind, unitSystem}) => {
  const symbol = unitSystem === 'imperial' ? 'mph' : 'm/s'
  const speed = unitSystem === 'imperial' ? wind.speed.imperial : wind.speed.metric
  return (
    <span>{speed} {symbol}</span>
  )
}

Speed.propTypes = {
  wind: PropTypes.object,
  unitSystem: PropTypes.string
}
Speed.defaultProps = {}

export default Speed