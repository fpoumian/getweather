import Place from 'lib/Place'
import { isEqual } from 'lodash'

export const getHashSubstring = hash => hash.substring(1)
export const validateUnitSystemHash = hash => ['#metric', '#imperial'].includes(hash)

export const getUnitSystemFromRequest = (hash, placeQuery) => {
  if (validateUnitSystemHash(hash)) {
    return getHashSubstring(hash)
  } else {
    if (typeof placeQuery === 'undefined') return 'metric'
    if (placeQuery.hasOwnProperty('country')) {
      return placeQuery.country === 'United States' ? 'imperial' : 'metric'
    } else {
      return 'metric'
    }
  }
}

export const validateLocationQuery = ({query}) => {
  const queryArgs = Object.keys(query)

  if (queryArgs.length !== 3) {
    throw new Error('Insufficient number of arguments in request.')
  }

  if (!isEqual(queryArgs.sort(), ['aal1', 'country', 'locality'].sort())) {
    throw new Error('Invalid arguments in request.')
  }

  const errors = queryArgs.filter(key => {
    return typeof query[key] === 'undefined' || query[key] === ''
  })
  return errors.length === 0
}

export const getCurrentWeatherForPlace = (weatherService, placeQuery, options) => {
  const place = new Place(placeQuery).toString()
  // returns a Promise
  return weatherService.getCurrentWeather(place, options)
}

export const getForecastForPlace = (weatherService, placeQuery, options) => {
  const place = new Place(placeQuery).toString()
  // returns a Promise
  return weatherService.getForecast(place, options)
}

export const getCurrentWeatherAndForecastForPlace = (weatherService, placeQuery, options) => {
  const place = new Place(placeQuery).toString()
  const currentQueryPromise = getCurrentWeatherForPlace(weatherService, placeQuery, options)
  const forecastQueryPromise = getForecastForPlace(weatherService, placeQuery, options)
  return Promise.all([currentQueryPromise, forecastQueryPromise])
    .then(responses => ({
      query: {
        place,
        unitSystem: options.unitSystem
      },
      results: {
        current: {
          status: responses[0].status,
          data: responses[0].data
        },
        forecast: {
          status: responses[1].status,
          data: responses[1].data
        }
      }
    }))
}
