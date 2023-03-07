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
import NotFound from "./pages/404";
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
    },
    {path: '*',
    element: <NotFound />
    }

  ]
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BGShape />
    <RouterProvider router={router} />
  </React.StrictMode>
);
