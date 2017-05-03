import React from 'react'
import ReactDOM from 'react-dom'
import App from './containers/App'
import Home from './components/Home'
import './index.css'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import { Provider } from 'react-redux'
import store, { history } from './store'

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={Home}></IndexRoute>
      </Route>
    </Router>
  </Provider>
)

ReactDOM.render(
  router,
  document.getElementById('root')
)
