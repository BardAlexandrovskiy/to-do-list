import {
  CREATE_NEW_TO_DO,
  DELETE_TO_DO,
  CHECK_TO_DO,
  CHECK_ALL_TO_DO,
} from '../actions/index';

const initialState = JSON.parse(localStorage.getItem('todos')) || {
  toDoList: [],
};

export function toDoReducer(state = initialState, action) {
  const { toDoList } = state;
  const { data, type } = action;
  switch (type) {
    case CREATE_NEW_TO_DO:
      return {
        ...state,
        toDoList: toDoList.concat({
          value: data,
          check: false,
          id: Date.now(),
        }),
      };
    case DELETE_TO_DO:
      return {
        ...state,
        toDoList: toDoList.filter(({ id }) => id !== data.id),
      };
    case CHECK_TO_DO:
      return {
        ...state,
        toDoList: toDoList.map((el) => {
          if (el.id === data.id) {
            return { ...el, check: !el.check };
          }
          return el;
        }),
      };
    case CHECK_ALL_TO_DO:
      let check = false;
      toDoList.forEach((el) => {
        if (!el.check) {
          check = true;
        }
      });
      return {
        ...state,
        toDoList: toDoList.map((el) => {
          return { ...el, check: check };
        }),
      };
    default:
      return state;
  }
}
