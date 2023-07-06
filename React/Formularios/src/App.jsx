import MyForm from "./components/MyForm"


function App() { 
  return (
    <> 
      <MyForm user={{name: 'Gabriel', email: 'gabriel_lopes.g@hotmail.com', bio: 'Eu sou um programador', role: 'admin'}} /> 
    </>
  )
}

export default App
