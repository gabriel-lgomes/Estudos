

function Persons({name, idade, profissao}) {
  return ( 
    <div>
      <p>Nome: {name}</p>
      <p>Idade: {idade}</p>
      <p>Profissao: {profissao}</p>
      {idade >= 18 ? <p style={{color: 'green'}}>Habilitação permitida!</p> : <p style={{color: 'red'}}>Habilitação não permitida!</p>}
      <hr />
    </div>    
  )
}

export default Persons