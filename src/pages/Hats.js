import displayProducts from "../components/products";
import Footer from "../components/Footer"
import Container from "../components/ProductsBox"

const Hats = (prop) => {
  // see Herbs.js notes
  let products = displayProducts(prop.data.hats, "", prop.addToBag)
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