// import { useContext } from "react"
// import { CounterContext } from "../context/CounterContext"
import ChangeCounter from "../components/ChangeCounter";

// 4 - Refatorando o context
import { useCounterContext } from "../hooks/useCounterContext";

function Home() {

  // const {counter} = useContext(CounterContext);

  const {counter} = useCounterContext();

  return (
    <div>
      <p>Home</p> 
      <p>O valor do contador é: {counter}</p>
      {/* / 3 - Alterando o context */}
      <ChangeCounter />
    </div>
    
  )
}

export default Home