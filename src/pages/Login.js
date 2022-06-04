import styled from "styled-components"
import { plum, pink, yellow } from "../colors"
const size = "400px"

const Wrapper = styled.div`
  height: 100vh;
  color: ${yellow};
  font-family: sans;
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

const Promp = styled.input`
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
  }
  :-ms-input-placeholder {
     color: ${pink};
     font-weight: 300;
  }
  :focus {
    outline: ${pink};
  }
`

const Button = styled.button`
  width: 150px;
  background-color: ${yellow};
  color: ${plum};
  font-family: sans;
  border: none;
  border-radius: 5px;
  padding: 6px;
  padding-bottom: 3px;
  margin-bottom: 30px;
  :hover {
    background-color: ${pink};
  }
`

const Login = () => {
  return (
    <Wrapper>
    {/*No form because this is a fake login*/}
      <InputBox>
        <label htmlFor="mail">Email</label>
        <Promp 
          type="text"
          id="mail"
          placeholder="youremail@domain.com"
        />
      </InputBox>
      <InputBox>
        <label htmlFor="password">Password</label>
        <Promp 
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