import React from 'react';
import { createBrowserRouter, Navigate } from 'react-router-dom';
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
          element: <Navigate to="/home" replace />,
          name: 'Home',
        },
        {
            path: "home",
            element: <Home />,
            name: 'Home',
        },
        {
            path: "documents",
            element: <Documents />,
            name: 'Documents',
        },
        {
            path: "goals",
            element: <Goals />,
            name: 'Goals',
        },
        {
            path: "verify",
            element: <Verify />,
            name: 'Verify',
        },
        {
            path: "settings",
            element: <Settings />,
            name: 'Settings',
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
          name: 'Login',
        },
      ],
    }
  ]);
export default router;