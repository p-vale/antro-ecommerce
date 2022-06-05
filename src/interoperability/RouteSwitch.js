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
    let cat = ''
    let index = ''
    for (let type in products) {
      cat = type
      if (Object.prototype.hasOwnProperty.call(products, type)) {
        for (let item of products[type]) {
          if (item.id === id) { 
              index = products[type].indexOf(item);
              return {cat, index}
            }
        }
      }
    }
  }

  // let x = itemCoordinates(6)
  // console.log(products.hats[0].bag)
  // console.log(products[x.cat][x.index].name)
  function addToBag (id) {
    console.log(id)
    let x = itemCoordinates(id)
    console.log(x)
    setBag((prevData) => {
      console.log(prevData)
      let newData = { ...prevData }
      newData[x.cat][x.index].bag = !prevData[x.cat][x.index].bag;
      console.log(newData)
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
        <Route path="/tarots" element={<Tarots data={products} />} />
        <Route path="/hats" element={<Hats data={products} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/bag" element={<Bag data={products} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;