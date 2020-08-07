export const CHANGE_INPUT = "CHANGE_INPUT";
export const CREATE_NEW_TO_DO = "CREATE_NEW_TO_DO";
export const DELETE_TO_DO = "DELETE_TO_DO";
export const CHECK_TO_DO = "CHECK_TO_DO";
export const CHECK_ALL_TO_DO = "CHECK_ALL_TO_DO";
export const DELETE_COMPLETED = "DELETE_COMPLETED";

export function inputChangeValue(value) {
  return {
    type: CHANGE_INPUT,
    data: value,
  };
}

export function createNewToDo(value) {
  return {
    type: CREATE_NEW_TO_DO,
    data: value,
  };
}

export function deleteToDo(id) {
  return {
    type: DELETE_TO_DO,
    data: { id },
  };
}

export function checkToDo(id) {
  return {
    type: CHECK_TO_DO,
    data: { id },
  };
}

export function checkAllToDo() {
  return {
    type: CHECK_ALL_TO_DO,
  };
}

export function deleteCompleted() {
  return {
    type: DELETE_COMPLETED,
  };
}
