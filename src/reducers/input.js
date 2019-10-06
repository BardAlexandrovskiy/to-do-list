import { CHANGE_INPUT } from '../actions/index'

const initialState = {
  value: '',
}

export function inputReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_INPUT:
      return { ...state, value: action.data }
    default:
      return state
  }
}
