import React from 'react'
import { Grid, Image } from 'semantic-ui-react'
import placeholder from './placeholder.png'
import Cloudy from './icons/cloudy.svg'
import Day from './icons/day.svg'

const CurrentWeatherGraphic = ({weather}) => {
  const renderWeatherGraphic = () => {
    const {id} = weather[0]
    console.log(id)
    if (id === 801) {
      return (
        <Image src={Cloudy} centered width={200}/>
      )
    } else {
      return (
        <Image src={Day} centered width={200}/>
      )
    }
  }

  return (
      <Grid.Column width="8">
        {renderWeatherGraphic()}
        {/* <Image src={Cloudy} centered width={200}/> */}
      </Grid.Column>
  )
}

CurrentWeatherGraphic.propTypes = {}
CurrentWeatherGraphic.defaultProps = {}

export default CurrentWeatherGraphic
