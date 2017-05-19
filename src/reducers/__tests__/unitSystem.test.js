import reducer from '../unitSystem'
import * as types from '../../constants/action-types'

describe('unitSystem reducer', () => {
  // Setup

  // Test
  it('Should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual('metric')
  })

  it('Should return the imperial as the new state', () => {
    expect(reducer('metric', {
      type: types.SWITCH_UNIT_SYSTEM,
      unitSystem: 'imperial'
    })).toEqual('imperial')
  })

  it('Should return the metric as the new state', () => {
    expect(reducer('imperial', {
      type: types.SWITCH_UNIT_SYSTEM,
      unitSystem: 'metric'
    })).toEqual('metric')
  })
})
