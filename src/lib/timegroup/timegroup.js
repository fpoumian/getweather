import _ from 'lodash'
import moment from 'moment'

export const sortByDay = (arr, key) => {
  return _.groupBy(arr, item => {
    if (!item.hasOwnProperty(key)) {
      throw new ReferenceError(`Object ${item} does not have a property named ${key}`)
    }
    let timestamp = item[key]

    if (typeof timestamp !== 'number') {
      throw new TypeError(`${key} property must be a number`)
    }

    // if timestamp is expressed in milliseconds convert it to seconds
    if (timestamp.toString().length === 13) {
      timestamp = timestamp * 0.001
    }
    return moment.unix(timestamp).format('ddd')
  })
}
