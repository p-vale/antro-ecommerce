import styled from "styled-components"
import { light, dark, yellow } from "../interoperability/colors"
import Button from "./Button"
import Nightlife1 from "../img/home/Nightlife1.webp"
import Nightlife2 from "../img/home/Nightlife2.webp"
import Nightlife3 from "../img/home/Nightlife3.webp"

const Wrapper = styled.div`
  height: 80vh;
  background-color: ${dark};
  display: grid;
  grid-template-columns: 1fr 2fr;
  position: relative;
  overflow-x: hidden;
  overflow-y: auto;
  @media only screen and (max-width: 800px)  {
    display: flex;
    flex-direction: column;
    height: max-content;
  }
`
const Pics = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  overflow-x: hidden;
  overflow-y: auto;
  @media only screen and (max-width: 800px)  {
    flex-direction: row;
    justify-content: center;
    margin-top: 30px;
  }
`
const Img = styled.img`
  max- width: 300px;
  @media only screen and (max-width: 800px)  {
    height: 200px;
  }
  @media only screen and (max-width: 620px)  {
    height: 150px;
  }
  @media only screen and (max-width: 520px)  {
    display: ${props => props.hide || "block"}
  }
`
const Info = styled.div`
  padding: 50px;
  @media only screen and (max-width: 700px)  {
    padding: 25px 0px 40px 0px;
  }

  h2 {
    font-family: 'Yeseva One', cursive;
    font-weight: 400;
    font-size: 36px;
    color: ${yellow};
  }

  p {
    font-size: 20px;
    text-align: justify;
    margin-bottom: 10px;
  }
`
const Label = styled.div`
  background-color: ${yellow};
  color: ${dark};
  padding: 6px;
  position: absolute;
  top: 100px;
  left: -30px;
  transform: rotate(90deg);
`
const descr = "The above BUTTON isn't meant to work right now, If you want to add articles go to the herbs-tarots-hats pages. The tarot is a pack of playing cards, used from at least the mid-15th century in various parts of Europe to play games."

const Featured = () => {
  return(
    <Wrapper className="content-wrapper">
      <Label>
        <p>FEATURED</p>
      </Label>
      <Pics>
        <Img
          src = {Nightlife1}
          alt = "featured deck"
        />
        <Img
          src = {Nightlife2}
          alt = ""
          hide = "none"
        />
        <Img
          src = {Nightlife3}
          alt = ""
        />
      </Pics>
      <Info>
        <p>TAROT</p>
        <h2>NightLife Cards</h2>
        <p>20.00 €</p>
        <Button>ADD TO BAG</Button>
        <p><b>Description</b></p>
        <p>{descr}</p>
      </Info>
    </Wrapper>
  )
}

export default Featured