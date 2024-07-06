import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from "../pages/login";
import Dashboard from "../pages/dashboard/Dashboard";
import AdminMenu from "../components/AdminMenu"
import ColaboratorMenu from "../components/ColaboratorMenu";

const router = createBrowserRouter([
    {
        path: "/",
        element: <h1>Welcome to the homepage</h1>,
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/admin",
        element: <Dashboard><AdminMenu/></Dashboard>,
    },
    {
        path: "/colaborator",
        element: <Dashboard><ColaboratorMenu/></Dashboard>,
    }
  ]);

export default router