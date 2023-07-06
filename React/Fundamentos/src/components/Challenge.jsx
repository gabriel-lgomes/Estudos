import React from 'react'

function Challenge() {

  const a = 13;
  const b = 12;  

  return (
    <div>
      <button onClick={() => console.log(a + b)}>Somar</button> 
      <p>A: {a}</p>
      <p>B: {b}</p>
    </div>
  )
}

export default Challenge