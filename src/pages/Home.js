import styled from "styled-components"
import Footer from "../components/Footer"
import Featured from "../components/Featured"
import heroImg from "../img/home/hero.webp"
import { dark, light, yellow } from "../interoperability/colors"

const Hero = styled.div`
  width: 100vw;
  height: 65vh;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain; 
  }
`
const Suggest = styled.div`
  min-height: 60vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
  padding: 20px;
  padding-top: 60px;
  padding-bottom: 60px;
  background-color: ${light};

  div {
    height: 230px;
    width: 230px;
    padding: 10px;
    color: ${light};
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url("https://raw.githubusercontent.com/p-vale/antro-ecommerce/main/src/img/home/sugg.webp");
    background-size: contain;
  }
  div:hover {
    color: ${yellow};
  }

  p {
    text-transform: uppercase;
    text-align: center;
    font-size: 34px;
  }
`
const Antro = styled.div`
  height: 60vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${light};
  color: ${dark};
  font-size: 30px;
  font-weight: 300;
`

const Home = () => {
  return (
    <div>
      <main className="page page-home">
        <Hero>
          <img
          src = { heroImg }
          alt = "spring sale: 20% off"
          />
        </Hero>
        <Suggest className="content-wrapper">
          <div>
            <p>new arrivals</p>
          </div>
          <div>
            <p>preorder</p>
          </div>
          <div>
            <p>sale</p>
          </div>
        </Suggest>
        <Featured />
        <Antro>
          <p>We are Antro.</p>
        </Antro>
      </main>
    <Footer />
    </div>
  );
};

export default Home;
