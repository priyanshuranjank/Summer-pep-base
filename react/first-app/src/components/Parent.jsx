import React from "react";
import useCounter from "./useCounter";
//using custom hooks
function Parent (){
  const {count,  increamentCounter, decreamentCounter, resetCounter} = useCounter(0);

  return(
    <div>
      <h1>Parent Component</h1>
      <h2>{count}</h2>

      <button onClick={increamentCounter}> Increase by 1 </button>
      <button onClick={decreamentCounter}> Decresde by 1 </button>
      <button onClick={resetCounter}> Reset </button>
    </div>
  )
}

export default Parent;