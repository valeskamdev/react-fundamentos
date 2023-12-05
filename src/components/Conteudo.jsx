import Artigo from './Artigo.jsx';
import { StyledConteudo } from '../styles/styles.js';

// Importando os assets de imagem
import imagem1 from '../assets/abra-o-livro.png';
import imagem2 from '../assets/pilha-de-livros.png';
import imagem3 from '../assets/livro-magico.png';

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
          <Artigo imagem={imagem1} textoAlternativo="Livro aberto." icone ="🧙️" titulo="Senhor dos Anéis" descricao="Livro criado por Tokien" data={dataLancamento[0]} >
            <h4>Volumes</h4>

            <ul>
              <li>A Sociedade do Anél</li>
              <li>As Duas Torres</li>
              <li>O retorno do Rei</li>
            </ul>
          </Artigo>
          <Artigo imagem={imagem2}  textoAlternativo="Pilha de livros." icone ="🎮" titulo="Game Of Thrones" descricao="Aventura criada por George R. R. Martin" data={dataLancamento[1]} >
            <h4>Defuntos do livro</h4>

            <ol>
              <li>Eddard Stark</li>
              <li>Catelyn Stark</li>
              <li>Robb Stark</li>
              <li>Jon Snow</li>
            </ol>
          </Artigo>
          <Artigo imagem={imagem3}  textoAlternativo="Livro aberto saindo estrelas." icone ="👩‍💻"  titulo="HTML5 e CSS3" descricao="Livro de desenvolvimento web"  data={dataLancamento[2]} >
            <section>
              <h4>Assuntos</h4>

              <details>
                <summary>Estrutura</summary>
                <p>Tags de estruturação de página</p>
              </details>

              <details>
                <summary>Estilização</summary>
                <p>Tags de estilização de página</p>
              </details>
            </section>
          </Artigo>
        </div>

      </section>
    </StyledConteudo>
  )
}

export default Conteudo;