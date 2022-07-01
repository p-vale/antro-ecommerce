import { Link } from 'react-router-dom';
import styled from "styled-components"
import logo from "../img/logo-light.webp"
import { plum, pink, yellow } from "../interoperability/colors"

const Head = styled.header`
  position: fixed;
  top: 0;
  width: 100vw;
  height: 100px;
  background-color: ${plum};
  display: flex;
  justify-content: space-around;
  align-items: center;
  filter: drop-shadow(0 -14px 10px ${pink});
  z-index: 2; /*on top of page (style.css)*/
  @media only screen and (max-width: 650px)  {
    height: 110px;
  }
`
const Logo = styled.img`
  height: 50px;
  @media only screen and (max-width: 800px)  {
    height: 35px;
  }
`
const Menu = styled.nav`
  display: flex;
  align-items: center;
  gap: 20px;
  font-size: 34px;
  font-weight: 300;
  @media only screen and (max-width: 800px)  {
    font-size: 20px;
  }
  @media only screen and (max-width: 650px)  {
    flex-direction: column;
    gap: 5px;
  }
`
const ProdLink = styled(Link)`
  font-family: 'Source Sans Pro', sans-serif;
  color: ${pink};
  text-decoration: none;
  :hover{
    border-bottom: 1px solid ${pink};
  }
`
const UserLink = styled(Link)`
  font-family: 'Source Sans Pro', sans-serif;
  color: ${pink};
  text-decoration: none;
  font-size: 24px;
  :hover{
    color: ${yellow};
  }
  @media only screen and (max-width: 800px)  {
    font-size: 20px;
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
      <Menu className="products-menu">
        <ProdLink to="/herbs"> HERBS</ProdLink>
        <ProdLink to="/tarots">TAROTS</ProdLink>
        <ProdLink to="/hats">HATS</ProdLink>
      </Menu>
      <Menu className="user-menu">
        <UserLink to="/login">LOG IN</UserLink>
        <UserLink to="/bag">BAG</UserLink>
      </Menu>
    </Head>
  );
};

export default Header
