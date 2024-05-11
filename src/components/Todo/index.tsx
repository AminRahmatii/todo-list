import {useEffect} from 'react';
import {useTodo} from '@hooks/useTodo';
import {TodoInput} from './TodoInput';
import {getTodoListAPI} from '@services/todo';
import ErrorBoundary from '@Errors';
import './style.css';

const Todo = () => {
  const {todos, removeTodo, addAllTodos} = useTodo();
  const data = todos ?? [];

  useEffect(() => {
    const fetchData = async () => {
      const data = await getTodoListAPI();
      addAllTodos(data);
    };
    fetchData();
  }, [addAllTodos]);

  return (
    <div>
      <h1>Todo list</h1>
      <TodoInput />
      <ErrorBoundary>
        <ul className="list">
          {data &&
            data.length &&
            data.map((todo, index) => (
              <li className="item" key={todo.id}>
                {todo.title}
                <button onClick={() => removeTodo(index)}>Delete</button>
              </li>
            ))}
        </ul>
      </ErrorBoundary>
    </div>
  );
};

export default Todo;
