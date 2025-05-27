import type { Todo } from '../types';

const API_URL = 'https://eli-workshop.vercel.app/api/users/nerv01/todos';

class APIError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'APIError';
  }
}

const handleResponse = async <T>(response: Response): Promise<T> => {
  if (!response.ok) throw new APIError(`API failed ${response.status}`);

  return await response.json();
};

export const todoApi = {
  async fetchTodos(): Promise<Array<Todo>> {
    const response = await fetch(API_URL);
    return handleResponse<Array<Todo>>(response);
  },
  async createTodo(newTodo: string) {
    const body = {
      name: newTodo,
    };
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    return handleResponse<Todo>(response);
  },
  async fetchTodo(todoId: Todo['id']): Promise<Todo> {
    const response = await fetch(`${API_URL}/${todoId}`);
    return handleResponse<Todo>(response);
  },
  async deleteTodo(todoId: Todo['id']) {
    const response = await fetch(`${API_URL}/${todoId}`, {
      method: 'DELETE',
    });

    return handleResponse(response);
  },
  async toggleTodo(
    todoId: Todo['id'],
    isCompleted: Todo['completed'],
  ): Promise<Todo> {
    const body = {
      completed: isCompleted,
    };

    console.log(body);
    const response = await fetch(`${API_URL}/${todoId}`, {
      method: 'PATCH',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    return handleResponse(response);
  },
};
