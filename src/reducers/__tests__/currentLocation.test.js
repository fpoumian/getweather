import reducer from '../currentLocation'
import * as types from '../../constants/action-types'

describe('currentLocation reducer', () => {
  // Setup
  const newCurrentLocation1 = {
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

  const newCurrentLocation2 = {
    locality: {
      shortName: 'El Paso',
      longName: 'El Paso'
    },
    country: {
      shortName: 'USA',
      longName: 'United States'
    },
    administrativeAreaLevel1: {
      shortName: 'TX',
      longName: 'Texas'
    }
  }

  // Test
  it('should return the initial state', () => {
    expect(
      reducer(undefined, {})
    ).toEqual({})
  })

  it('should handle SET_LOCATION', () => {
    expect(
      reducer({}, {
        type: types.SET_CURRENT_LOCATION,
        currentLocation: newCurrentLocation1
      })
    ).toEqual(
      newCurrentLocation1
    )

    expect(reducer(newCurrentLocation1, {
      type: types.SET_CURRENT_LOCATION,
      currentLocation: newCurrentLocation2
    })).toEqual(
      newCurrentLocation2
    )
  })
})
