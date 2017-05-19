import React from 'react'
import { Grid } from 'semantic-ui-react'

const About = (props) => {
  return (
    <Grid.Row columns={1}>
      <Grid.Column tablet={6} computer={6} largeScreen={6} width={16}>
        <h2>About GetWeather.org</h2>
        <p>GetWeather.org is a light minimalistic web application that lets you check the current weather conditions and forecast for any given locality. </p>
        <p>GetWeather.org was developed using React/Redux and the Semantic UI CSS framework.</p>
      </Grid.Column>
    </Grid.Row>
  )
}

export default About
