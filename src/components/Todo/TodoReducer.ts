import {TodoActionTypes, TypeKeys} from './TodoActions';
import {RootState} from '../../store/RootState';

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
    case TypeKeys.REMOVE_TODO: {
      const tasksCopy = state.todos.slice();
      tasksCopy.splice(action.index, 1);
      return {...state, todos: tasksCopy};
    }
    default:
      return state;
  }
}
