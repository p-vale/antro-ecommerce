import styled from "styled-components"
import Button from "../Button"
import { dark, medium, yellow } from "../../interoperability/colors"

const CenterCol = styled.div`
  height: 340px;
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  margin: 20px;
  background-color: ${medium};
  border-radius: 8px;
  :hover {
    box-shadow: 0px 0px 10px black;
  }

  div {
    width: 100%;
  }
`
const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  cursor: pointer;
  border-radius: 8px;
  border: 1px solid ${dark};
  margin-bottom: 10px;

  .bag-btn {
    position: absolute;
    bottom: 8px;
    right: 8px;
    margin-bottom: 0px;
    max-width: 100px;
    font-size: 12px;
  }
`

const Img = styled.img`
  width: 250px;
  height: 250px;
`
const Title = styled.h3`
  font-family: 'Yeseva One', cursive;
  font-weight: 400;
  font-size: 30px;
  color: ${yellow};
  margin-bottom: 10px;
`
const Info = styled.div`
  display: flex;
  justify-content: space-between;
`

function displayProducts(data, unit, addToBag) {
  let display = data.map(item => (
    <CenterCol key={item.id}>
      <div>
        <Container>
          <Img 
            className="productsMaker-img"
            src={item.img}
            alt={`${item.name} picture`}
          />
          <Button className="bag-btn" onClick= {() => {addToBag(item.id)}}>ADD TO BAG</Button>
        </Container>
        <Title>{item.name}</Title>
        <Info>
          <p>{item.price.toFixed(2)} €</p>
          <p>{unit}</p>
        </Info>
      </div>
    </CenterCol>
  ))
  return display
}

export default displayProducts
