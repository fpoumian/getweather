import React, { Component } from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as actionCreators from '../../actions/'
import Main from '../../components/Main'
import MainContainer from '../MainContainer'

function mapStateToProps ({currentLocation}) {
  return {
    currentLocation
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators(actionCreators, dispatch)
}

const App = connect(mapStateToProps, mapDispatchToProps)(MainContainer)

export default App
