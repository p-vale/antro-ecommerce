import { Link } from 'react-router-dom';
import styled from "styled-components"
import logo from "../img/logo-light.png"
import iconLogin from "../img/icon-login.png"
import iconBag from "../img/icon-bag.png"
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
const MenuLink = styled(Link)`
  font-family: sans-serif; 
  color: ${pink};
  text-decoration: none;
  font-weight: 300;
  font-size: ${props => props.fontsmall || "32px"};
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
          <img 
          src = { iconLogin }
          alt = ""
          />
          <MenuLink fontsmall="12px" to="/login">LOG IN</MenuLink>
        </Personal>
        <Personal>
          <img 
          src = { iconBag }
          alt = ""
          />
          <MenuLink fontsmall="12px" to="/bag">BAG</MenuLink>
        </Personal>
      </Products>
    </Head>
  );
};

export default Header;