import styled from "styled-components"
import Footer from "../components/Footer"
import Featured from "../components/Featured"
import heroImg from "../img/home/hero.png"
import { plum, purple } from "../colors"

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
`

const SuggTitle = styled.p`
  font-family: sans;
  font-size: 32px;
  font-weight: semibold;
  text-transform: uppercase;
  color: ${plum};
`

const Home = () => {
  return (
    <div className="page">
      <Hero>
        <img
        src = { heroImg }
        alt = "spring sale: 20% off"
        height = "100%"
        />
      </Hero>
      <Suggest className="content-wrapper">
        <SuggBox style={{ "backgroundImage" : "url(\"http://placekitten.com/300/300\")" }}>
          <SuggTitle>new arrivals</SuggTitle>
        </SuggBox>
        <SuggBox style={{ "backgroundImage" : "url(\"http://placekitten.com/300/300\")" }}>
          <SuggTitle>preorder</SuggTitle>
        </SuggBox>
        <SuggBox style={{ "backgroundImage" : "url(\"http://placekitten.com/300/300\")" }}>
          <SuggTitle>sale</SuggTitle>
        </SuggBox>
      </Suggest>
      <Featured />
      <Footer />
    </div>
  );
};

export default Home;
