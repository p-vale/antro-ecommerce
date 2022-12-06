import styled from "styled-components"
import logo from "../img/logo-dark.webp"
import { brown, brownish, pink, green } from "../interoperability/colors"

const Foot = styled.footer`
  background-color: ${pink};
  color: ${brown};
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

  @media only screen and (max-width: 690px)  {
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
    min-width: 300px;
  }

  @media only screen and (max-width: 990px) {
    justify-content: flex-start;
    gap: 20px;
    flex-wrap: wrap;
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
  border-bottom: 1px solid ${brownish};
  @media only screen and (max-width: 800px)  {
    max-width: 300px;
  }
`
const MailInput = styled.input`
  width: 100%;
  border: none;
  background-color: rgb(0, 0, 0, 0);
  color: ${brownish};
  padding-left: 5px;
  ::placeholder,
  ::-webkit-input-placeholder {
    color: ${brownish};
    font-weight: 300;
  }
  :-ms-input-placeholder {
    color: ${brownish};
    font-weight: 300;
  }
  :focus {
    outline: none;
    color: ${brown};
  }
`
const MailButton = styled.button`
  background-color: ${brownish};
  color: ${pink};
  border: none;
  padding: 6px;
  :hover {
    background-color: ${green};
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
