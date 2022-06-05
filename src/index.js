import React from "react";
import ReactDOM from "react-dom/client";
import RouteSwitch from "./interoperability/RouteSwitch";
import Header from "./components/Header"
import "./norm.css"
import "./style.css"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <RouteSwitch />
  </React.StrictMode>
);