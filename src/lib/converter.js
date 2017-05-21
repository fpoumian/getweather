import forecastData from 'mocks/data/forecastData.json'
import WeatherService from './WeatherService'
import fs from 'fs'
import timestamp from 'unix-timestamp'

function run () {
  const list = forecastData.list
  let i = 0

  const newList = list.map(item => {
    const dt = timestamp.add(parseInt(item.dt), `+${i}h`)
    i += 3

    return {
      ...item,
      dt
    }
  })

  const promises = list.map(item => {
    return WeatherService.deriveWeatherData(item)
  })

  Promise.all(promises)
    .then(data => {
      const newList = {
        list: data
      }
      const newData = Object.assign({}, forecastData, newList)
      fs.writeFile('../mocks/data/forecastDataAll.json', JSON.stringify(newData, null, 2), (err) => {
        if (err) throw err
        console.log('The file has been saved!')
      })
    })
}

run()
