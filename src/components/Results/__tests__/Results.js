import React from 'react'
import { shallow } from 'enzyme'
import Results from '../index'

import CurrentWeather from '../../../components/CurrentWeather/index'
import Forecast from '../../../components/Forecast/index'

const props = {
  isLoading: false,
  results: {
    current: {
      data: {
        main: {
          temp: {}
        }
      }
    },
    forecast: {
      data: {
      }
    }
  }
}

describe('<Results/>', () => {
  it('renders without crashing', () => {
    shallow(<Results {...props} />)
  })

  const wrapper = shallow(<Results {...props} />)

  // it('renders one <CurrentWeather /> component', () => {
  //   console.log(wrapper.state('isLoading'))
  //   wrapper.setState({
  //     isLoading: false,
  //     query: {},
  //     results: {
  //       current: {
  //         data: {}
  //       }
  //     }
  //   })
  //   console.log(wrapper.state('isLoading'))
  //   expect(wrapper.find(CurrentWeather)).toHaveLength(1)
  // })
  //
  // it('renders one <Forecast /> component', () => {
  //   expect(wrapper.find(Forecast)).toHaveLength(1)
  // })
})
