/* eslint-disable react-hooks/exhaustive-deps */
import React, {useCallback, useId, useState} from 'react';
import {TodoState} from './TodoState';
import {useTodo} from '@hooks/useTodo';

export const TodoInput: React.FC = () => {
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [completed, setCompleted] = useState<boolean>(false);
  const {addTodo} = useTodo();
  const id = useId();
  const titleHandler = useCallback(
    (e: any) => setTitle(e.target.value),
    [setTitle]
  );

  const descriptionHandler = useCallback(
    (e: any) => setDescription(e.target.value),
    [setDescription]
  );
  const completeHandler = useCallback(
    (e: any) => setCompleted(e.target.checked),
    []
  );

  const addNewTodo = () => {
    const newTodo: TodoState = {id, title, description, completed};
    addTodo(newTodo);
    setTitle('');
    setDescription('');
    setCompleted(false);
  };

  return (
    <div style={{marginBottom: '30px'}}>
      <input type="text" value={title} onChange={titleHandler} />
      <input type="text" value={description} onChange={descriptionHandler} />
      <input
        type="checkbox"
        id="completed"
        name="completed"
        checked={completed}
        onClick={completeHandler}
      />
      <label htmlFor="completed">completed</label>
      <button onClick={addNewTodo}>add</button>
    </div>
  );
};
