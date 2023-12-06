import { StyledArtigo } from '../styles/styles.js';
import { useState } from 'react';

function Artigo({ titulo, categoria, preco }) {
  const precoFormatado = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(preco);

  const COR_INICIAL = '#eac3f8';
  const COR_ALTERNATIVA = '#fff478';

  const [fundo, setFundo] = useState(COR_INICIAL);

  const mudarCorDeFundo = () => { setFundo(fundo === COR_INICIAL ? COR_ALTERNATIVA : COR_INICIAL) };

  return(
    <StyledArtigo style={{ backgroundColor: fundo }} onClick={ mudarCorDeFundo }>
      <h3>{ categoria }</h3>
      <p><b>Curso: </b>{ titulo }</p>
      <p><b>Preço: </b> { precoFormatado }</p>
    </StyledArtigo>
  );
}

export default Artigo;