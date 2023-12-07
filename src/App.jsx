import Cabecalho from './components/Cabecalho.jsx';
import Conteudo from './components/Conteudo.jsx';
import Rodape from './components/Rodape.jsx';
import Home from './pages/Home.jsx';
import Produtos from './pages/Produtos.jsx';
import Contato from './pages/Contato.jsx';
import Container from './components/Container.jsx';

function App() {
  return <>
    <Cabecalho />
    <Container>
      <Home />
      <Produtos />
      <Contato />
    </Container>
    <Rodape />
  </>;
}

export default App;