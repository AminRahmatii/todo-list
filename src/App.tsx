import Todo from '@components/Todo';
import ErrorBoundary from '@Errors';

const App = () => {
  return (
    <ErrorBoundary>
      <Todo />
    </ErrorBoundary>
  );
};
export default App;
