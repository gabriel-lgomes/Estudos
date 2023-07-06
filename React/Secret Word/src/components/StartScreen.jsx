import './StartScreen.css'

function StartScreen({startGame}) {
  return (
    <div className='start'>
      <h1>StartScreen</h1>
      <p>Clique no botão abaixo para iniciar o jogo</p>
      <button onClick={startGame}>Começar o jogo</button>
    </div>
  )
}

export default StartScreen