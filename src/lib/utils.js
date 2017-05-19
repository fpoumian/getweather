const computeFloatOperation = (value, formula) => parseFloat(formula(value).toFixed(2))

export const convertFahrenheitToCelsius = value => computeFloatOperation(value, value => (value - 32) / 1.8)
export const convertCelsiusToFahrenheit = value => computeFloatOperation(value, value => (value * 1.8) + 32)
export const convertMsToMph = value => computeFloatOperation(value, value => value * 2.236936)
export const convertMphToMs = value => computeFloatOperation(value, value => value * 0.4470400)

export const deriveFromObj = (initialObj, directives) => {
  const initial = {}
  initial[initialObj.key] = initialObj.value

  const derivates = directives.map(directive => {
    const derivate = {}
    derivate[directive.key] = directive.callback(initial[initialObj.key])
    return derivate
  })

  return {
    ...initial,
    ...derivates.shift()
  }
}

export const deriveFromObjAsync = (initialObj, directives) => {
  return new Promise((resolve, reject) => {
    const initial = {}
    initial[initialObj.key] = initialObj.value

    const derivates = directives.map(directive => {
      const derivate = {}
      derivate[directive.key] = directive.callback(initial[initialObj.key])
      return derivate
    })

    resolve({
      ...initial,
      ...derivates.shift()
    })
  })
}

export const deriveValueswithKeys = (main, keys, directives) => {
  const derived = {}

  keys.forEach(key => {
    if (main.hasOwnProperty(key)) {
      derived[key] = deriveFromObj({key: 'metric', value: main[key]}, directives)
    }
  })

  return {
    ...main,
    ...derived
  }
}

export const deriveTemperature = (main, directives) =>
  deriveValueswithKeys(main, ['temp', 'temp_min', 'temp_max'], directives)

export const deriveWindSpeed = (wind, directives) =>
  deriveValueswithKeys(wind, ['speed'], directives)
