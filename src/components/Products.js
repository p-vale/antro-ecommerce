import styled from "styled-components"
import { yellow } from "../interoperability/colors"

const Center = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-grow: 1;
`

const Img = styled.img`
  height: 250px;
  width: 250px;
`
const Title = styled.h3`
  font-family: serif;
  font-size: 32px;
  color: ${yellow};
  margin-bottom: 10px;
`

const Info = styled.div`
  width: 250px;
  display: flex;
  justify-content: space-between;
`

function displayProducts(data, unit, addToBag) {
  let display = data.map(item => (
    <Center key={item.id}>
      <div>
        <Img 
          src= {item.img}
          alt= {`${item.name} picture`}
          onClick= {() => {addToBag(item.id)}}
        />
        <Title>{item.name}</Title>
        <Info>
          <p>{item.price.toFixed(2)} €</p>
          <p>{unit}</p>
        </Info>
      </div>
    </Center>
  ))
  return display
}

export default displayProducts
