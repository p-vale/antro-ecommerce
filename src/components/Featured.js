import styled from "styled-components"
import { plum, purple, pink, yellow } from "../colors"

const Wrapper = styled.div`
  height: 80vh;
  background-color: ${purple};
  color: ${pink};
  display: grid;
  grid-template-columns: 1fr 2fr;
  position: relative;
`

const Pics = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  overflow-x: hidden;
  overflow-y: auto;
`

const Pic = styled.img`
  height: 300px;
  width: 300px;
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
  margin-bottom: 10px;
`

const Button = styled.button`
  width: 150px;
  background-color: ${yellow};
  color: ${plum};
  font-family: sans;
  border: none;
  border-radius: 5px;
  padding: 6px;
  padding-bottom: 3px;
  margin-bottom: 30px;
`

const Label = styled.div`
  background-color: ${pink};
  color: ${plum};
  padding: 6px;
  position: absolute;
  top: 50px;
  left: -38px;
  transform: rotate(90deg);
`

const descr = "The tarot is a pack of playing cards, used from at least the mid-15th century in various parts of Europe to play games such as Italian tarocchini, French tarot and Austrian Königrufen, many of which are still played today. In the late 18th century, some tarot decks began to be used for divination via tarot card reading and cartomancy leading to custom decks developed for such occult purposes."

const Featured = () => {
  return(
    <Wrapper className="content-wrapper">
      <Label>
        <p>FEATURED</p>
      </Label>
      <Pics>
        <Pic
          src = "http://placekitten.com/300/300"
          alt = "spring sale: 20% off"
        />
        <Pic
          src = "http://placekitten.com/300/300"
          alt = "spring sale: 20% off"
        />
        <Pic
          src = "http://placekitten.com/300/300"
          alt = "spring sale: 20% off"
        />
        <Pic
          src = "http://placekitten.com/300/300"
          alt = "spring sale: 20% off"
        />
      </Pics>
      <Info>
        <Text>TAROT</Text>
        <Title>NightLife Cards</Title>
        <Text>30.00 €</Text>
        <Button>ADD TO BAG</Button>
        <Text><b>Description</b></Text>
        <Text>{descr}</Text>
      </Info>
    </Wrapper>
  )
}

export default Featured