import React from 'react'
import { Grid } from 'semantic-ui-react'

import Logo from 'components/Logo'
import SearchFormContainer from 'containers/SearchFormContainer'

const Home = props => {
  return (
    <Grid.Row columns={1}>
      <Grid.Column tablet={6} computer={6} largeScreen={6} width={16}>
        <Logo/>
        <SearchFormContainer {...props}/>
      </Grid.Column>
    </Grid.Row>
  )
}

export default Home
