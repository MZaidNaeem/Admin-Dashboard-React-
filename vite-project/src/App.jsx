
import React, { createContext } from "react";
import './App.css'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { AppLayout } from './Layout/AppLayout';
import ErrorPage from './Layout/ErrorPage';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Home } from './Pages/Home';

export const AppContext = createContext();

function App() {

  const stock = 55;

  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      errorElement: <ErrorPage />,
      children: ([
        {
          path: "/",
          element: <Home />
        },

      ])
    }

  ]);

  const queryClient = new QueryClient();

  return (
    <AppContext.Provider value={{ stock }}>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router}></RouterProvider>
      </QueryClientProvider>
    </AppContext.Provider>
  )


}

export default App
