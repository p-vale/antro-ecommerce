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

const Hats = (prop) => {
  // see Herbs.js notes
  let products = displayProducts(prop.data.hats, "500g")
  return (
    <div>
      <Container className="page content-wrapper">
      {products}
      </Container>
      <Footer />
    </div>
  );
};

export default Hats;