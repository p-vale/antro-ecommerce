import styled from "styled-components"
import Footer from "../components/Footer"
import Featured from "../components/Featured"
import heroImg from "../img/home/hero.png"
import { purple, pink, yellow } from "../interoperability/colors"

const Hero = styled.div`
  background-color: ${purple};
  width: 100vw;
  min-height: 65vh;
  display: flex;
  justify-content: center;
  align-items: center;
`
const Suggest = styled.div`
  min-height: 60vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
`
const SuggBox = styled.div`
  height: 230px;
  width: 230px;
  padding: 10px;
  border: 2px solid ${pink};
  color: ${pink};
  display: flex;
  justify-content: center;
  align-items: center;
  :hover {
    border-color: ${yellow};
    color: ${yellow};
  }
`
const SuggTitle = styled.p`
  text-transform: uppercase;
  text-align: center;
  font-size: 34px;
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
          <p>We are Antro.</p>
        </Antro>
      </main>
    <Footer />
    </div>
  );
};

export default Home;
