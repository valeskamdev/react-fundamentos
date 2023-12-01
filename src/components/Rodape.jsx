import styled from 'styled-components';

const StyledRodape = styled.footer`
  background-image: linear-gradient(to right top, #919ff6, #b6a9f7, #d3b5f7, #eac3f8, #fdd2fa);
  height: 30vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function Rodape() {
  return(
    <StyledRodape>
      <h2>Rodapé da aplicação</h2>
    </StyledRodape>
  )
}

export default Rodape;