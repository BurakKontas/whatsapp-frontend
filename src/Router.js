
import React from "react";

import {
  createBrowserRouter,
  RouterProvider,
  Navigate
} from "react-router-dom";

import Chat from "./screens/Chat";
import Main from './screens/Main';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    //errorElement: <ErrorPage />,
  },
  {
    path: "/chat/:chatid",
    element: <Chat />,
    //errorElement: <ErrorPage />,
  },
  {
    path:"*",
    element:<Navigate to="/" />
  }
]);

function Router() {
  return <RouterProvider router={router} />
}

export default Router;
