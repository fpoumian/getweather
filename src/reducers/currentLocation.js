import * as types from 'constants/action-types'

export default function location (state = {}, action) {
  switch (action.type) {
    case types.SET_CURRENT_LOCATION:
      return action.currentLocation
    default:
      return state
  }
}
