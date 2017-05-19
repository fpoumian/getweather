import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Tabs from '../../components/Tabs'

class TabsContainer extends Component {
  constructor (props) {
    super(props)
    const firstDay = Object.keys(props.days)[0]
    this.state = {
      activeItem: firstDay
    }
    this.handleItemClick = this.handleItemClick.bind(this)
  }

  handleItemClick (event, {name}) {
    this.setState({activeItem: name})
  }

  render () {
    const {activeItem} = this.state
    return (<Tabs activeItem={activeItem} onItemClick={this.handleItemClick} {...this.props} />)
  }
}

TabsContainer.propTypes = {}
TabsContainer.defaultProps = {}

export default TabsContainer
