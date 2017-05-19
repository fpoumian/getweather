import React from 'react'
import PropTypes from 'prop-types'
import { Grid } from 'semantic-ui-react'
import 'react-tabs/style/react-tabs.css'
import { sortByDay } from '../../lib/timegroup/timegroup'
import TabsContainer from '../../containers/TabsContainer'

const Forecast = props => {
  const sortedDateList = sortByDay(props.list, 'dt')
  return (
    <Grid.Row style={{marginTop: '7em'}}>
      <TabsContainer days={sortedDateList}/>
    </Grid.Row>
  )
}

Forecast.propTypes = {
  list: PropTypes.array
}
Forecast.defaultProps = {}

export default Forecast
