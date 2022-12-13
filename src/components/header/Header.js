import { Link } from 'react-router-dom';
import styled from "styled-components"
import { pink, shadow } from "../../interoperability/colors"
import logo from "../../img/Logo.webp"
import Burg from "./Burger.js"

const Head = styled.header`
  position: fixed;
  top: 0;
  width: 100vw;
  height: 80px;
  background-color: ${pink};
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px -10px 15px 1px ${shadow};
  z-index: 2; /*on top of page (style.css)*/
  @media only screen and (max-width: 650px)  {
    height: 60px;
  }
`
const Logo = styled.img`
  height: 40px;
  margin-left: 25%;
  @media only screen and (max-width: 800px)  {
    height: 40px;
  }
`

const Header = () => {
  return (
    <Head>
      <Link to="/antro-ecommerce" className="home">
        <Logo 
          src = { logo }
          alt = "Antro-logo"
        />
      </Link>
      <Burg />
    </Head>
  );
};

export default Header
