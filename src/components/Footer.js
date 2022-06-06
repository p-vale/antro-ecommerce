import styled from "styled-components"
import logo from "../img/logo-dark.png"
import { plum, pink, pinkBg, yellow } from "../interoperability/colors"

const Foot = styled.footer`
  background-color: ${pinkBg};
  color: ${plum};
  padding-top: 50px;
  padding-bottom: 50px;
  font-family: sans;
  position: -webkit-sticky;
  position: sticky;
  top: auto;
  right: 0;
  bottom: 0;
`
const Logo = styled.img`
  height: 50px;
  margin-bottom: 30px;
`
const Info = styled.div`
  display: flex;
  justify-content: space-between;
`
const ListTitle = styled.h3`
  font-size: 32px;
  font-weight: 300;
  margin-bottom: 20px;
`
const ListEl = styled.p`
  font-weight: 300;
  margin-bottom: 10px;
  max-width: 25vw;
`
const MailBox = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid ${plum};
`
const MailInput = styled.input`
  width: 100%;
  border: none;
  background-color: rgb(0, 0, 0, 0);
  color: ${plum};
  padding-left: 5px;
  ::placeholder,
  ::-webkit-input-placeholder {
    color: white;
    font-weight: 300;
  }
  :-ms-input-placeholder {
     color: white;
     font-weight: 300;
  }
  :focus {
    outline: none;
  }
`
const MailButton = styled.button`
  background-color: ${plum};
  color: ${yellow};
  border: none;
  padding: 6px;
  padding-bottom: 2px;
  :hover {
    color: ${pink};
  }
`

const Footer = () => {
  return (
    <Foot className="content-wrapper">
    <Logo 
        src = { logo }
        alt = "Antro"
      />
    <Info>
      <div>
        <ListTitle>Quick Links</ListTitle>
        <ListEl>Shipping + Returns</ListEl>
        <ListEl>FAQs</ListEl>
        <ListEl>Contact Us</ListEl>
        <ListEl>Gift Cards</ListEl>
        <ListEl>Privacy Policy</ListEl>
        <ListEl>Terms of Service</ListEl>
      </div>
      <div>
        <ListTitle>About Us</ListTitle>
        <ListEl>Our Story</ListEl>
        <ListEl>Mission + Values</ListEl>
        <ListEl>Careers</ListEl>
      </div>
      <div>
        <ListTitle>Surprising Extras</ListTitle>
        <ListEl>Special offers, free giveaways, and magical offers in our newsletter!</ListEl>
        <MailBox>
          <MailInput 
            type = "email"
            name = "newsletter"
            placeholder = "Enter your e-mail"
          />
          <MailButton>SUBSCRIBE</MailButton>
        </MailBox>
      </div>
    </Info>
    </Foot>
  );
};

export default Footer;