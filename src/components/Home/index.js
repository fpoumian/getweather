import React, {
  Component
} from 'react'
import { Container, Grid } from 'semantic-ui-react'
import Logo from '../Logo/index'
import SearchForm from '../../containers/SearchForm/index'

const google = window.google

const Home = (props) => {
  return (
    <Grid.Column width={8}>
      <Logo/>
      <SearchForm {...props}/>
    </Grid.Column>
  )
}

Home.propTypes = {}
Home.defaultProps = {}

export default Home
