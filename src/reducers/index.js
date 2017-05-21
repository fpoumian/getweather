import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import currentLocation from './currentLocation'
import unitSystem from './unitSystem'

const rootReducer = combineReducers({currentLocation, unitSystem, routing: routerReducer})

export default rootReducer
