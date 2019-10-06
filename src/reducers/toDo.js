import { CREATE_NEW_TO_DO, DELETE_TO_DO } from '../actions/index'

const initialState = JSON.parse(localStorage.getItem('todos')) || {
  toDoList: [],
}

export function toDoReducer(state = initialState, action) {
  const { toDoList } = state
  const { data, type } = action
  console.log(`action: ${action.data}`)
  switch (type) {
    case CREATE_NEW_TO_DO:
      return {
        ...state,
        toDoList: toDoList.concat({
          value: data,
          check: false,
          id: Date.now(),
        }),
      }
    case DELETE_TO_DO:
      return {
        ...state,
        toDoList: toDoList.filter(({ id }) => {
          console.log(`element: ${id}`)
          console.log(`data: ${data.id}`)
          console
          .log()
          return id !== data.id
        }),
      }
    default:
      return state
  }
}
