import displayProducts from "../components/products/productsMaker"
import Container from "../components/products/ProductsBox"

const Tarots = (prop) => {
  // see Herbs.js notes
  let products = displayProducts(prop.data.tarots, "1 pcs", prop.addToBag)
  return (
    <Container className="page content-wrapper">
    {products}
    </Container>
  );
};

export default Tarots;