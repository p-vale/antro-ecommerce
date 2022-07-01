import styled from "styled-components"
import { plum, purple, pinkBg, yellow } from "../interoperability/colors"
import Button from "./Button"
import Nightlife1 from "../img/home/Nightlife1.webp"
import Nightlife2 from "../img/home/Nightlife2.webp"
import Nightlife3 from "../img/home/Nightlife3.webp"

const Wrapper = styled.div`
  height: 80vh;
  background-color: ${purple};
  display: grid;
  grid-template-columns: 1fr 2fr;
  position: relative;
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
    margin-top: 10px;
  }
  @media only screen and (max-width: 700px)  {
    justify-content: flex-start;
  }
`
const Pic = styled.img`
  max-width: 300px;
  @media only screen and (max-width: 800px)  {
    height: 200px;
  }
  @media only screen and (max-width: 700px)  {
    display: ${props => props.hide || "block"}
  }
`
const Info = styled.div`
  padding: 50px;
  @media only screen and (max-width: 700px)  {
    padding: 25px 0px 25px 0px;
  }
`
const Title = styled.h2`
  font-family: 'Yeseva One', cursive;
  font-weight: 400;
  font-size: 36px;
  color: ${yellow};
`
const Text = styled.p`
  font-size: 20px;
  text-align: justify;
  margin-bottom: 10px;
`
const Label = styled.div`
  background-color: ${pinkBg};
  color: ${plum};
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
        <Pic
          src = {Nightlife1}
          alt = "featured deck"
        />
        <Pic
          src = {Nightlife2}
          alt = ""
          hide = "none"
        />
        <Pic
          src = {Nightlife3}
          alt = ""
          hide = "none"
        />
      </Pics>
      <Info>
        <Text>TAROT</Text>
        <Title>NightLife Cards</Title>
        <Text>20.00 €</Text>
        <Button>ADD TO BAG</Button>
        <Text><b>Description</b></Text>
        <Text>{descr}</Text>
      </Info>
    </Wrapper>
  )
}

export default Featured