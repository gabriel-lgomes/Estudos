// import { useContext } from "react"
// import { CounterContext } from "../context/CounterContext"
import ChangeCounter from "../components/ChangeCounter";

// 4 - Refatorando o context
import { useCounterContext } from "../hooks/useCounterContext";

// 5 - Context mais complexo
import { useTitleColorContext } from "../hooks/useTitleColorContext";

function Home() {

  // const {counter} = useContext(CounterContext);
  const {counter} = useCounterContext();

  // 5 - Context mais complexo
  const {color, dispatch} = useTitleColorContext();

  // 6 - Alterando context complexo
  const setTitleColor = (color) => {
    dispatch({type: color});
  };

  return (
    <div>
      <h1 style={{color: color}}>Home</h1> 
      <p>O valor do contador é: {counter}</p>
      {/* / 3 - Alterando o context */}
      <ChangeCounter />
      {/* 6 - Alterando context complexo */}
      <div>
        <button onClick={() => setTitleColor("RED")}>Vermelho</button>
        <button onClick={() => setTitleColor("BLUE")}>Azul</button>
      </div>
    </div>
    
  )
}

export default Home