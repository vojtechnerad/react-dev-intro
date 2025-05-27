import { useEffect, useState } from 'react';
import type { Todo } from '../types';
import { todoApi } from '../api/todoApi';

export const useTodos = () => {
  const [todos, setTodos] = useState<Array<Todo>>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    setError(null);
    setIsLoading(true);
    try {
      const data = await todoApi.fetchTodos();
      setTodos(data);
    } catch (err) {
      console.error(err);
      setError('failed to load todos');
    } finally {
      setIsLoading(false);
    }
  };

  const addTodo = async (todoName: string) => {
    setError(null);
    setIsLoading(true);
    try {
      const newTodo = await todoApi.createTodo(todoName);
      setTodos((prevTodos) => [...prevTodos, newTodo]);
    } catch (err) {
      console.error(err);
      setError('failed to add todos');
    } finally {
      setIsLoading(false);
    }
  };

  const deleteTodo = async (todoId: number) => {
    setError(null);
    setIsLoading(true);
    try {
      await todoApi.deleteTodo(todoId);
      setTodos(() => todos.filter((todo) => todo.id !== todoId));
    } catch (err) {
      console.error(err);
      setError('failed to delete todo');
    } finally {
      setIsLoading(false);
    }
  };

  const toggleTodo = async (todo: Todo) => {
    setError(null);
    setIsLoading(true);
    try {
      const updatedTodo = await todoApi.toggleTodo(todo.id, !todo.completed);
      setTodos((prevTodos) =>
        prevTodos.map((prevTodo) =>
          prevTodo.id === todo.id ? updatedTodo : prevTodo,
        ),
      );
    } catch (err) {
      console.log(err);
      setError('failed to toggle todo');
    } finally {
      setIsLoading(false);
    }
  };

  return {
    todos,
    isLoading,
    addTodo,
    deleteTodo,
    toggleTodo,
    error,
    refetch: fetchTodos,
  };
};
