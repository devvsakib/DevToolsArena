import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
<<<<<<< HEAD
import { BrowserRouter } from "react-router-dom";
=======
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Doc from "./components/Doc/Doc";

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
    }
  ]
);
>>>>>>> parent of 8d9c392 (pages created)

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>
);