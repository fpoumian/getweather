import React from 'react'
import PropTypes from 'prop-types'
import { Grid, Sidebar, Segment} from 'semantic-ui-react'
import { outerDiv, main, fullHeight } from './styles'
import SidebarToggle from '../SidebarToggle'
import Footer from '../Footer'
import SidebarMenu from '../SidebarMenu'
// import 'custom-semantic-ui/semantic/dist/semantic.css'
import './styles.css'

const Main = props => {
  const {sidebarVisible, handleToggleClick} = props
  return (
    <div className="App">

      <Sidebar.Pushable as={Segment} className="sidebar-pushable">

          <Sidebar
            animation='push'
            width='wide'
            visible={sidebarVisible}
            direction="right"
            className="get-weather-sidebar"
            onClick={handleToggleClick}
          >
            <SidebarMenu/>
          </Sidebar>

        <Sidebar.Pusher>
          <div style={outerDiv}>
            <main style={{...main, ...fullHeight}}>
              <SidebarToggle {...props}/>
              <Grid centered columns={1} container>
                {React.cloneElement(props.children, props)}
              </Grid>
            </main>
            <Footer/>
          </div>
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    </div>
  )
}

Main.propTypes = {
  sidebarVisible: PropTypes.func,
  handleToggleClick: PropTypes.func
}

export default Main
