import { createContext } from 'react';
import type { Todo } from '../types';

type TodosContext = {
  todos: Array<Todo>;
  isLoading: boolean;
  error: string | null;
  addTodo: (todoName: string) => Promise<void>;
  toggleTodo: (todo: Todo) => Promise<void>;
  deleteTodo: (todoId: number) => Promise<void>;
  refetch: () => Promise<void>;
};

export const TodosContext = createContext<TodosContext | undefined>(undefined);
