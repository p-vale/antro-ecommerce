import React, { useState } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../components/Header"
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
      return newData
    })
  }

  function remove (id) {
    let x = itemCoordinates(id)
    setBag((prevData) => {
      let newData = structuredClone(prevData)
      newData[x.category][x.index].bag = false;
      return newData
    })
  }

  function minus (id) {
    let x = itemCoordinates(id)
    setBag((prevData) => {
      if (prevData[x.category][x.index].quantity > 1) {
        let newData = structuredClone(prevData)
        newData[x.category][x.index].quantity = prevData[x.category][x.index].quantity - 1;
        return newData
      } else {
        return prevData
      }
    })
  }

  function plus (id) {
    let x = itemCoordinates(id)
    setBag((prevData) => {
      if (prevData[x.category][x.index].quantity < 6) {
        let newData = structuredClone(prevData)
        newData[x.category][x.index].quantity = prevData[x.category][x.index].quantity + 1;
        return newData
      } else {
        return prevData
      }
    })
  }

  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/herbs" element={<Herbs data={products} addToBag={addToBag} />} />
        <Route path="/tarots" element={<Tarots data={products} addToBag={addToBag} />} />
        <Route path="/hats" element={<Hats data={products} addToBag={addToBag} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/bag" element={<Bag data={products} remove={remove} minus={minus} plus={plus} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;