import React, { PropTypes } from 'react'
import {Button, Icon} from 'semantic-ui-react'

const SidebarToggle = ({handleToggleClick}) => {
  return (
    <div className="sidebar-toggle">
      <Button onClick={handleToggleClick}>
        <Icon name="sidebar" size="big"/>
      </Button>
    </div>
  )
}

SidebarToggle.propTypes = {
  handleToggleCLick: PropTypes.func
}
SidebarToggle.defaultProps = {}

export default SidebarToggle
