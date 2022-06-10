import displayProducts from "../components/productsMaker"
import Container from "../components/ProductsBox"

const Hats = (prop) => {
  // see Herbs.js notes
  let products = displayProducts(prop.data.hats, "1 pcs", prop.addToBag)
  return (
    <Container className="page content-wrapper">
    {products}
    </Container>
  );
};

export default Hats;