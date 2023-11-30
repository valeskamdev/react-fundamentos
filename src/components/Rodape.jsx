function Rodape() {
  const exemploEstilo = {
    backgroundColor: "lightblue",
    padding: "2%",
    color: "blue",
    border: "4px solid #f00"
  }

  return(
    <footer style={ exemploEstilo }>
      <h2 style={{textAlign: "center"}}>Rodapé da aplicação</h2>
      <p>Fundamentos de React</p>
      <p>Experimentando <b className="sombra">classes</b></p>
    </footer>
  )
}

export default Rodape;