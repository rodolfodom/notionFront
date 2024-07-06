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
import CreateTaskMenu from "../components/Modals/CreateTaskMenu";
import CreateUserMenu from "../components/Modals/CreateUserMenu";
import CreateGroupMenu from "../components/Modals/CreateGroupMenu";

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
    },
    {
        path: "/admin/createTask",
        element: <Dashboard><CreateTaskMenu/></Dashboard>,
    },
    {
        path: "/admin/createUser",
        element: <Dashboard><CreateUserMenu/></Dashboard>,
    },
    {
        path: "/admin/createGroup",
        element: <Dashboard><CreateGroupMenu/></Dashboard>,
    }
  ]);

export default router