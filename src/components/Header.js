import { Link } from 'react-router-dom';
import styled from "styled-components"
import logo from "../img/logo-light.webp"
import iconLogin from "../img/icon-login.webp"
import iconBag from "../img/icon-bag.webp"
import { plum, pink } from "../interoperability/colors"

const Head = styled.header`
  position: fixed;
  top: 0;
  width: 90%;
  height: 100px;
  background-color: ${plum};
  display: flex;
  justify-content: space-between;
  align-items: center;
  filter: drop-shadow(0 -12px 10px ${pink});
  z-index: 2; /*on top of page (style.css)*/
`
const Logo = styled.img`
  height: 50px;
`
const Products = styled.nav`
  display: flex;
  align-items: center;
  gap: 20px;
`
const Personal = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  wrap: nowrap;
  gap: 5px;
`
const Img = styled.img`
  max-height: 30px;
  width: auto;
`
const MenuLink = styled(Link)`
  font-family: 'Source Sans Pro', sans-serif;
  color: ${pink};
  text-decoration: none;
  font-weight: 300;
  font-size: ${props => props.fontsmall || "32px"};
  :hover {
    text-decoration: underline;
    text-decoration-thickness: 1px;
  }
`

const Header = () => {
  return (
    <Head className="content-wrapper">
      <Link to="/" className="home">
        <Logo 
          src = { logo }
          alt = "Antro-logo"
        />
      </Link>
      <Products className="products-menu">
        <MenuLink to="/herbs"> HERBS</MenuLink>
        <MenuLink to="/tarots">TAROTS</MenuLink>
        <MenuLink to="/hats">HATS</MenuLink>
      </Products>
      <Products className="user-menu">
        <Personal>
          <Img 
          src = { iconLogin }
          alt = ""
          />
          <MenuLink fontsmall="14px" to="/login">LOG IN</MenuLink>
        </Personal>
        <Personal>
          <Img 
          src = { iconBag }
          alt = ""
          />
          <MenuLink fontsmall="14px" to="/bag">BAG</MenuLink>
        </Personal>
      </Products>
    </Head>
  );
};

export default Header
