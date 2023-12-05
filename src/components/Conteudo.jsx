import Artigo from './Artigo.jsx';
import { StyledConteudo } from '../styles/styles.js';

function Conteudo() {
  const dataLancamento = ["02/07/2005", "21/02/2011", "30/11/2014"];
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
          <Artigo icone ="🧙️" titulo="Senhor dos Anéis" descricao="Livro criado por Tokien" data={dataLancamento[0]} />
          <Artigo icone ="🎮" titulo="Game Of Thrones" descricao="Aventura criada por George R. R. Martin" data={dataLancamento[1]} />
          <Artigo icone ="👩‍💻"  titulo="HTML5 e CSS3" descricao="Livro de desenvolvimento web"  data={dataLancamento[2]} />
        </div>

      </section>
    </StyledConteudo>
  )
}

export default Conteudo;