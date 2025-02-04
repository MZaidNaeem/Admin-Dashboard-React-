
import React, { createContext } from "react";
import './App.css'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { AppLayout } from './Layout/AppLayout';
import ErrorPage from './Layout/ErrorPage';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Ecommerce } from './Pages/Ecommerce';

import { registerLicense } from '@syncfusion/ej2-base';

// Register Syncfusion license key
registerLicense('Ngo9BigBOggjHTQxAR8/V1NMaF1cXmhLYVF+WmFZfVtgdVVMYlpbQXRPMyBoS35Rc0ViW3ZfcHZdQ2RUUkF3');


export const AppContext = createContext();

function App() {

  const stock = 55;

  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      errorElement: <ErrorPage />,
      children: ([
        // dashboard
        {
          path: "/",
          element: <Ecommerce />
        },

        // pages
        // Apps
        // charts


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
