import "./App.css";
import React from "react";
import Counter from "./components/Counter";
import Timer from "./components/Timer";
import Conditional from "./components/Conditional";
import Form from "./components/Form";
import UserSearch from "./components/UserSearch";
import List from "./components/List"
import TimerWithEffect from "./components/TimerWithEffect";
import  CountdownTimer from "./components/CountDownTimer";
import CheatingDetect from "./components/CheatingDetect";
function App() {
  return (
    <div className="App">
      {/* <Counter />
      <Timer/> */}
      <Conditional />
      <Form/>
      <List/>
      <UserSearch />
      <TimerWithEffect />
      < CountdownTimer />
      <CheatingDetect />
    </div>
  );
}

export default App;
