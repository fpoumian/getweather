import * as actions from '../index'
import * as types from '../../constants/action-types'

describe('setCurrentLocation', () => {
  it('should create an action to set current location', () => {
    const currentLocation = {
      locality: {
        shortName: 'Toronto',
        longName: 'Toronto'
      },
      country: {
        shortName: 'CA',
        longName: 'Canada'
      },
      administrativeAreaLevel1: {
        shortName: 'ON',
        longName: 'Ontario'
      }
    }

    const expectedAction = {
      type: types.SET_CURRENT_LOCATION,
      currentLocation
    }

    expect(actions.setCurrentLocation(currentLocation)).toEqual(expectedAction)
  })
})

describe('switchUnitSystem', () => {
  it('should create an action to switch unit system to imperial', () => {
    const unitSystem = 'imperial'

    const expectedAction = {
      type: types.SWITCH_UNIT_SYSTEM,
      unitSystem
    }

    expect(actions.switchUnitSystem(unitSystem)).toEqual(expectedAction)
  })
})
