import displayProducts from "../components/products/productsMaker"
import Container from "../components/products/ProductsBox"

const Herbs = (prop) => {
  // P.N. the original object passed down
  // became the value of a prop object
  // to the key "data"
  let products = displayProducts(prop.data.herbs, "500g", prop.addToBag)
  return (
    <Container className="page content-wrapper">
    {products}
    </Container>
  );
};

export default Herbs;