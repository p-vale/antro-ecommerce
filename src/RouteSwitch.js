import React, { useState } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Herbs from "./pages/Herbs";
import Tarots from "./pages/Tarots";
import Hats from "./pages/Hats";
import Bag from "./pages/Bag";
import Login from "./pages/Login";
import data from "./data"

const RouteSwitch = () => {
  const [products, setBag] = useState(data)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/herbs" element={<Herbs data={products.herbs} />} />
        <Route path="/tarots" element={<Tarots data={products.tarots} />} />
        <Route path="/hats" element={<Hats data={products.hats} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/bag" element={<Bag data={products.bag} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;