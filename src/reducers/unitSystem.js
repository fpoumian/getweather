import * as types from 'constants/action-types'

export default function unitSystem (state = 'metric', action) {
  switch (action.type) {
    case types.SWITCH_UNIT_SYSTEM:
      return action.unitSystem
    default:
      return state
  }
}
