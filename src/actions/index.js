import * as types from 'constants/action-types'

export const setCurrentLocation = (currentLocation) =>
  ({
    type: types.SET_CURRENT_LOCATION,
    currentLocation
  })

export const switchUnitSystem = (unitSystem) =>
  ({
    type: types.SWITCH_UNIT_SYSTEM,
    unitSystem
  })
