import Artigo from './Artigo.jsx';
import { StyledConteudo } from '../styles/styles.js';

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