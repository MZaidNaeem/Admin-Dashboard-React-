
import React from "react";
// import './App.css'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { AppLayout } from './Layout/AppLayout';
import ErrorPage from './Layout/ErrorPage';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Home } from './Pages/Home';


function App() {
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
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router}></RouterProvider>
    </QueryClientProvider>
  )


}

export default App
