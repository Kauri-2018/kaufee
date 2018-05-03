import {showCurrentOrder} from '../../../client/actions/index'

test('showCurrentOrder returns correct action.type', () => {
  const expected = 'SHOW_CURRENT_ORDER'
  const actual = showCurrentOrder()
  expect(actual.type).toBe(expected)
})

test('showCurrentOrder returns correct action', () => {
  const expected = {
    type: 'SHOW_CURRENT_ORDER'
  }
  const actual = showCurrentOrder()
  expect(actual).toEqual(expected)
})

test('showCurrentOrder returns currentOrder', () => {
  const currentOrder = {order: 'order'}
  const expected = {
    type: 'SHOW_CURRENT_ORDER',
    currentOrder
  }
  const actual = showCurrentOrder(currentOrder)
  expect(actual).toEqual(expected)
})
