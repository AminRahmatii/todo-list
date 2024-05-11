import {TodoState} from '../components/Todo/TodoState';
import myAPI from './api';
export async function getTodoListAPI() {
  const response = await myAPI.get('/');
  return response.data;
}
export async function updateTodoItemAPI(todoItem: TodoState) {
  const id = todoItem.id;
  const response = await myAPI.put(`/${id}`, todoItem);
  return response.data;
}
export async function createTodoItemAPI(todoItem: TodoState) {
  const response = await myAPI.post(`/`, todoItem);
  return response.data;
}
