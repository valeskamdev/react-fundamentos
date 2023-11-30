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
    </footer>
  )
}

export default Rodape;