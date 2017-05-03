import React, {
  Component
} from 'react'
import { Container, Grid } from 'semantic-ui-react'
import Logo from './../../components/Logo'
import SearchForm from './../SearchForm'
import styles from './styles'

export class Main extends Component {
  render () {
    return (
      <div className="App" style={{height: '100%'}}>
        <main style={styles}>
          <Grid container={true} centered columns={1}>
            <Grid.Column width={8}>
              {React.cloneElement(this.props.children, this.props)}
            </Grid.Column>
          </Grid>
        </main>
      </div>
    )
  }
}

Main.propTypes = {}
Main.defaultProps = {}

export default Main
