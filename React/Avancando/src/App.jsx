import './App.css'
import ChallengeCss from "./components/ChallengeCss"
import Persons from "./components/Persons"

function App() {  
  
  const users = [
    {id: 1, name: 'Gabriel', idade:26, profissao: 'Programador'},
    {id: 2, name: 'Lucas', idade:17, profissao: 'Estudante'},
    {id: 3, name: 'Matheus', idade:30, profissao: 'Bombeiro'},
  ]

  const cars = [
    {id: 1, marca: 'fiat', modelo: 'Toro', km: '120.000', novo: false},
    {id: 2, marca: 'honda', modelo: 'civic', km: '0', novo: true},
    {id: 3, marca: 'ford', modelo: 'Fusion', km: '60.000', novo: false},
   ]

  return (
    <>
       {users.map((user) => (
          <Persons key={user.id} name={user.name} idade={user.idade} profissao={user.profissao} />
       ))}

       {cars.map((car) => (
         <ChallengeCss key={car.id} car={car} />
       ))}
        
    </>
  )
}

export default App
