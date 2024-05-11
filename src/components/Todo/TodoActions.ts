import {RootState} from '@store/RootState';
import {TodoState} from './TodoState';

export enum TypeKeys {
  ADD_TODO = 'ADD_TODO',
  ADD_ALL_TODOS = 'ADD_ALL_TODOS',
  REMOVE_TODO = 'REMOVE_TODO',
}

export type AddTodoAction = {
  type: TypeKeys.ADD_TODO;
  todo: TodoState;
};
export type AddALLTodoAction = {
  type: TypeKeys.ADD_ALL_TODOS;
  todos: RootState;
};

export type RemoveTodoAction = {
  type: TypeKeys.REMOVE_TODO;
  index: number;
};

export type TodoActionTypes =
  | AddTodoAction
  | RemoveTodoAction
  | AddALLTodoAction;

export const addTodoAction = (todo: TodoState) => ({
  type: TypeKeys.ADD_TODO,
  todo,
});
export const addAllTodosAction = (todos: RootState) => ({
  type: TypeKeys.ADD_ALL_TODOS,
  todos,
});
export const removeTodoAction = (index: number) => ({
  type: TypeKeys.REMOVE_TODO,
  index,
});
