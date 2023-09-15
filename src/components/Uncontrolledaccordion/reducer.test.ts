import {reducer, StateType, TOGGLE_STATE} from "./reducer";

test('reducer should be value to reversed', () => {
  //data
  const startValue: StateType = {collapsed: false}
  //action
  const newState = reducer(startValue, {type: TOGGLE_STATE})
  //expect
  expect(newState.collapsed).toBe(true)
})
test('collapsed should be false', () => {
  const state: StateType = {
    collapsed: true
  }
  const newState = reducer(state, {type: TOGGLE_STATE})
  expect(newState.collapsed).toBe(false)
})
test('collapsed should be true', () => {
  const state: StateType = {
    collapsed: false
  }
  const newState = reducer(state, {type: TOGGLE_STATE})
  expect(newState.collapsed).toBe(true)
})
test('reducer should throw error', () => {
  const state: StateType = {
    collapsed: false
  }
  expect(() => {
    reducer(state, {type: 'FAKE_ACTION'})
  }).toThrowError()
})
