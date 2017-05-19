/* eslint-disable */

export const getPlaceIdsFromPredictions = (predictions) =>
  predictions.map(place => place.place_id)

export const getLocationPredictions = (input, autocompleteService) => {
  return new Promise((resolve, reject) => {

    if (typeof input === 'undefined' || !input) {
      reject('Search query value not specified')
    }

    autocompleteService.getPlacePredictions({input: input, types:['(cities)']}, (predictions, status) => {
      // TODO: Handle all Error Status codes (see https://developers.google.com/maps/documentation/javascript/reference#PlacesServiceStatus)
      switch (status) {
        case 'OK':
          resolve(predictions)
        case 'ZERO_RESULTS':
          reject('No result was found for this request')
        case 'INVALID_REQUEST':
          reject('The request to autoCompleteService was invalid')
      }

    })
  })
}

export const filterNonLocalities = (predictions) => {
  return new Promise((resolve, reject) => {
    const filtered = predictions.filter(result => result.types.includes('locality'))
    resolve(filtered)
  })
}

export const getPlaceDetails = (placeId, placeDetailsService) => {
  return new Promise((resolve, reject) => {

    //TODO: better error handling
    if (typeof placeId === 'undefined' || !placeId || placeId === '') {
      reject('Place ID parameter not specified')
    }

    // TODO: Handle all Error Status codes (see https://developers.google.com/maps/documentation/javascript/reference#PlacesServiceStatus)
    placeDetailsService.getDetails({placeId: placeId}, (results, status) => {
      switch (status) {
        case 'OK':
          resolve(results)
        case 'ZERO_RESULTS':
          reject('No result was found for this request')
        case 'INVALID_REQUEST':
          reject('The request to PlacesService was invalid')
      }
    })
  })
}

export const getPlaceAddressComponents = (placeDetails) =>
  // TODO: Error handling
  placeDetails.address_components


export const getAddressComponentScope = (addressComponents, scope) => {
  // TODO: Error handling
  const {short_name, long_name} = addressComponents.filter((component) => component.types.includes(scope)).shift()
  return {
    shortName: short_name,
    longName: long_name
  }
}

export const generateLocationData = (placeDetails) => {
  const addressComponents = getPlaceAddressComponents(placeDetails)

  return {
    country: getAddressComponentScope(addressComponents, 'country'),
    administrativeAreaLevel1: getAddressComponentScope(addressComponents, 'administrative_area_level_1'),
    locality: getAddressComponentScope(addressComponents, 'locality')
  }

}

export const normalizeCountryShortName = (countryShortName) =>
  countryShortName.toLowerCase()


export const getPlacesData = (places, placeDetailsService) => {
  const promises = places.map(placeId =>
    getPlaceDetails(placeId, placeDetailsService)
      .then(generateLocationData)
  )
    return Promise.all(promises)
}

export const formatLocationData = ({ locality, country, administrativeAreaLevel1 }) =>
 `${locality.longName}, ${administrativeAreaLevel1.longName}, ${country.longName}`


export const getLocationLongNames = ({ locality, country, administrativeAreaLevel1 }) =>
  ({
    locality: locality.longName,
    country: country.longName,
    administrativeAreaLevel1: administrativeAreaLevel1.longName
  })
