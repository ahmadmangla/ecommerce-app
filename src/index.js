import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { APIContextProvider } from "./context/ProductContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <APIContextProvider>
      <App />
    </APIContextProvider>
  </React.StrictMode>
);
