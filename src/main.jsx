import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";


/* Creating a router object that is used to render the correct component based on the url. */


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);