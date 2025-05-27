import { Link } from 'react-router';
import { useTodoContext } from '../../hooks/useTodoContext';
import type { Todo } from '../../types';

type TodoItemProps = {
  todo: Todo;
};

export const TodoItem = ({ todo }: TodoItemProps) => {
  const { toggleTodo, deleteTodo } = useTodoContext();
  return (
    <li className={todo.completed ? 'completed' : ''}>
      <span>{todo.name}</span>
      <button onClick={() => deleteTodo(todo.id)}>Delete</button>
      <button className="toggle" onClick={() => toggleTodo(todo)}>
        {todo.completed ? 'Undo' : 'Complete'}
      </button>
      <Link to={`/todos/${todo.id}`} className="link">
        Go to detail
      </Link>
    </li>
  );
};
