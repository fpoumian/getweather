import React, {
  PropTypes
} from 'react'
import { Image } from 'semantic-ui-react'
import logo from './logo.png'

const Logo = (props) => {
  return (
    <Image src={logo} centered />
  )
}

Logo.propTypes = {}
Logo.defaultProps = {}

export default Logo
