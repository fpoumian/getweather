import React from 'react'
import ReactDOM from 'react-dom'
// import App from './App'
import App from './containers/App'
import Main from './containers/Main'
import './index.css'
import {Router, Route, IndexRoute, browserHistory} from 'react-router'

const router = (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Main}></IndexRoute>
    </Route>
  </Router>
)

ReactDOM.render(
  router,
  document.getElementById('root')
)
