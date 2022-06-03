import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Herbs from "./pages/Herbs";
import Tarots from "./pages/Tarots";
import Hats from "./pages/Hats";
import Bag from "./pages/Bag";
import Login from "./pages/Login";

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/herbs" element={<Herbs />} />
        <Route path="/tarots" element={<Tarots />} />
        <Route path="/hats" element={<Hats />} />
        <Route path="/login" element={<Login />} />
        <Route path="/bag" element={<Bag />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;