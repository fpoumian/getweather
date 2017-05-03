import {
  getPlaceIdsFromPredictions,
  getLocationPredictions,
  getPlacesData,
  getPlaceDetails,
  getPlaceAddressComponents,
  getAddressComponentScope,
  generateLocationData,
  formatLocationData,
  filterNonLocalities
} from '../utils'
import predictions from '../mocks/predictions'
import predictionsNonLocality from '../mocks/preditions-no-locality'
import placeDetail from '../mocks/placeDetail'
import addressComponents from '../mocks/addressComponents'
import finalLocationData from '../mocks/finalPredictionsData'

describe('test getPlaceIdsFromPrediction function', () => {
  it('returns an array', () => {
    expect(getPlaceIdsFromPredictions(predictions)).toBeInstanceOf(Array)
  })

  it('returns array with 2 items', () => {
    expect(getPlaceIdsFromPredictions(predictions).length).toEqual(2)
  })

  it('returns correct PlaceIds', () => {
    expect(getPlaceIdsFromPredictions(predictions)).toContain('ChIJpTvG15DL1IkRd8S0KlBVNTI')
    expect(getPlaceIdsFromPredictions(predictions)).toContain('ChIJJb4YZBJtiEcRv3ec1gP4A4k')
  })
})

describe('test filterNonLocalities function', () => {
  // Test
  it('should fiter prediction results that do not have a locality specified in results data', () => {
    expect(predictionsNonLocality).toHaveLength(5)
    filterNonLocalities(predictionsNonLocality).then((filteredResults) => {
      expect(filteredResults).toHaveLength(4)
    })
  })
})

describe('test getLocationPredictions function', () => {
  // Setup
  const getPlacePredictionsMock = jest.fn()
    // 1
    .mockImplementationOnce((request, callback) => {
      callback(predictions, 'OK')
    })
    // 2
    .mockImplementationOnce((request, callback) => {
      callback(null, 'ZERO_RESULTS')
    })
    // 3
    .mockImplementationOnce((request, callback) => {
      callback(null, 'INVALID_REQUEST')
    })
    // 4
    .mockImplementation((request, callback) => {
      callback(predictions, 'OK')
    })

  const autoCompleteService = {
    getPlacePredictions: getPlacePredictionsMock
  }

  it('1: should return predictions array', () => {
    return getLocationPredictions('Tor', autoCompleteService).then(result => {
      expect(result).toEqual(predictions)
    })
  })

  it('2: should reject if callback has ZERO_RESULTS status code', () => {
    return getLocationPredictions('Tor', autoCompleteService).catch(error => {
      expect(error).toContain('No result was found for this request')
    })
  })

  it('3: should reject if callback has INVALID_REQUEST status code', () => {
    return getLocationPredictions('Tor', autoCompleteService).catch(error => {
      expect(error).toContain('The request to autoCompleteService was invalid')
    })
  })

  it('4: should reject if input is empty', () => {
    return getLocationPredictions('', autoCompleteService).catch(error => {
      expect(error).toContain('Search query value not specified')
    })
  })

  test('5: mock callback function should be called at least once', () => {
    return getLocationPredictions('Tor', autoCompleteService).then(result => {
      expect(getPlacePredictionsMock).toBeCalled()
    })
  })
})

describe('test getPlaceDetails function', () => {
  // Setup
  const getDetailsMock = jest.fn()
    // 1
    .mockImplementationOnce((request, callback) => {
      callback(placeDetail, 'OK')
    })
    // 2
    .mockImplementationOnce((request, callback) => {
      callback(placeDetail, 'OK')
    })
    // 3
    .mockImplementationOnce((request, callback) => {
      callback({}, 'ZERO_RESULTS')
    })

  // TODO: Add more mock implementations for other error status responses

  const placeDetailService = {
    getDetails: getDetailsMock
  }

// Tests
  it('1: should resolve with Toronto place details', () => {
    return getPlaceDetails('ChIJpTvG15DL1IkRd8S0KlBVNTI', placeDetailService).then(results => {
      expect(results).toEqual(placeDetail)
    })
  })

  it('2: should reject if parameter placeId is empty', () => {
    // return expect(getPlaceDetails('', placeDetailService)).toThrow()
    return getPlaceDetails('', placeDetailService).catch(error => {
      expect(error).toEqual('Place ID parameter not specified')
    })
  })

  it('3: should reject if service returns no result', () => {
    return getPlaceDetails('ChIJpTvG15DL1IkRd8S0KlBVNTI', placeDetailService).catch(error => {
      expect(error).toEqual('No result was found for this request')
    })
  })
})

describe('test getPlaceAddressComponents function', () => {
  // Test
  it('should return addressComponents from placeDetail results', () => {
    expect(getPlaceAddressComponents(placeDetail)).toEqual(addressComponents)
  })
})

describe('test getAddressComponentScope function', () => {
  // Test
  it('should return correct component scope data for locality', () => {
    expect(getAddressComponentScope(addressComponents, 'locality')).toEqual({
      longName: 'Toronto',
      shortName: 'Toronto'
    })
  })

  it('should return correct component scope data for admin level 1', () => {
    expect(getAddressComponentScope(addressComponents, 'administrative_area_level_1')).toEqual({
      longName: 'Ontario',
      shortName: 'ON'
    })
  })

  it('should return correct component scope data for country', () => {
    expect(getAddressComponentScope(addressComponents, 'country')).toEqual({
      longName: 'Canada',
      shortName: 'CA'
    })
  })
})

describe('test generateLocationData function', () => {
  // Test
  it('should return an object with city, state and country data', () => {
    expect(generateLocationData(placeDetail)).toEqual(
      {
        locality: {
          longName: 'Toronto',
          shortName: 'Toronto'
        },
        country: {
          longName: 'Canada',
          shortName: 'CA'
        },
        administrativeAreaLevel1: {
          longName: 'Ontario',
          shortName: 'ON'
        }
      }
    )
  })
})

describe('test getPlacesData function', () => {
  // Setup
  const places = ['ChIJpTvG15DL1IkRd8S0KlBVNTI']

  const getDetailsMock = jest.fn()
  // 1
    .mockImplementation((request, callback) => {
      callback(placeDetail, 'OK')
    })

  const placeDetailService = {
    getDetails: getDetailsMock
  }

  // Test
  it('should return an array of 1 place details', () => {
    return getPlacesData(places, placeDetailService).then(locationData => {
      expect(locationData).toEqual(finalLocationData)
    })
  })
})

describe('test formatLocationData function', () => {
  // Setup
  const rawLocationData = {
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

  // Test
  it('should return a correctly formated string', () => {
    expect(formatLocationData(rawLocationData)).toEqual('Toronto, Ontario, Canada')
  })
})
