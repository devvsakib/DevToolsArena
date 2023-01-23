import "./index.css";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import Doc from "./pages/Doc";
const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: '/doc',
      element: <Doc />
    }
  ]
);
function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;