import * as types from '../constants/action-types'

export const setCurrentLocation = (currentLocation) =>
  ({
    type: types.SET_CURRENT_LOCATION,
    currentLocation
  })
