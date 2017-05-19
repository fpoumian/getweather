import { mapObjectKeys } from '../utils'

describe('mapObjectKeys', () => {
  // Setup
  const obj = {
    key1: '',
    key2: ''
  }

  const mock = jest.fn()

  // Tests
  it('Can call callback with correct set of arguments', () => {
    mapObjectKeys(obj, mock)
    expect(mock).toBeCalledWith('key1', 0, obj)
    expect(mock).toBeCalledWith('key2', 1, obj)
  })
})
