import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import CurrentWeatherData from 'components/CurrentWeatherData'
import * as actionCreators from 'actions/'

function mapStateToProps ({unitSystem}) {
  return {
    unitSystem
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators(actionCreators, dispatch)
}

const ConnectedCurrentWeatherData = connect(mapStateToProps, mapDispatchToProps)(CurrentWeatherData)

class CurrentWeatherDataContainer extends Component {
  render () {
    return (
      <ConnectedCurrentWeatherData {...this.props}/>
    )
  }
}

export default CurrentWeatherDataContainer
