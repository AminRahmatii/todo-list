import {TodoState} from './TodoState';

export enum TypeKeys {
  ADD_TODO = 'ADD_TODO',
  REMOVE_TODO = 'REMOVE_TODO',
}

export type AddTodoAction = {
  type: TypeKeys.ADD_TODO;
  todo: TodoState;
};

export type RemoveTodoAction = {
  type: TypeKeys.REMOVE_TODO;
  index: number;
};

export type TodoActionTypes = AddTodoAction | RemoveTodoAction;

export const addTodoAction = (todo: TodoState) => ({
  type: TypeKeys.ADD_TODO,
  todo,
});
export const removeTodoAction = (index: string) => ({
  type: TypeKeys.REMOVE_TODO,
  index,
});
