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

const Personal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  wrap: nowrap;
  gap: 5px;
`

const Link = styled.a`
  font-family: sans-serif; 
  color: ${pink};
  text-decoration: none;
  font-weight: 300;
  font-size: ${props => props.fontSmall || "32px"};
`

const Header = () => {
  return (
    <Head className="content-wrapper">
      <a href="/">
        <Logo 
          src = { logo }
          alt = "Antro"
        />
      </a>
      <Products>
        <Link href="/herbs"> HERBS</Link>
        <Link href="/tarots">TAROTS</Link>
        <Link href="/hats">HATS</Link>
      </Products>
      <Products>
        <Personal>
          <img 
          src = { iconLogin }
          alt = ""
          />
          <Link fontSmall="12px" href="/login">LOG IN</Link>
        </Personal>
        <Personal>
          <img 
          src = { iconBag }
          alt = ""
          />
          <Link fontSmall="12px" href="/bag">BAG</Link>
        </Personal>
      </Products>
    </Head>
  );
};

export default Header;