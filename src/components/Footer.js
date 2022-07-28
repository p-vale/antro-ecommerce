import styled from "styled-components"
import logo from "../img/logo-dark.webp"
import { plum, pink, pinkBg, yellow } from "../interoperability/colors"

const Foot = styled.footer`
  background-color: ${pinkBg};
  color: ${plum};
  padding-top: 50px;
  padding-bottom: 50px;
  position: -webkit-sticky;
  position: sticky;
  top: auto;
  right: 0;
  bottom: 0;
  @media only screen and (max-width: 500px)  {
    position: static;
  }
`
const Logo = styled.img`
  height: 50px;
  margin-bottom: 30px;

  @media only screen and (max-width: 600px)  {
    display: none;
  }
`
const Info = styled.div`
  display: flex;
  justify-content: space-between;

  h3 {
    font-size: 32px;
    font-weight: 400;
    margin-bottom: 20px;
  }

  p {
    font-weight: 300;
    margin-bottom: 10px;
    max-width: 25vw;
  }

  @media only screen and (max-width: 500px)  {
    flex-direction: column;
    gap: 20px;

    h3 {
      font-size: 24px;
      margin-bottom: 10px;
    }

    p {
      margin-bottom: 2px;
    }
  }
`
const MailBox = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid ${plum};
  @media only screen and (max-width: 800px)  {
    max-width: 300px;
  }
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
  color: ${pink};
  border: none;
  padding: 6px;
  :hover {
    color: ${yellow};
    cursor: pointer;
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
        <h3>Quick Links</h3>
        <p>Shipping + Returns</p>
        <p>FAQs</p>
        <p>Contact Us</p>
        <p>Gift Cards</p>
        <p>Privacy Policy</p>
        <p>Terms of Service</p>
      </div>
      <div>
        <h3>About Us</h3>
        <p>Our Story</p>
        <p>Mission + Values</p>
        <p>Careers</p>
      </div>
      <div>
        <h3>Surprising Extras</h3>
        <p>Special offers, free giveaways, and magical offers in our newsletter!</p>
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

export default Footer
