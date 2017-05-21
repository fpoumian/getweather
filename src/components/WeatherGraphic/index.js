import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {Image } from 'semantic-ui-react'

import { assignWeatherIcon } from './utils'

class WeatherGraphic extends Component {
  shouldComponentUpdate () {
    return false
  }

  render () {
    const {weather, width} = this.props

    return (
      <Image src={assignWeatherIcon(weather)} centered width={width}/>
    )
  }
}

WeatherGraphic.propTypes = {
  width: PropTypes.number,
  weather: PropTypes.array
}
WeatherGraphic.defaultProps = {}

export default WeatherGraphic
