import "./App.css";
import React from "react";

import Greet from "./components/Greet";

function App() {
  const name = "Munit";
  return (
    <div className="App">
      <Greet studentName={name} college={"Lpu"} branch={"CSE"} />
    </div>
  );
}

export default App;

