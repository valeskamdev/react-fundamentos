import styled from 'styled-components';

function Container({ children }) {
  return <StyledContainer>{ children }</StyledContainer>;
}

const StyledContainer = styled.main`
  width: 90vw;
  margin: 1rem auto;
  background-color: aliceblue;
  padding: 20px;
  box-shadow: 0 0 1px inset darkblue;

  h2, p {
    padding: 0.2rem 0;
  }
`;

export default Container;