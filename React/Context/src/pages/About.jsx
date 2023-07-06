// import { useContext } from "react"
// import { CounterContext } from "../context/CounterContext"

// 4 - Refatorando o context
import { useCounterContext } from "../hooks/useCounterContext"; 

function About() {

  // const {counter} = useContext(CounterContext);
  const {counter} = useCounterContext();

  return (
    <div>
      <p>Sobre</p>
      <p>O valor do contador é: {counter}</p>
      
    </div>
  )
}

export default About