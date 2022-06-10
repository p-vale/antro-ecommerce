import styled from "styled-components"
import { pink, yellow } from "../interoperability/colors"
import Button from "../components/Button"
const size = "400px"

const Wrapper = styled.div`
  height: 100vh;
  color: ${yellow};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 50px;
`
const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
`

const Prompt = styled.input`
  width: ${size};
  border: none;
  border-bottom: 1px solid ${yellow};
  background-color: rgb(0, 0, 0, 0);
  color: white;
  padding-left: 5px;
  ::placeholder,
  ::-webkit-input-placeholder {
    color: ${pink};
    font-weight: 300;
    letter-spacing: 2px;
  }
  :-ms-input-placeholder {
     color: ${pink};
     font-weight: 300;
     letter-spacing: 2px;
  }
  :focus {
    outline: none;
  }
`

const Login = () => {
  return (
    <Wrapper>
    {/*No form nor actions because this is a fake login*/}
      <InputBox>
        <label htmlFor="mail">Email</label>
        <Prompt 
          type="text"
          id="mail"
          placeholder="youremail@domain.com"
        />
      </InputBox>
      <InputBox>
        <label htmlFor="password">Password</label>
        <Prompt 
          type="password"
          id="password"
          placeholder="*********"
        />
      </InputBox>
      <Button>LOG IN</Button>
    </Wrapper>
  );
};

export default Login;