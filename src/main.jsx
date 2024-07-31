import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Contributors from "./components/Contributors/contributors";
import BGShape from "./components/BGShape";
import NotFound from "./pages/NotFound";
import DocList from "./pages/Doc";
import DocDetail from "./pages/Doc/single doc";
import Resources from "./pages/Resources";
import BlogsList from "./pages/blogs";
import BlogDetail from "./pages/blogs/blog";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
    },
    {
      path: '/doc',
      element: <DocList />
    },
    {
      path: '/blogs',
      element:<BlogsList/>
    },
    {
      path: '/blogs/:slug',
      element:<BlogDetail />
    },
    {
      path: '/doc/:slug',
      element: <DocDetail />
    },
    {
      path: '/resources',
      element: <Resources />
    },
    {
      path: '/contributors',
      element: <Contributors />
    },
    {
      path: '*',
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
