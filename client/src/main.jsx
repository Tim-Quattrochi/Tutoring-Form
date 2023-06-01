import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { disableReactDevTools } from "@fvilers/disable-react-devtools";

if (import.meta.env.VITE_NODE_ENV === "production")
  disableReactDevTools();

console.log(import.meta.env.VITE_NODE_ENV);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
