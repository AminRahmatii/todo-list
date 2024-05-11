import {useCallback} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {
  removeTodoAction,
  addTodoAction,
  addAllTodosAction,
} from '../components/Todo/TodoActions';
import {TodoState} from '@components/Todo/TodoState';
import {RootState} from '@store/RootState';

type UseTodoProps = {
  todos: TodoState;
  removeTodo: (index: number) => void;
  addTodo: (todo: TodoState) => void;
  addAllTodos: (todos: RootState) => void;
};

export const useTodo = (): UseTodoProps => {
  const dispatch = useDispatch();

  const todos: TodoState = useSelector((state: RootState) => state.todos.todos);
  const removeTodo = useCallback(
    (index: number) => dispatch(removeTodoAction(index)),
    [dispatch]
  );
  const addTodo = useCallback(
    (todo: TodoState) => dispatch(addTodoAction(todo)),
    [dispatch]
  );
  const addAllTodos = useCallback(
    (todos: RootState) => dispatch(addAllTodosAction(todos)),
    [dispatch]
  );

  return {todos, removeTodo, addTodo, addAllTodos};
};
