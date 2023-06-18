import React from "react";
import ReactDOM from "react-dom/client";
import RouteSwitch from "./interoperability/RouteSwitch";
import "./norm.css"
import "./style.css"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouteSwitch />
  </React.StrictMode>
);