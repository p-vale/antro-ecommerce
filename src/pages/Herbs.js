import styled from "styled-components"
import displayProducts from "../components/Products";
import Footer from "../components/Footer"

const Container = styled.div`
  padding-top: 100px;
  padding-bottom: 100px;
  display: flex;
  flex-wrap: wrap;
  gap: 60px 60px;
`

const Herbs = (prop) => {
  // P.N. the original object passed down
  // became the value of a prop object
  // to the key "data"
  let products = displayProducts(prop.data.herbs, "500g", prop.addToBag)
  return (
    <div>
      <Container className="page content-wrapper">
      {products}
      </Container>
      <Footer />
    </div>
  );
};

export default Herbs;