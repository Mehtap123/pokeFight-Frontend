import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Landingpage from "./components/Landingpage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Landingpage />
    <App />
  </React.StrictMode>
);
