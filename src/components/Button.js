import styled from "styled-components"
import { brownish, green } from "../interoperability/colors"

const Button = styled.button`
  width: 200px;
  background-color: ${green};
  color: ${brownish};
  font-family: sans;
  border: 1px solid rgb(0,0,0,0);
  border-radius: 5px;
  padding: 6px;
  padding-bottom: 3px;
  margin-bottom: 30px;
  transition-property:background-color;
  transition-duration: 0.5s;
  transition-timing-function: ease-out;
  transition-delay: 0.05s;
  :hover {
    background-color: rgb(0,0,0,0);
    color: ${green};
    border: 1px solid ${green};
    cursor: pointer;
  }
`

export default Button
