import displayProducts from "../components/products";
import Container from "../components/ProductsBox"

const Tarots = (prop) => {
  // see Herbs.js notes
  let products = displayProducts(prop.data.tarots, "", prop.addToBag)
  return (
    <Container className="page content-wrapper">
    {products}
    </Container>
  );
};

export default Tarots;