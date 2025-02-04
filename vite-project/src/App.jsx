
import React, { createContext } from "react";
import './App.css'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { AppLayout } from './Layout/AppLayout';
import ErrorPage from './Layout/ErrorPage';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Ecommerce } from './Pages/Ecommerce';

import { registerLicense } from '@syncfusion/ej2-base';
import { Orders } from "./Pages/Orders";
import { Employees } from "./Pages/Empolyees";
import { Custumer } from "./Pages/Custumer";
import { Kanban } from "./Pages/Kanban";
import { Editor } from "./Pages/Editor";
import { ColorPicker } from "./Pages/ColorPicker";
import { Calender } from "./Pages/Calender";
import { Line } from "./Pages/Charts/Line";
import { Area } from "./Pages/Charts/Area";
import { Bars } from "./Pages/Charts/Bar";
import { Pi } from "./Pages/Charts/Pi";
import { Financial } from "./Pages/Charts/financial";
import { Pyramid } from "./Pages/Charts/Pyramid";
import { Stacked } from "./Pages/Charts/Stacked";

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

        {
          path: "/orders",
          element: <Orders />
        },
        {
          path: "/employees",
          element: <Employees />
        },
        {
          path: "/custumer",
          element: <Custumer />
        },
        // Apps

        {
          path: "/kanban",
          element: <Kanban />
        },
        {
          path: "/editor",
          element: <Editor />
        },
        {
          path: "/color-picker",
          element: <ColorPicker />
        },
        {
          path: "/calender",
          element: <Calender />
        },
        // charts

        {
          path: "/line",
          element: <Line />
        },
        {
          path: "/area",
          element: <Area />
        },
        {
          path: "/bars",
          element: <Bars />
        },
        {
          path: "/pi",
          element: <Pi />
        },
        {
          path: "/financial",
          element: <Financial />
        },

        {
          path: "/pyramid",
          element: <Pyramid />
        },
        {
          path: "/stacked",
          element: <Stacked />
        }



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
