export const mapObjectKeys = (obj, callback, thisArg = undefined) => {
  return Object.keys(obj).map((key, index) => {
    return callback.call(thisArg, key, index, obj)
  })
}
