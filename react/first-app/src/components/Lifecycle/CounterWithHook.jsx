import React, { useEffect, useState } from "react";

function CounterWithHook() {
  const [update, setUpdate] = useState(false);

  console.log("Counter With Hook Rendered!");

  useEffect(() => {
    console.log("Compononent Mounted");
  }, []);

  return (
    <main>
      <h1>Counter</h1>
      <p>Hello Lpu</p>
      <button onClick={() => setUpdate((prev) => !prev)}>Render Component</button>
    </main>
  );
}

export default CounterWithHook;
