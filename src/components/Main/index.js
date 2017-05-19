import React, { Component } from 'react'
import { Grid } from 'semantic-ui-react'
import styles from './styles'

export class Main extends Component {
  render () {
    return (
      <div className="App" style={{height: '100%'}}>
        <main style={styles}>
          <Grid container centered columns={1}>
              {React.cloneElement(this.props.children, this.props)}
          </Grid>
        </main>
      </div>
    )
  }
}

Main.propTypes = {}
Main.defaultProps = {}

export default Main
