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
import Draft from "./components/Draft";
import Memocomp from "./components/Memocomp";
import CallbackMemo from "./components/CallbackMemo";
function App() {
  return (
    <div className="App">
      {/* <Counter />
      <Timer/> */}
      {/* <Conditional />
      <Form/>
      <List/>
      <UserSearch />
      <TimerWithEffect />
      < CountdownTimer />
      <CheatingDetect /> */}
      {/* <Draft />
      <Memocomp /> */}

      <CallbackMemo />
    </div>
  );
}

export default App;
