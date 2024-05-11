import {RootState} from '@store/RootState';
import {TodoActionTypes, TypeKeys} from './TodoActions';

const initialState: RootState = {
  todos: [],
};

export function todoReducer(
  state: RootState = initialState,
  action: TodoActionTypes
): RootState {
  switch (action.type) {
    case TypeKeys.ADD_TODO:
      return {...state, todos: state.todos.concat(action.todo)};
    case TypeKeys.ADD_ALL_TODOS:
      return {...state, todos: [...action.todos]};
    case TypeKeys.REMOVE_TODO: {
      const tasksCopy = state.todos.slice();
      tasksCopy.splice(action.index, 1);
      return {...state, todos: tasksCopy};
    }
    default:
      return state;
  }
}
