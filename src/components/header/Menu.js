import { Link } from 'react-router-dom';
import styled from "styled-components"
import { pink, brown, green } from "../../interoperability/colors"

const Nav = styled.nav`
  margin-right: 50px;
  display: flex;
  align-items: flex-end;
  gap: 30px;
  z-index: 3;

  a {
    font-size: 24px;
    text-decoration: none;
    font-family: 'Source Sans Pro', sans-serif;
    color: ${brown};
  }

  .menu--user {
      display: flex;
      gap: 15px;
    }

  @media only screen and (max-width: 800px)  {
    width: 200px;
    height: 80vh;
    padding: 50px;
    padding-top: 10vh;
    padding-bottom: 10vh;
    margin-right: 0px;
    position: fixed;
    top: 0;
    right: 0;
    background-color: ${pink};
    flex-flow: column nowrap;
    align-items: start;
    gap: 15px;

    transition: transform 0.3s ease-in;
    transform: ${({open}) => open ? 'translateX(0)' : 'translateX(100%)'};

    a {
      color: ${brown};
      border-bottom: 1px solid ${pink};
    }
    a:hover{
      border-bottom: 1px solid ${brown};
    }

    .menu--user {
      width: 100%;
      flex-direction: column;
    }

    .bottom {
      margin-top: auto;
    }
  }
  @media only screen and (max-width: 650px)  {
    font-size: 20px;
  }
`
const ProdLink = styled(Link)`
  border-bottom: 1px solid ${pink};
  :hover{
    border-bottom: 1px solid ${brown};
  }
`
const UserLink = styled(Link)`
  font-weight: 300;
  :hover{
    color: ${green};
  }
  @media only screen and (max-width: 800px)  {
    font-weight: 400;
    :hover{
      color: ${brown};
    }
  }
`

const Menu = (props) => {
  return(
    <Nav open={props.open}>
        <div className="menu--user">
        <ProdLink to="/herbs"> HERBS</ProdLink>
        <ProdLink to="/tarots">TAROTS</ProdLink>
        <ProdLink to="/hats">HATS</ProdLink>
        </div>
        <div className="menu--user bottom">
          <UserLink to="/login">LOG IN</UserLink>
          <UserLink to="/bag">BAG</UserLink>
        </div>
      </Nav>
  )
}

export default Menu