import React, { Component, PropTypes } from 'react'
import SidebarOverlay from '../../components/SidebarOverlay'

class SidebarOverlayContainer extends Component {

  constructor (props) {
    super(props)

    this.state = {
      visible: false
    }
    this.toggleVisibility = this.toggleVisibility.bind(this)
  }

  toggleVisibility () {
    this.setState({
      visible: !this.state.visible
    })
  }

  render () {
    return (
      <SidebarOverlay handleToggleClick={this.toggleVisibility} visible={this.state.visible} />
    )
  }
}

SidebarOverlayContainer.propTypes = {}
SidebarOverlayContainer.defaultProps = {}

export default SidebarOverlayContainer
