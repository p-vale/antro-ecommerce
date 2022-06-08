import styled from "styled-components"
import { yellow } from "../interoperability/colors"

const CenterCol = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const Img = styled.img`
  width: 250px;
  height: 250px;
`
const Title = styled.h3`
  font-family: serif;
  font-size: 32px;
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
        <Img 
          src={item.img}
          alt={`${item.name} picture`}
          onClick= {() => {addToBag(item.id)}}
        />
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
