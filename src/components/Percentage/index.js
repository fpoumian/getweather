import React from 'react'
import PropTypes from 'prop-types'

const Percentage = ({percent}) => {
  return (
    <span>{percent}%</span>
  )
}

Percentage.propTypes = {
  percent: PropTypes.number
}
Percentage.defaultProps = {}

export default Percentage
