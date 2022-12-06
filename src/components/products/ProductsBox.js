import styled from "styled-components"
import { pink } from "../../interoperability/colors"

const Container = styled.div`
background-color: ${pink};
  padding-top: 100px;
  padding-bottom: 100px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 50px;
  justify-items: center;

  @media only screen and (max-width: 650px) {
    padding-top: 80px; /* smaller header */
  }
`
export default Container
