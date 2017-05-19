import React from 'react'
import PropTypes from 'prop-types'
import { Menu } from 'semantic-ui-react'
import {Link} from 'react-router'

const SidebarMenu = (props) => {
  return (
    <Menu
      vertical
      size="massive"
      inverted
      >
      <Menu.Item name='home' as={Link} to="/">
        Home
      </Menu.Item>
      <Menu.Item name='about' as={Link} to="/about">
        About
      </Menu.Item>
    </Menu>
  )
}

SidebarMenu.propTypes = {}
SidebarMenu.defaultProps = {}

export default SidebarMenu
