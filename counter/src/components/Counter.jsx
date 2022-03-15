import React, { useState } from 'react'


function Counter() {
 
  const [count, setCount] = useState(0)

  const add =()=>{
      setCount(count+1)
  }
  const sub=()=>{
      setCount(count-1)
  }
  const dob=()=>{
      setCount(count*2)
  }
 
  return (
    <>
      <h1>Count:{count}</h1>
      <button onClick={add}>+</button>
      <button onClick={sub}>-</button>
      <button onClick={dob}>Double</button>
    </>
  );
}

export default Counter