import styled from "styled-components"
import { plum, pink, yellow } from "../interoperability/colors"

let prodTotal = 0
let shipping = 5.00

// CART
const Cart = styled.div`
  display: flex;
  flex-direction: column;
`

const ProductBlock = styled.div`
  padding-top: 50px;
  padding-bottom: 50px;
  border-bottom: 1px solid ${pink};
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

//ORDER
const Order = styled.div`
  background-color: ${pink};
  color: ${plum};
  border-radius: 10px;
  padding: 20px;
  display: flex;
  flex-direction: column;
`

function cartMaker (category) {
  let display = category.map((item) => {
    if (item.bag) {
      prodTotal += item.price
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
// iterate items
// if item.bag
// display element
// add to prodTotal

const Bag = (prop) => {
  let data = prop.data
  let herbs = cartMaker(data.herbs)
  let hats = cartMaker(data.hats)
  let tarots = cartMaker(data.tarots)
  let total = prodTotal + shipping
  console.log(prodTotal)

  return (
    <div className="page content-wrapper">
      {/*Your Cart*/}
      <Cart>
        {herbs}
        {hats}
        {tarots}
      </Cart>
      <Order>
        <p>{total.toFixed(2)}</p>
      </Order>
    </div>
  );
};

export default Bag;