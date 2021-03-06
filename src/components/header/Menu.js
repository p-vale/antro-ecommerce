import { Link } from 'react-router-dom';
import styled from "styled-components"
import { plum, pinkBg, pink, yellow } from "../../interoperability/colors"

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
    width: 200px;
    height: 85vh;
    padding: 50px;
    padding-top: 100px;
    margin-right: 0px;
    position: fixed;
    top: 0;
    right: 0;
    background-color: ${pinkBg};
    flex-flow: column nowrap;
    align-items: start;
    gap: 15px;

    transition: transform 0.3s ease-in;
    transform: ${({open}) => open ? 'translateX(0)' : 'translateX(100%)'};

    a {
      color: ${plum};
      border-bottom: 1px solid ${pinkBg};
    }
    a:hover{
      border-bottom: 1px solid ${plum};
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
  border-bottom: 1px solid ${plum};
  :hover{
    border-bottom: 1px solid ${pink};
  }
`
const UserLink = styled(Link)`
  font-weight: 300;
  :hover{
    color: ${yellow};
  }
  @media only screen and (max-width: 800px)  {
    font-weight: 400;
    :hover{
      color: ${plum};
    }
  }
`

const Menu = (props) => {
  return(
    <Nav open={props.open}>
        <div class="menu--user">
        <ProdLink to="/herbs"> HERBS</ProdLink>
        <ProdLink to="/tarots">TAROTS</ProdLink>
        <ProdLink to="/hats">HATS</ProdLink>
        </div>
        <div class="menu--user bottom">
          <UserLink to="/login">LOG IN</UserLink>
          <UserLink to="/bag">BAG</UserLink>
        </div>
      </Nav>
  )
}

export default Menu