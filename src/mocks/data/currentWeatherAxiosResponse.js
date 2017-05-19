import currentWeatherData from './currentWeatherData.json'

const response = { 'data': {
  ...currentWeatherData
},
  'status': 200,
  'statusText': 'OK',
  'headers': {
    'content-type': 'application/json; charset=utf-8'
  },
  'config': {
    'transformRequest': {},
    'transformResponse': {},
    'timeout': 0,
    'xsrfCookieName': 'XSRF-TOKEN',
    'xsrfHeaderName': 'X-XSRF-TOKEN',
    'maxContentLength': -1,
    'headers': {
      'Accept': 'application/json, text/plain, */*'
    },
    'method': 'get',
    'url': 'http://api.openweathermap.org/data/2.5/weather?q=El%20Paso%2C%20Texas%2C%20United%20States&units=metric&appid=910eb27da987e3bf8ac02c595204fc86'
  },
  'request': {}
}

export default response
