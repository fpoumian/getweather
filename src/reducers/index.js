import {combineReducers} from 'redux'
import {routerReducer} from 'react-router-redux'

import currentLocation from './currentLocation'

const rootReducer = combineReducers({currentLocation, routing: routerReducer})

export default rootReducer
