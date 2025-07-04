

import React, { useReducer } from "react";

const initialValue = 0;
const initialValue2 = 0;

const reducer = (state, action) => {
  switch (action) {
    case "increament":
      return state + 1;
    case "decreament":
      return state - 1;
    case "reset":
      return 0;
    default:
      return state;
  }
};

function MultiRedCounter() {
  const [count, dispatch] = useReducer(reducer, initialValue);
  const [count2, dispatch2] = useReducer(reducer, initialValue2);
  return (
    <main>
      <h1>{count}</h1>
      <button onClick={() => dispatch("increament")}>Increament by 1</button>
      <button onClick={() => dispatch("decreament")}>Decreament by 1</button>
      <button onClick={() => dispatch("reset")}>Reset</button>
      <h1>{count2}</h1>
      <button onClick={() => dispatch2("increament")}>Increament by 1</button>
      <button onClick={() => dispatch2("decreament")}>Decreament by 1</button>
      <button onClick={() => dispatch2("reset")}>Reset</button>
    </main>
  );
}

export default MultiRedCounter;
