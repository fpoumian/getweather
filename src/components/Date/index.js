import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'

const Date = ({timestamp, format, as}) => {
  const Tag = as
  const date = moment.unix(timestamp).format(format)
  return (
    <Tag>{date}</Tag>
  )
}

Date.propTypes = {
  timestamp: PropTypes.number,
  format: PropTypes.string,
  as: PropTypes.string
}
Date.defaultProps = {}

export default Date