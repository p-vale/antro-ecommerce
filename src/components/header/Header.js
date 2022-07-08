import { Link } from 'react-router-dom';
import styled from "styled-components"
import { plum, pink } from "../../interoperability/colors"
import logo from "../../img/logo-light.webp"
import Burg from "./Burger.js"

const Head = styled.header`
  position: fixed;
  top: 0;
  width: 100vw;
  height: 100px;
  background-color: ${plum};
  display: flex;
  justify-content: space-between;
  align-items: center;
  filter: drop-shadow(14px -14px 10px ${pink}); /** +14 for sidemenu */
  z-index: 2; /*on top of page (style.css)*/
  @media only screen and (max-width: 650px)  {
    height: 110px;
  }
`
const Logo = styled.img`
  height: 50px;
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
