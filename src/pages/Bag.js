import styled from "styled-components"
import { plum, pinkBg, pink, yellow } from "../interoperability/colors"
import cartMaker from "../components/cartMaker"
import calcOrderTotal from "../components/calcOrderTotal"

const Container = styled.main`
  padding-top: 50px;
  padding-bottom: 50px;
  display: flex;
  justify-content: space-between;
`
const Cart = styled.div`
  display: flex;
  flex-direction: column;
  width: 60vw;
`
const Order = styled.div`
  max-width: 320px;
  width: 20vw;
  height: 100%;
  border-radius: 5px;
  padding: 2%;
  background-color: ${pinkBg};
  color: ${plum};
  display: flex;
  flex-direction: column;
  gap: 30px;
`
const ListBox = styled.div`
  display: flex;
  justify-content: space-between;
`
const ListTitle = styled.h3`
  font-size: 20px;
  font-weight: 400;
  text-align: center;
  margin-bottom: 20px;
`
const ListEl = styled.p`
  font-weight: 300;
  margin-bottom: 10px;
  max-width: 25vw;
`
const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
`
const Label = styled.label`
  font-size: 10px;
`
const Prompt = styled.input`
  width: 100%;
  border: none;
  border-bottom: 1px solid ${plum};
  background-color: rgb(0, 0, 0, 0);
  color: ${plum};
  padding-left: 5px;
  margin-bottom: 20px;
  ::placeholder,
  ::-webkit-input-placeholder {
    color: ${yellow};
    font-weight: 300;
  }
  :-ms-input-placeholder {
     color: ${yellow};
     font-weight: 300;
  }
  :focus {
    outline: ${plum};
  }
`
const InputWrapper = styled.div`
  display: flex;
  gap: 20%;
  align-items: flex-end;
`
const BuyButton = styled.button`
  align-self: center;
  border-radius: 5px;
  background-color: ${plum};
  color: ${pink};
  border: none;
  padding: 9px;
  padding-bottom: 6px;
  :hover {
    color: ${yellow};
    cursor: pointer;
  }
`

const Bag = (prop) => {
  let data = prop.data
  let remove = prop.remove
  let minus = prop.minus
  let plus = prop.plus
  let herbs = cartMaker(data.herbs, remove, minus, plus)
  let hats = cartMaker(data.hats, remove, minus, plus)
  let tarots = cartMaker(data.tarots, remove, minus, plus)
  let total = calcOrderTotal(data)
  let shipping = 0.00
  // empty arr is truthy -> need to specify length
  if (herbs.length > 0 || hats.length > 0 || tarots.length > 0) shipping = 5.00

  return (
    <Container className="page content-wrapper">
      <Cart>
        {herbs}
        {hats}
        {tarots}
      </Cart>
      <Order>
        <div>
          <ListTitle>ORDER</ListTitle>
          <ListBox>
            <ListEl>Products total</ListEl>
            <p>{total.toFixed(2)} €</p>
          </ListBox>
          <ListBox>
            <ListEl>Shipping</ListEl>
            <p>{shipping.toFixed(2)} €</p>
          </ListBox>
          <ListBox>
            <ListEl>Total</ListEl>
            <p>{(total + shipping).toFixed(2)} €</p>
          </ListBox>
        </div>
        <div>
        <ListTitle>CARD</ListTitle>
        <InputBox>
          <Label htmlFor="name">Name on the Card</Label>
          <Prompt 
            type="text"
            id="name"
            placeholder="Agatha Christie"
          />
        </InputBox>
        <InputBox>
          <Label htmlFor="card">Card Number</Label>
          <Prompt 
            type="number"
            id="card"
            placeholder="0000 0000 0000 0000"
          />
        </InputBox>
        <InputWrapper>
        <InputBox>
          <Label htmlFor="expiration">Expiration Date</Label>
          <Prompt 
            type="month"
            id="expiration"
            placeholder="month yyyy"
          />
        </InputBox>
        <InputBox>
          <Label htmlFor="cvv">CVV</Label>
          <Prompt 
            type="number"
            id="cvv"
            placeholder="000"
          />
        </InputBox>
        </InputWrapper>
        </div>
        <BuyButton>CHECKOUT</BuyButton>
      </Order>
    </Container>
  );
};

export default Bag;