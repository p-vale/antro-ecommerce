import styled from "styled-components"
import logo from "../img/logo-dark.png"
import { plum, pink, yellow } from "../colors"

const Foot = styled.foot`
  background-color: ${pink};
  color: ${plum};
`

const Logo = styled.img`
  height: 50px;
`

const Footer = () => {
  return (
    <Foot className="content-wrapper">
    <Logo 
        src = { logo }
        alt = "Antro"
      />

    <h1>This is footer</h1>
    </Foot>
  );
};

export default Footer;