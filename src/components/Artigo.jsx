import styled from 'styled-components';

const StyledArtigo = styled.article`
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  background-color: #EAC3F8FF;
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
`;


function Artigo() {
  return(
    <StyledArtigo>
      <h3>Artigo 1</h3>
      <p>Conteúdo do artigo 1...</p>
    </StyledArtigo>
  )
}

export default Artigo;