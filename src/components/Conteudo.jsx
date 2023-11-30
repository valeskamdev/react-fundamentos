import Artigo from './Artigo.jsx';

function Conteudo() {
  return(
    <main>
      <section>
        <h2>Conteúdo da aplicação</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa
          cumque, cupiditate
          explicabo facilis id laboriosam molestias mollitia pariatur quasi
          saepe sed voluptatum.
          Commodi cumque eaque earum facere itaque nihil porro?</p>

        <hr/>

        {/* Reaproveitamento de Componentes */}
        <Artigo />
        <Artigo />
        <Artigo />

      </section>
    </main>
  )
}

export default Conteudo;