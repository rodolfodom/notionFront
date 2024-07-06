import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from "../pages/login";

const router = createBrowserRouter([
    {
        path: "/",
        element: <h1>Welcome to the homepage</h1>,
    },
    {
        path: "/login",
        element: <Login />,
    }
  ]);

export default router