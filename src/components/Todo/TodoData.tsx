import {useEffect} from 'react';
import {useTodo} from '@hooks/useTodo';
import {getTodoListAPI} from '@services/todo';
import './style.css';

function TodoData() {
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
    <ul className="list">
      {data &&
        data.length &&
        data.map((todo, index) => (
          <li className="item" key={todo.id}>
            <span className="title">{todo.title}</span>
            <span className="description">{todo.description}</span>
            <span className={todo.completed ? 'completed' : 'not-completed'}>
              {todo.completed ? 'completed' : 'not completed'}
            </span>
            <button onClick={() => removeTodo(index)}>Delete</button>
          </li>
        ))}
    </ul>
  );
}

export default TodoData;
