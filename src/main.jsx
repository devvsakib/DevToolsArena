import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Toaster } from 'sonner';
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
import DevArea from "./pages/DevArea";
import DevTools from "./pages/DevArea/DevTools";
import Flow from "./pages/Flow";

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
      path: '/doc/:slug',
      element: <DocDetail />
    },
    {
      path: '/resources',
      element: <Resources />
    },
    {
      path: '/devarea',
      element: <DevArea />
    },
    {
      path: '/devarea/:tool',
      element: <DevTools />
    },
    {
      path: '/contributors',
      element: <Contributors />
    },
    {
      path: '/flow',
      element: <Flow />
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
    <Toaster />
    <RouterProvider router={router} />
  </React.StrictMode>
);
