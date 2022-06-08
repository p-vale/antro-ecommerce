import displayProducts from "../components/products";
import Container from "../components/ProductsBox"

const Hats = (prop) => {
  // see Herbs.js notes
  let products = displayProducts(prop.data.hats, "", prop.addToBag)
  return (
    <Container className="page content-wrapper">
    {products}
    </Container>
  );
};

export default Hats;