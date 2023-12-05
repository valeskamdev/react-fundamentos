import styled from 'styled-components';

const StyledRodape = styled.footer`
  background-image: linear-gradient(to right top, #919ff6, #b6a9f7, #d3b5f7, #eac3f8, #fdd2fa);
  height: 30vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledMenu = styled.nav`
  height: 50px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  a {
    color: white;
    text-decoration: none;
    width: 30%;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: transform 100ms;
    
    // & -> referência ao seletor pai (a)
    &:hover {
      background-color: pink;
      color: black;
      transform: scale(1.05);
    }
  }
`;

const StyledConteudo = styled.main`
  width: 90vw;
  margin: 1rem auto;
  background-color: aliceblue;
  padding: 10px;
  box-shadow: 0 0 1px inset darkblue;
  
  h2, p {
    padding: 0.2rem 0;
  }

  section {
    div {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 1rem;
    }

    @media (max-width: 650px) {
      div {
        grid-template-columns: 1fr;
        gap: 0;
      }
    }
  }
`;

const StyledArtigo = styled.article`
  box-shadow: rgba(9, 30, 66, 0.25) 0px 1px 1px, rgba(9, 30, 66, 0.13) 0px 0px 1px 1px;
  border-radius: 10px;
  background-color: rgba(234, 195, 248, 0.56);
  padding: 1rem;
  margin: 0.5rem 0;

  h3 {
    color: #303d7c;
    border-bottom: 1px solid #919FF6FF;
    border-bottom-width: thick;
  }

  p {
    font-size: 1.1rem;
  }

  .centralizar {
    text-align: center;
  }
`;

const StyledSection = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 1rem;
  
  @media (max-width: 650px) {
    grid-template-columns: 1fr;
    row-gap: 1rem;
  }
`;

export { StyledRodape, StyledMenu, StyledConteudo, StyledArtigo, StyledSection }
