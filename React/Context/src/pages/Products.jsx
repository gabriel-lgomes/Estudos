// import { useContext } from "react"
// import { CounterContext } from "../context/CounterContext"

// 4 - Refatorando o context
import { useCounterContext } from "../hooks/useCounterContext";

// 5 - Context mais complexo
import { useTitleColorContext } from "../hooks/useTitleColorContext";

function Products() {

  // const {counter} = useContext(CounterContext);
  const {counter} = useCounterContext();

  // 5 - Context mais complexo
  const {color} = useTitleColorContext();

  return (
    <div>
      <h1 style={{color: color}}>Products</h1>
      <p>O valor do contador é: {counter}</p>
    </div>
  )
}

export default Products