import styled from "styled-components"
import { plum, yellow } from "../interoperability/colors"

const Button = styled.button`
  width: 200px;
  background-color: ${yellow};
  color: ${plum};
  font-family: sans;
  border: 1px solid rgb(0,0,0,0);
  border-radius: 5px;
  padding: 6px;
  padding-bottom: 3px;
  margin-bottom: 30px;
  :hover {
    background-color: rgb(0,0,0,0);
    color: ${yellow};
    border: 1px solid ${yellow};
  }
`

export default Button