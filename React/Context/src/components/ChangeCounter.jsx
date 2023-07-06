// 3 - Alterando o context
import { useContext } from "react"
import { CounterContext } from "../context/CounterContext"

function ChangeCounter() {

  const {counter, setCounter} = useContext(CounterContext);

  return (
    <button onClick={() => setCounter(counter + 1)}>Add value to counter</button>
  )
}

export default ChangeCounter