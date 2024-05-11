import {todoReducer} from '@components/Todo/TodoReducer';
import {legacy_createStore as createStore, combineReducers} from 'redux';

const rootReducer = combineReducers({
  todos: todoReducer,
});

export function configureStore() {
  return createStore(rootReducer);
}
