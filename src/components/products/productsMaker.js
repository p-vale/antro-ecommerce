import styled from "styled-components"
import { green, pink } from "../../interoperability/colors"

const CenterCol = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 5px;
  padding-bottom: 15px;
  :hover {
    box-shadow: 0px 0px 10px ${pink};
  }
`
const Container = styled.div`
  position: relative;
  cursor: pointer;
  :hover .productsMaker-center-txt {
    opacity: 1;
  }
  :hover .productsMaker-img {
    opacity: 0.5;
  }
`
const CenterTxt = styled.div`
  position: absolute;
  top: 45%;
  width: 100%;
  text-align: center;
  font-size: 18px;
  opacity: 0;
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
          <CenterTxt className="productsMaker-center-txt">ADD TO BAG</CenterTxt>
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
