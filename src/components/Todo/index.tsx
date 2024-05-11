import ErrorBoundary from '@Errors';
import {useTodo} from '@hooks/useTodo';
import {TodoInput} from './TodoInput';
import {getTodoListAPI} from '@services/todo';
import './style.css';

export async function Todo() {
  const {todos, removeTodo} = useTodo();
  const data = await getTodoListAPI();
  return (
    <div>
      <h1>Todo list</h1>
      <TodoInput />
      <ErrorBoundary>
        <ul className="list">
          {data.map((todo) => (
            <li className="item" key={todo.id}>
              {todo.title}
              <button onClick={() => removeTodo(todo.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </ErrorBoundary>
    </div>
  );
}
