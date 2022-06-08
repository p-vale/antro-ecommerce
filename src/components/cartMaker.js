import styled from "styled-components"
import { plum, pinkBg, yellow } from "../interoperability/colors"

const ProductBlock = styled.div`
  padding-top: 50px;
  padding-bottom: 50px;
  border-bottom: 1px solid ${pinkBg};
  display: flex;
`
const ProductImg = styled.img`
  height: 200px;
  width: 200px;
  margin-right: 20px;
`
const InfoBox = styled.div`
  padding: 20px;
  flex-grow: 2;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
const Wrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`

const Controls = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`

const Name = styled.h3`
  font-size: 36px;
`

const Price = styled.p`
  color: ${yellow};
  font-family: serif;
  font-size: 24px;
  font-weight: bold;
`

const Button = styled.button`
  background-color: ${yellow};
  color: ${plum};
  font-family: sans;
  border: 1px solid rgb(0,0,0,0);
  width: 20px;
  border-radius: 20px;
  transition-property:background-color;
  transition-duration: 0.5s;
  transition-timing-function: ease-out;
  transition-delay: 0.05s;
  :hover {
    background-color: rgb(0,0,0,0);
    color: ${yellow};
    border: 1px solid ${yellow};
  }
`

function cartMaker (category, prodTotal) {
  console.log(category)
  let display = category.map((item) => {
    if (item.bag) {
      return (
        <ProductBlock key={"a"+item.id}>
          <ProductImg
            src={item.img}
            alt={`${item.name} picture`}
          />
          <InfoBox>
            <Wrap>
              <Name>{item.name}</Name>
              <p><sup>x</sup></p>
            </Wrap>
            <Wrap>
              <Controls>
                <Button id="cart-btn">-</Button>
                <p>{item.quantity}</p>
                <Button>+</Button>
              </Controls>
              <Price>{item.price.toFixed(2)} €</Price>
            </Wrap>
          </InfoBox>
        </ProductBlock>
      )
    }
    return undefined
  })
  return display
}

export default cartMaker
