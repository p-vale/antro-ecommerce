import styled from "styled-components"
import { pinkBg, yellow } from "../interoperability/colors"

const ProductBlock = styled.div`
  padding-top: 50px;
  padding-bottom: 50px;
  border-bottom: 1px solid ${pinkBg};
  display: flex;
`
const ProductImg = styled.img`
  height: 200px;
  width: 200px;
`
const InfoBox = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
`
const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
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

function cartMaker (category, prodTotal) {
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
              <p>x</p>
            </Wrap>
            <Wrap>
              <div>
                <p>-</p>
                <p>1</p>
                <p>+</p>
              </div>
              <Price>{item.price.toFixed(2)} €</Price>
            </Wrap>
          </InfoBox>
        </ProductBlock>
      )
    }
  })
  return display
}

export default cartMaker
