import * as actions from '../index'
import * as types from '../../constants/action-types'

describe('actions', () => {
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
