import { TodoForm } from './todo-form';
import { TodoItem } from './todo-list';
import { Spinner } from '../spinner';
import { ErrorMessage } from '../error';
import { useTodoContext } from '../../hooks/useTodoContext';

export const TodosSection = () => {
  const { addTodo, error, todos, isLoading, refetch } = useTodoContext();

  return (
    <main>
      {error && <ErrorMessage message={error} onDissmiss={refetch} />}
      <TodoForm addTodo={addTodo} />
      <div className="todo-container">
        <ul id="todo-list" className={isLoading ? 'isLoading' : ''}>
          {todos.map((todo) => {
            return <TodoItem key={todo.id} todo={todo} />;
          })}
        </ul>
        {isLoading && todos.length === 0 && <Spinner />}
      </div>
    </main>
  );
};
