import styled from "styled-components"
import { plum, purple, pinkBg, yellow } from "../interoperability/colors"
import Button from "./Button"

const Wrapper = styled.div`
  height: 80vh;
  background-color: ${purple};
  display: grid;
  grid-template-columns: 1fr 2fr;
  position: relative;
`
const Pics = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  overflow-x: hidden;
  overflow-y: auto;
`
const Pic = styled.img`
  height: auto; /*doesn't have any effect*/
  max-width: 300px;
`
const Info = styled.div`
  padding: 50px;
`
const Title = styled.h2`
  font-family: serif;
  font-size: 36px;
  color: ${yellow};
`
const Text = styled.p`
  font-family: sans;
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
  left: -38px;
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
          src = "http://placekitten.com/300/300"
          alt = "featured deck"
        />
        <Pic
          src = "http://placekitten.com/300/300"
          alt = "featured deck"
        />
        <Pic
          src = "http://placekitten.com/300/300"
          alt = "featured deck"
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