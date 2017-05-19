import React from 'react'
import PropTypes from 'prop-types'
import { Menu, Segment, Grid } from 'semantic-ui-react'
import './styles.css'
import { mapObjectKeys } from './utils'
import DayForecast from '../DayForecast'

const Tabs = ({activeItem, onItemClick, days}) => {
  const hide = {
    display: 'none'
  }

  const mapObjectKeysToTabs = obj => {
    return mapObjectKeys(obj, (key, index) => {
      return (
        <Menu.Item name={key} active={activeItem === key} onClick={onItemClick} index={index} key={index}/>
      )
    })
  }

  const mapObjectKeysToTabContent = obj => {
    return mapObjectKeys(obj, (key, index, obj) => {
      return (
        <Segment attached='bottom' key={index} className={activeItem !== key ? 'hide-on-computer' : null}>
          <DayForecast dayForecastData={obj[key]} day={key}/>
        </Segment>
      )
    })
  }

  return (
    <div style={{width: '100%'}}>
          <Menu attached='top' tabular stackable widths={6}>
            {mapObjectKeysToTabs(days)}
          </Menu>

      {mapObjectKeysToTabContent(days)}
    </div>
  )
}

Tabs.propTypes = {}
Tabs.defaultProps = {}

export default Tabs
