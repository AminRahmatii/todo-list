import {useCallback} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {RootState} from '../store/RootState';
import {TodoState} from '../components/Todo/TodoState';
import {removeTodoAction, addTodoAction} from '../components/Todo/TodoActions';

type UseTodoProps = {
  todos: TodoState[];
  removeTodo: (id: string) => void;
  addTodo: (todo: TodoState) => void;
};

export const useTodo = (): UseTodoProps => {
  const dispatch = useDispatch();

  const todos: TodoState[] = useSelector((state: RootState) => state.todos);
  const removeTodo = useCallback(
    (id: string) => dispatch(removeTodoAction(id)),
    [dispatch]
  );
  const addTodo = useCallback(
    (todo: TodoState) => dispatch(addTodoAction(todo)),
    [dispatch]
  );

  return {todos, removeTodo, addTodo};
};
