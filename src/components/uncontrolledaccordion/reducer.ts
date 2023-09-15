type StateType = {
  collapsed: boolean
}
export const TOGGLE_STATE = 'TOGGLE_STATE'
type ActionType = {
  type: string
}
export const reducer = (state: StateType, action: ActionType): StateType => {
  switch (action.type) {
    case TOGGLE_STATE :
      return {...state, collapsed: !state.collapsed}
    default:
      throw new Error('Bad action type')
  }
}