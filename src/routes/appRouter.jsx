import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from "../App";
import Login from "../pages/login";

const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
    },
    {
        path: "/login",
        element: <Login />,
    }
  ]);

export default router