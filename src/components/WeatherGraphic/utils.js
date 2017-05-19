import ClearSkyDay from './icons/day.svg'
import ClearSkyNight from './icons/night.svg'
import FewCloudsDay from './icons/cloudy-day-1.svg'
import FewCloudsNight from './icons/cloudy-night-1.svg'
import ScatteredClouds from './icons/cloudy.svg'
import ShowerRain from './icons/rainy-6.svg'
import RainDay from './icons/rainy-2.svg'
import Thunderstorm from './icons/thunder.svg'
import Snow from './icons/snowy-6.svg'

export const assignWeatherIcon = weather => {
  const {icon} = weather[0]

  switch (icon) {
    case '01d':
      return ClearSkyDay
    case '01n':
      return ClearSkyNight
    case '02d':
      return FewCloudsDay
    case '02n':
      return FewCloudsNight
    case '03d':
    case '03n':
    case '04d':
    case '04n':
      return ScatteredClouds
    case '09d':
    case '09n':
      return ShowerRain
    case '10d':
      return RainDay
    case '10n':
      return ShowerRain
    case '11d':
    case '11n':
      return Thunderstorm
    case '13d':
    case '13n':
      return Snow
    case '50d':
    case '50n':
      return ScatteredClouds
  }
}
