import styled from "styled-components"
import Footer from "../components/Footer"
import Featured from "../components/Featured"
import heroImg from "../img/home/hero.png"
import img0 from "../img/home/img-0.webp"
import { purple, pink } from "../interoperability/colors"

const Hero = styled.div`
  background-color: ${purple};
  width: 100vw;
  height: 60vh;
  display: flex;
  justify-content: center;
  align-items: center;
`
const Suggest = styled.div`
  height: 60vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const SuggBox = styled.div`
  height: 300px;
  width: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image : url(${img0});
  background-size: cover;
`
const SuggTitle = styled.p`
  max-width: 200px;
  text-transform: uppercase;
  text-align: center;
  color: ${pink};
  font-size: 34px;
  font-weight: bold;
`
const Antro = styled.div`
  height: 60vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  font-weight: 300;
`

const Home = () => {
  return (
    <div>
      <main className="page">
        <Hero>
          <img
          src = { heroImg }
          alt = "spring sale: 20% off"
          height = "100%"
          />
        </Hero>
        <Antro>
          <p>We are Antro.</p>
        </Antro>
        <Featured />
        <Suggest className="content-wrapper">
          <SuggBox>
            <SuggTitle>new arrivals</SuggTitle>
          </SuggBox>
          <SuggBox>
            <SuggTitle>preorder</SuggTitle>
          </SuggBox>
          <SuggBox>
            <SuggTitle>sale</SuggTitle>
          </SuggBox>
        </Suggest>
      </main>
    <Footer />
    </div>
  );
};

export default Home;
