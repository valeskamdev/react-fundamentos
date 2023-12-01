import styled from 'styled-components';

const StyledMenu = styled.nav`
  height: 50px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  
  a {
    color: white;
    text-decoration: none;
  }
  
  a:hover {
    background-color: deeppink;
    color: black;
  }

`;
function Menu() {
  return(
    <StyledMenu>
      <a href="">Home</a>
      <a href="">Produtos</a>
      <a href="">Contato</a>
    </StyledMenu>
  )
}

export default Menu;