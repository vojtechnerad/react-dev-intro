import type { ReactNode } from 'react';
import { TodosContext } from '../context/todo.context';
import { useTodos } from '../hooks/useTodos';

type Props = {
  children: ReactNode;
};

export const TodoProvider = ({ children }: Props) => {
  const todoState = useTodos();

  return (
    <TodosContext.Provider value={todoState}>{children}</TodosContext.Provider>
  );
};
