
import React, { createContext, useEffect, useState } from "react";
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
import { ColorMapping } from "./Pages/Charts/colorMapping";
import { Pyramid } from "./Pages/Charts/Pyramid";
import { Stack } from "./Pages/Charts/Stacked";

// Register Syncfusion license key
registerLicense('Ngo9BigBOggjHTQxAR8/V1NMaF1cXmhKYVB3WmFZfVtgfF9FZVZTQWYuP1ZhSXxWdkZjWH9Wc3JUTmVVVEU=');


export const AppContext = createContext();



function App() {
  // Global Variables 
  const [activeMenu, setActiveMenu] = useState(true);
  const [screenSize, setScreenSize] = useState(500);
  const [isClicked, setIsClicked] = useState(false);
  const [initialState, setInitialState] = useState({
    chat: false,
    cart: false,
    userProfile: false,
    notification: false,
  });

  useEffect(() => {
    if (activeMenu == true) {
      setInitialState({
        chat: false,
        cart: false,
        userProfile: false,
        notification: false,
      })
    }
  }, [activeMenu])

  useEffect(() => {

    const checkWidth = () => {
      let w = window.innerWidth;
      return w;

    }

    const handleScreenSize = () => {
      const width = checkWidth();
      setScreenSize(width)
    }
    handleScreenSize();

    window.addEventListener('resize', handleScreenSize)

    return () => window.removeEventListener('resize', handleScreenSize)
  }, [setScreenSize])










  // router 

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
          path: "/customers",
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
          path: "/calendar",
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
          path: "/bar",
          element: <Bars />
        },
        {
          path: "/pie",
          element: <Pi />
        },
        {
          path: "/financial",
          element: <Financial />
        },

        {
          path: "/color-mapping",
          element: <ColorMapping />
        },
        {
          path: "/pyramid",
          element: <Pyramid />
        },

        {
          path: "/stacked",
          element: <Stack />
        }



      ])
    }

  ]);

  const queryClient = new QueryClient();

  return (
    <AppContext.Provider value={{ activeMenu, setActiveMenu, screenSize, setScreenSize, isClicked, setIsClicked, initialState, setInitialState }}>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router}></RouterProvider>
      </QueryClientProvider>
    </AppContext.Provider>
  )


}

export default App
