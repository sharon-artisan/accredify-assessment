import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Sidebar from '../layouts/Sidebar.jsx';
import ErrorPage from "../error-page.jsx";
import Home from '../pages/Home.jsx';
import Documents from '../pages/Documents.jsx';
import Goals from '../pages/Goals.jsx';
import Verify from '../pages/Verify.jsx';
import Settings from '../pages/Settings.jsx';
import Login from '../pages/Login.jsx';
import MainLayout from '../layouts/MainLayout';
import LoginLayout from '../layouts/LoginLayout';

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <Sidebar />
        },
        {
            path: "home",
            element: <Home />,
        },
        {
            path: "documents",
            element: <Documents />,
        },
        {
            path: "goals",
            element: <Goals />,
        },
        {
            path: "verify",
            element: <Verify />,
        },
        {
            path: "settings",
            element: <Settings />,
        },
      ],
    },
    {
      path: "/login",
      element: <LoginLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <Login />,
        },
      ],
    }
  ]);
export default router;