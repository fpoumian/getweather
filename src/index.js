import React from 'react'
import ReactDOM from 'react-dom'
import App from './containers/App'
import Home from './components/Home'
import About from './components/About'
import ResultsContainer from './containers/ResultsContainer'
import './index.css'
import { Router, Route, IndexRoute } from 'react-router'

import { Provider } from 'react-redux'
import store, { history } from './store'

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={Home}></IndexRoute>
        <Route component={ResultsContainer} path="results"></Route>
        <Route component={About} path="about"></Route>
      </Route>
    </Router>
  </Provider>
)

ReactDOM.render(
  router,
  document.getElementById('root')
)
