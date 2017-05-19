import * as utils from '../utils'
import predictions from '../mocks/predictions'
import predictionsNonLocality from '../mocks/preditions-no-locality'
import placeDetail from '../mocks/placeDetail'
import addressComponents from '../mocks/addressComponents'
import finalLocationData from '../mocks/finalPredictionsData'

describe('getPlaceIdsFromPrediction', () => {
  it('returns an array', () => {
    expect(utils.getPlaceIdsFromPredictions(predictions)).toBeInstanceOf(Array)
  })

  it('returns array with 2 items', () => {
    expect(utils.getPlaceIdsFromPredictions(predictions).length).toEqual(2)
  })

  it('returns correct PlaceIds', () => {
    expect(utils.getPlaceIdsFromPredictions(predictions)).toContain('ChIJpTvG15DL1IkRd8S0KlBVNTI')
    expect(utils.getPlaceIdsFromPredictions(predictions)).toContain('ChIJJb4YZBJtiEcRv3ec1gP4A4k')
  })
})

describe('filterNonLocalities', () => {
  // Test
  it('should fiter prediction results that do not have a locality specified in results data', () => {
    expect.assertions(2)
    expect(predictionsNonLocality).toHaveLength(5)
    return utils.filterNonLocalities(predictionsNonLocality).then(filteredResults => {
      expect(filteredResults).toHaveLength(4)
    })
  })
})

describe('getPlacePredictions', () => {
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
    expect.assertions(1)
    return utils.getPlacePredictions('Tor', autoCompleteService).then(result => {
      expect(result).toEqual(predictions)
    })
  })

  it('2: should reject if callback has ZERO_RESULTS status code', () => {
    expect.assertions(1)
    return utils.getPlacePredictions('Tor', autoCompleteService).catch(error => {
      expect(error).toContain('No result was found for this request')
    })
  })

  it('3: should reject if callback has INVALID_REQUEST status code', () => {
    expect.assertions(1)
    return utils.getPlacePredictions('Tor', autoCompleteService).catch(error => {
      expect(error).toContain('The request to autoCompleteService was invalid')
    })
  })

  it('4: should reject if input is empty', () => {
    expect.assertions(1)
    return utils.getPlacePredictions('', autoCompleteService).catch(error => {
      expect(error).toContain('Search query value not specified')
    })
  })

  test('5: mock callback function should be called at least once', () => {
    expect.assertions(1)
    return utils.getPlacePredictions('Tor', autoCompleteService).then(result => {
      expect(getPlacePredictionsMock).toBeCalled()
    })
  })
})

describe('getPlaceDetails', () => {
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
    expect.assertions(1)
    return utils.getPlaceDetails('ChIJpTvG15DL1IkRd8S0KlBVNTI', placeDetailService).then(results => {
      expect(results).toEqual(placeDetail)
    })
  })

  it('2: should reject if parameter placeId is empty', () => {
    expect.assertions(1)
    return utils.getPlaceDetails('', placeDetailService).catch(error => {
      expect(error).toEqual('Place ID parameter not specified')
    })
  })

  it('3: should reject if service returns no result', () => {
    expect.assertions(1)
    return utils.getPlaceDetails('ChIJpTvG15DL1IkRd8S0KlBVNTI', placeDetailService).catch(error => {
      expect(error).toEqual('No result was found for this request')
    })
  })
})

describe('getPlaceAddressComponents', () => {
  // Test
  it('should return addressComponents from placeDetail results', () => {
    expect.assertions(1)
    expect(utils.getPlaceAddressComponents(placeDetail)).toEqual(addressComponents)
  })
})

describe('getAddressComponentScope', () => {
  // Test
  it('should return correct component scope data for locality', () => {
    expect(utils.getAddressComponentScope(addressComponents, 'locality')).toEqual({
      longName: 'Toronto',
      shortName: 'Toronto'
    })
  })

  it('should return correct component scope data for admin level 1', () => {
    expect(utils.getAddressComponentScope(addressComponents, 'administrative_area_level_1')).toEqual({
      longName: 'Ontario',
      shortName: 'ON'
    })
  })

  it('should return correct component scope data for country', () => {
    expect(utils.getAddressComponentScope(addressComponents, 'country')).toEqual({
      longName: 'Canada',
      shortName: 'CA'
    })
  })
})

describe('generatePlaceData', () => {
  // Test
  it('should return an object with city, state and country data', () => {
    expect(utils.generatePlaceData(placeDetail)).toEqual(
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

describe('getPlacesData', () => {
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
    expect.assertions(1)
    return utils.getPlacesData(places, placeDetailService).then(locationData => {
      expect(locationData).toEqual(finalLocationData)
    })
  })
})

describe('formatPlaceData', () => {
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
    expect(utils.formatPlaceData(rawLocationData)).toEqual('Toronto, Ontario, Canada')
  })
})

describe('getLocationsLongNames', () => {
  it('should return the long names given a raw location data object', () => {
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
    expect(utils.getPlaceLongNames(rawLocationData)).toEqual({
      locality: 'Toronto',
      country: 'Canada',
      administrativeAreaLevel1: 'Ontario'
    })
  })
})
