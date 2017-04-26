import React, { Component } from 'react'
import './styles.css'
import SidebarToggle from '../../components/SidebarToggle'

class App extends Component {
  render () {
    return (
      <div className="App" style={{height: '100%'}}>
        {React.cloneElement(this.props.children, this.props)}
        {/*<SidebarToggle/>*/}
      </div>
    )
  }
}

export default App
