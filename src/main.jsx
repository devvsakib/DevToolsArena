import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Doc from "./components/Doc/Doc";
import Contributors from "./components/Contributors/contributors";
import BGShape from "./components/BGShape";
/* Creating a router object that is used to render the correct component based on the url. */
const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
    },
    {
      path: '/doc',
      element: <Doc />
    },
    {
      path: '/Contributors',
      element: <Contributors />
    }

  ]
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BGShape />
    <RouterProvider router={router} />
  </React.StrictMode>
);