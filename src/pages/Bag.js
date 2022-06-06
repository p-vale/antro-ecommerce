import styled from "styled-components"
import { plum, pinkBg } from "../interoperability/colors"
import cartMaker from "../components/cartMaker"
import calcOrderTotal from "../components/calcOrderTotal"
let shipping = 5.00

const Cart = styled.div`
  display: flex;
  flex-direction: column;
`
const Order = styled.div`
  background-color: ${pinkBg};
  color: ${plum};
  border-radius: 10px;
  padding: 20px;
  display: flex;
  flex-direction: column;
`

const Bag = (prop) => {
  let data = prop.data
  let herbs = cartMaker(data.herbs)
  let hats = cartMaker(data.hats)
  let tarots = cartMaker(data.tarots)
  let total = calcOrderTotal(data)

  return (
    <div className="page content-wrapper">
      {/*Your Cart*/}
      <Cart>
        {herbs}
        {hats}
        {tarots}
      </Cart>
      <Order>
        <p>{total + shipping}</p>
      </Order>
    </div>
  );
};

export default Bag;