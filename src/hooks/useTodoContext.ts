import { useContext } from 'react';
import { TodosContext } from '../context/todo.context';

export const useTodoContext = () => {
  const context = useContext(TodosContext);

  if (context === undefined) throw new Error('nejakej error');
  return context;
};
