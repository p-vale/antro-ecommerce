import styled from "styled-components"
import { light, lightExtra, dark, yellow } from "../interoperability/colors"

const Foot = styled.footer`
  background-color: ${dark};
  color: ${light};
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
const Info = styled.div`
  display: flex;
  justify-content: space-between;

  h4 {
    font-weight: 400;
    margin-bottom: 20px;
  }

  p {
    font-weight: 300;
    margin-bottom: 10px;
    max-width: 25vw;
    min-width: 300px;
    color: ${lightExtra};
  }

  @media only screen and (max-width: 990px) {
    justify-content: flex-start;
    gap: 20px;
    flex-wrap: wrap;
  }

  @media only screen and (max-width: 500px)  {
    flex-direction: column;
    gap: 20px;

    h4 {
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
  border-bottom: 1px solid ${yellow};
  @media only screen and (max-width: 800px)  {
    max-width: 300px;
  }
`
const MailInput = styled.input`
  width: 100%;
  border: none;
  background-color: rgb(0, 0, 0, 0);
  color: ${light};
  padding-left: 5px;
  ::placeholder,
  ::-webkit-input-placeholder {
    color: ${light};
    font-weight: 300;
  }
  :-ms-input-placeholder {
    color: ${light};
    font-weight: 300;
  }
  :focus {
    outline: none;
    color: ${light};
  }
`
const MailButton = styled.button`
  background-color: ${yellow};
  color: ${dark};
  border: none;
  padding: 6px;
  :hover {
    background-color: ${light};
    cursor: pointer;
  }
`

const Footer = () => {
  return (
    <Foot className="content-wrapper">
    <Info>
      <div>
        <h4>Quick Links</h4>
        <p>Shipping + Returns</p>
        <p>FAQs</p>
        <p>Contact Us</p>
        <p>Gift Cards</p>
        <p>Privacy Policy</p>
        <p>Terms of Service</p>
      </div>
      <div>
        <h4>About Us</h4>
        <p>Our Story</p>
        <p>Mission + Values</p>
        <p>Careers</p>
      </div>
      <div>
        <h4>Surprising Extras</h4>
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
