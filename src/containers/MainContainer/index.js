import React, { Component, PropTypes } from 'react'
import Main from '../../components/Main'

class MainContainer extends Component {
  constructor (props) {
    super(props)

    this.state = {
      sidebarVisible: false,
      googleScriptsLoaded: false
    }
    this.toggleVisibility = this.toggleVisibility.bind(this)
    this.setScriptsState = this.setScriptsState.bind(this)
  }

  toggleVisibility () {
    this.setState({
      sidebarVisible: !this.state.sidebarVisible
    })
  }

  setScriptsState (newState) {
    this.setState({
      googleScriptsLoaded: newState
    })
  }

  render () {
    const {sidebarVisible, googleScriptsLoaded} = this.state
    return (
      <Main {...this.props}
            handleToggleClick={this.toggleVisibility}
            gScriptsLoaded={googleScriptsLoaded}
            setScriptsState={this.setScriptsState}
            sidebarVisible={this.state.sidebarVisible}/>
    )
  }
}

MainContainer.propTypes = {}
MainContainer.defaultProps = {}

export default MainContainer
