import { Link } from 'react-router-dom';
import styled from "styled-components"
import { plum, pink, yellow } from "../../interoperability/colors"

const Nav = styled.nav`
  margin-right: 50px;;
  display: flex;
  align-items: flex-end;
  gap: 30px;
  border-bottom: 1px solid ${plum};
  z-index: 3;

  a {
    font-size: 24px;
    text-decoration: none;
    font-family: 'Source Sans Pro', sans-serif;
    color: ${pink};
  }

  .menu--user {
      display: flex;
      gap: 15px;
    }

  @media only screen and (max-width: 800px)  {
    flex-flow: column nowrap;
    align-items: start;
    gap: 15px;
    background-color: ${pink};
    margin-right: 0px;
    position: fixed;
    top: 0;
    right: 0;
    height: 85vh;
    width: 200px;
    padding: 50px;
    padding-top: 100px;

    transition: transform 0.3s ease-in;
    transform: ${({open}) => open ? 'translateX(0)' : 'translateX(100%)'};

    a {
      color: ${plum};
    }

    .menu--user {
      margin-top: auto;
      flex-direction: column;
    }
  }
  @media only screen and (max-width: 650px)  {
    font-size: 20px;
  }
`
const ProdLink = styled(Link)`
  border-bottom: 1px solid ${plum};
  :hover{
    border-bottom: 1px solid ${pink};
  }
  @media only screen and (max-width: 800px)  {
    border-bottom: 1px solid ${pink};
    :hover{
    border-bottom: 1px solid ${plum};
  }
  }
`
const UserLink = styled(Link)`
  font-weight: 300;
  :hover{
    color: ${yellow};
  }
  @media only screen and (max-width: 800px)  {
    font-weight: 400;
    border-bottom: 1px solid ${pink};
    
    :hover{
      color: ${plum};
      border-bottom: 1px solid ${plum};
    }
  }
`

const Menu = (props) => {
  return(
    <Nav open={props.open}>
        <ProdLink to="/herbs"> HERBS</ProdLink>
        <ProdLink to="/tarots">TAROTS</ProdLink>
        <ProdLink to="/hats">HATS</ProdLink>
        <div class="menu--user">
          <UserLink to="/login">LOG IN</UserLink>
          <UserLink to="/bag">BAG</UserLink>
        </div>
      </Nav>
  )
}

export default Menu