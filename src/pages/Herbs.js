import displayProducts from "../components/products";
import Footer from "../components/Footer"
import Container from "../components/ProductsBox"

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