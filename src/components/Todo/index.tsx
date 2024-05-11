import {lazy, Suspense} from 'react';
import {TodoInput} from './TodoInput';
import ErrorBoundary from '@Errors';
const TodoData = lazy(() => import('./TodoData'));
import './style.css';

const Todo = () => {
  return (
    <div>
      <h1>Todo list</h1>
      <TodoInput />
      <ErrorBoundary>
        <Suspense fallback={<h2>🌀 Loading...</h2>}>
          <TodoData />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
};

export default Todo;
