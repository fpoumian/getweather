import React from 'react'
import PropTypes from 'prop-types'
import { Menu, Segment, Grid } from 'semantic-ui-react'
import moment from 'moment'
import './styles.css'

import { mapObjectKeys } from './utils'
import DayForecast from 'components/DayForecast'

const Tabs = ({activeItem, onItemClick, days}) => {
  const hide = {
    display: 'none'
  }

  const getDayFromTimestamp = timestamp => moment.unix(timestamp).format('ddd')

  const mapTimestampsToTabs = obj => {
    return mapObjectKeys(obj, (timestamp, index) => {
      return (
        <Menu.Item
          name={timestamp}
          content={getDayFromTimestamp(timestamp)}
          active={activeItem === timestamp}
          onClick={onItemClick} index={index}
          key={index}/>
      )
    })
  }

  const mapTimestampsToTabContent = obj => {
    return mapObjectKeys(obj, (timestamp, index, obj) => {
      const day = getDayFromTimestamp(timestamp)
      return (
        <Segment attached='bottom' key={index} className={activeItem !== timestamp ? 'hide-on-computer' : null}>
          <DayForecast dayForecastData={obj[timestamp]} timestamp={timestamp}/>
        </Segment>
      )
    })
  }

  return (
    <div style={{width: '100%'}}>
          <Menu attached='top' tabular stackable widths={6}>
            {mapTimestampsToTabs(days)}
          </Menu>

      {mapTimestampsToTabContent(days)}
    </div>
  )
}

Tabs.propTypes = {}
Tabs.defaultProps = {}

export default Tabs
