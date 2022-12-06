import styled from "styled-components"
import Button from "../Button"
import { green, pink } from "../../interoperability/colors"

const CenterCol = styled.div`
  width: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: white;
  border-radius: 5px;
  :hover {
    box-shadow: 0px 0px 10px ${pink};
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
  border-radius: 5px;
  border: 3px solid ${pink};
  :hover .productsMaker-center-txt {
    opacity: 1;
  }
  :hover .productsMaker-img {
    opacity: 0.5;
  }

  .bag-btn {
    position: absolute;
    bottom: 5px;
    right: 5px;
    margin-bottom: 0px;
    max-width: 100px;
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
  color: ${green};
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
        <Container onClick= {() => {addToBag(item.id)}}>
          <Img 
            className="productsMaker-img"
            src={item.img}
            alt={`${item.name} picture`}
          />
          <Button className="bag-btn">ADD TO BAG</Button>
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
