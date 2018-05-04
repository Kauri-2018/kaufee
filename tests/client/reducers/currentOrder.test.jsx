import reducer from '../../../client/reducers/currentOrder'

test('reducer returns new state', () => {
  const newCurrentOrder = {id: 1, items: []}
  const action = {
    type: 'SHOW_CURRENT_ORDER',
    currentOrder: newCurrentOrder
  }
  const existingCurrentOrder = {id: 0, items: []}
  const actual = reducer(existingCurrentOrder, action)
  expect(actual).toEqual(newCurrentOrder)
})
