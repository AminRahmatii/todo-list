import {useEffect} from 'react';
import {useTodo} from '@hooks/useTodo';
import {getTodoListAPI} from '@services/todo';
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
            {todo.title}
            <button onClick={() => removeTodo(index)}>Delete</button>
          </li>
        ))}
    </ul>
  );
}

export default TodoData;
