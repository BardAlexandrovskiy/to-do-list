import { combineReducers } from 'redux';
import { inputReducer } from './input';
import { toDoReducer } from './toDo';

export const rootReducer = combineReducers({
  input: inputReducer,
  toDo: toDoReducer,
});
