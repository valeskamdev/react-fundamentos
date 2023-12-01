import Artigo from './Artigo.jsx';
import styled from 'styled-components';

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

function Conteudo() {
  return(
    <StyledConteudo>
      <section>
        <h2>Conteúdo da aplicação</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa
          cumque, cupiditate
          explicabo facilis id laboriosam molestias mollitia pariatur quasi
          saepe sed voluptatum.
          Commodi cumque eaque earum facere itaque nihil porro?</p>

        {/* Reaproveitamento de Componentes */}
        <div>
          <Artigo />
          <Artigo />
          <Artigo />
        </div>

      </section>
    </StyledConteudo>
  )
}

export default Conteudo;