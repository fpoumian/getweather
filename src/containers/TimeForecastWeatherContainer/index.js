import React, { Component } from 'react'

import TimeForecastWeather from 'components/TimeForecastWeather'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actionCreators from 'actions/'

function mapStateToProps (props) {
  const {unitSystem} = props
  return {
    unitSystem
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators(actionCreators, dispatch)
}

const ConnectedTimeForecastWeather = connect(mapStateToProps, mapDispatchToProps)(TimeForecastWeather)

class TimeForecastWeatherContainer extends Component {
  render () {
    return (
      <ConnectedTimeForecastWeather {...this.props}/>
    )
  }
}

export default TimeForecastWeatherContainer
