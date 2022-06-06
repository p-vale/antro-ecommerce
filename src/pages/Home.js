import styled from "styled-components"
import Footer from "../components/Footer"
import Featured from "../components/Featured"
import heroImg from "../img/home/hero.png"
import { plum, purple } from "../interoperability/colors"

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
  background-image : url("http://placekitten.com/300/300");
`
const SuggTitle = styled.p`
  font-family: sans;
  font-size: 32px;
  font-weight: semibold;
  text-transform: uppercase;
  color: ${plum};
`
const Antro = styled.div`
  height: 60vh;
  display: flex;
  justify-content: center;
  align-items: center;
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
        <Featured />
        <Antro>
          <h2>We are Antro.</h2>
        </Antro>
      </main>
    <Footer />
    </div>
  );
};

export default Home;
