import React, { useState } from "react";
import styled from "styled-components"
import { pink, brown } from "../../interoperability/colors"
import Menu from "./Menu"

const BurgerStyle = styled.div`
  width: 40px;
  height: 30px;
  position: fixed;
  top: 35px;
  right: 35px;
  z-index: 5;
  display: none;

  @media only screen and (max-width: 800px)  {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  @media only screen and (max-width: 650px)  {
    top: 25px;
  }

  div {
    width: 40px;
    height: 2px;
    background-color: ${({open}) => open ? brown : pink};
    border-radius: 3px;
    transform-origin: 1px;
    transition: all 0.3s linear;

    &:nth-child(1) {
      transform: ${({open}) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }
    &:nth-child(2) {
      transform: ${({open}) => open ? 'scale(0)' : 'scale(1)'};
    }
    &:nth-child(3) {
      transform: ${({open}) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`

const Burg = () => {
  const [open, setOpen] = useState(false)

  return(
    <>
    <BurgerStyle 
    open={open} 
    onClick={() => { setOpen(!open) }}>
      <div></div>
      <div></div>
      <div></div>
    </BurgerStyle>
    <Menu open={open}/>
    </>
  )
}

export default Burg