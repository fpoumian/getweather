import React, {
  Component,
  PropTypes
} from 'react'
import Radium from 'radium'
import { Container, Grid } from 'semantic-ui-react'
import Logo from './../../components/Logo'
import SearchForm from './../SearchForm'
import styles from './styles'

class Main extends Component {
  render () {
    return (
      <main style={[styles]}>
        <Grid container={true} centered columns={1}>
          <Grid.Column width={8} >
            <Logo/>
            <SearchForm/>
          </Grid.Column>
        </Grid>
      </main>
    )
  }
}

Main.propTypes = {}
Main.defaultProps = {}

export default Radium(Main)
