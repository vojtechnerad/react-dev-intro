import { BrowserRouter, Route, Routes } from 'react-router';
import { TodoProvider } from './providers/todo.provider';
import { Layout } from './components/layout';
import { lazy, Suspense } from 'react';
import { Spinner } from './components/spinner';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const TodoListPage = lazy(() => import('./pages/todo-list.page'));
const TodoDetailPage = lazy(() => import('./pages/todo-detail.page'));

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Layout>
        <TodoProvider>
          <BrowserRouter>
            <Routes>
              <Route
                path="/"
                element={
                  <Suspense fallback={<Spinner />}>
                    <TodoListPage />
                  </Suspense>
                }
              />
              <Route
                path="/todos/:id"
                element={
                  <Suspense fallback={<Spinner />}>
                    <TodoDetailPage />
                  </Suspense>
                }
              />
              <Route path="*" element={<div>nenalezeno</div>} />
            </Routes>
          </BrowserRouter>
        </TodoProvider>
      </Layout>
    </QueryClientProvider>
  );
}

export default App;
