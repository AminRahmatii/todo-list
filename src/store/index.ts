import {legacy_createStore as createStore, combineReducers} from 'redux';
import {todoReducer} from '../components/Todo/TodoReducer';

const rootReducer = combineReducers({
  todos: todoReducer,
});

export function configureStore() {
  return createStore(rootReducer);
}
