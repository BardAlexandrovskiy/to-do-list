export const CHANGE_INPUT = 'CHANGE_INPUT'
export const CREATE_NEW_TO_DO = 'CREATE_NEW_TO_DO'
export const DELETE_TO_DO = 'DELETE_TO_DO'

export function inputChangeValue(value) {
  return {
    type: CHANGE_INPUT,
    data: value,
  }
}

export function createNewToDo(value) {
  return {
    type: CREATE_NEW_TO_DO,
    data: value,
  }
}

export function deleteToDo(id) {
  return {
    type: DELETE_TO_DO,
    data: id,
  }
}
