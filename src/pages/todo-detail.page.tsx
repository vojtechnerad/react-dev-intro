import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { todoApi } from '../api/todoApi';
import type { Todo } from '../types';
import { useQuery } from '@tanstack/react-query';

const TodoDetailPage = () => {
  const params = useParams();
  const {
    data: todo,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['todo', params.id],
    queryFn: () => {
      return todoApi.fetchTodo(+params.id);
    },
  });

  if (isError) {
    return <div>Error</div>;
  }

  return (
    <div>
      {isLoading && <span>Loading {params.id}...</span>}
      {todo && (
        <div>
          <span>{JSON.stringify(todo)}</span>
        </div>
      )}
    </div>
  );
};

export default TodoDetailPage;
