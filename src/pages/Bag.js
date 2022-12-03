import styled from "styled-components"
import { brownish, dusty, pink, green } from "../interoperability/colors"
import cartMaker from "../components/bag/cartMaker"
import calcOrderTotal from "../components/bag/calcOrderTotal"

const Container = styled.main`
  min-height : 80vh;
  padding-top: 50px;
  padding-bottom: 50px;
  display: flex;
  justify-content: space-between;
  @media only screen and (max-width: 1050px)  {
    flex-direction: column;
    gap: 20px;
    align-items: center;
  }
`
const Cart = styled.div`
  display: flex;
  flex-direction: column;
  width: 60vw;
  @media only screen and (max-width: 1050px)  {
    width: 100%;
  }
`
const Order = styled.div`
  margin-top: 80px;
  width: 20vw;
  height: 100%;
  border-radius: 5px;
  padding: 2%;
  background-color: ${dusty};
  color: ${brownish};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  @media only screen and (max-width: 1050px)  {
    width: 40vw;
    margin-top: 20px;
    > div {
    width: 400px;
  }
  }
  @media only screen and (max-width: 1000px)  {
    width: 80vw;
  }
  @media only screen and (max-width: 520px)  {
    > div {
    width: 300px;
  }
`
const ListBox = styled.div`
  display: flex;
  justify-content: space-between;
  min-width: 220px; /** otherwise it will be squished by parent flex */
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

  label {
    font-size: 10px;
  }
`
const Prompt = styled.input`
  width: 100%;
  border: none;
  border-bottom: 1px solid ${brownish};
  background-color: rgb(0, 0, 0, 0);
  color: ${brownish};
  padding-left: 5px;
  margin-bottom: 20px;
  ::placeholder,
  ::-webkit-input-placeholder {
    color: ${green};
    font-weight: 300;
  }
  :-ms-input-placeholder {
     color: ${green};
     font-weight: 300;
  }
  :focus {
    outline: ${brownish};
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
  background-color: ${brownish};
  color: ${pink};
  border: none;
  padding: 9px;
  :hover {
    color: ${green};
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
          <label htmlFor="name">Name on the Card</label>
          <Prompt 
            type="text"
            id="name"
            placeholder="Agatha Christie"
          />
        </InputBox>
        <InputBox>
          <label htmlFor="card">Card Number</label>
          <Prompt 
            type="number"
            id="card"
            placeholder="0000 0000 0000 0000"
          />
        </InputBox>
        <InputWrapper>
        <InputBox>
          <label htmlFor="expiration">Expiration Date</label>
          <Prompt 
            type="month"
            id="expiration"
            placeholder="month yyyy"
          />
        </InputBox>
        <InputBox>
          <label htmlFor="cvv">CVV</label>
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