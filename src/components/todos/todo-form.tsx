import { useState, type ChangeEvent } from 'react';

type TodoFormProps = {
  addTodo: (todoName: string) => void;
};

export const TodoForm = ({ addTodo }: TodoFormProps) => {
  const [todoName, setTodoName] = useState<string>('');

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTodoName(event.target.value);
  };

  const handleSubmit = () => {
    addTodo(todoName);
  };

  return (
    <div className="input-group">
      <input
        value={todoName}
        onChange={handleInputChange}
        name="todo-text"
        placeholder="What needs to be done?"
      />
      <button onClick={handleSubmit} type="submit">
        Add
      </button>
    </div>
  );
};
