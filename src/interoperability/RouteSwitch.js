import React, { useState } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Herbs from "../pages/Herbs";
import Tarots from "../pages/Tarots";
import Hats from "../pages/Hats";
import Bag from "../pages/Bag";
import Login from "../pages/Login";
import data from "./data"

const RouteSwitch = () => {
  const [products, setBag] = useState(data)

  function itemCoordinates (id) {
    let category = ''
    let index = ''
    for (let type in products) {
      category = type
      if (Object.prototype.hasOwnProperty.call(products, type)) {
        for (let item of products[type]) {
          if (item.id === id) { 
              index = products[type].indexOf(item);
              return {category, index}
            }
        }
      }
    }
  }

  function addToBag (id) {
    let x = itemCoordinates(id)
    setBag((prevData) => {
      let newData = structuredClone(prevData)
      newData[x.category][x.index].bag = true;
      // console.log("prev", prevData)
      // console.log("new", newData)
      return newData
    })
  }

  // function removeFromBag() {
  //   setBag()
  //   return
  // }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/herbs" element={<Herbs data={products} addToBag={addToBag} />} />
        <Route path="/tarots" element={<Tarots data={products} addToBag={addToBag} />} />
        <Route path="/hats" element={<Hats data={products} addToBag={addToBag} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/bag" element={<Bag data={products} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;