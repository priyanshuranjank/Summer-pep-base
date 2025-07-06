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
import RedCounter from "./components/RedCounter";
import MultiRedCounter from "./components/MultiRedCounter";
import useCounter from "./components/useCounter";
import Parent from "./components/Parent";
import Products from "./components/Products";
import InternetConnection from "./components/InternetConnection";

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
      {/* <CallbackMemo />
      <RedCounter />
      <MultiRedCounter /> */}

     {/* <Parent /> */}
     {/* <Parent2 />
      */}
      <Products />
      <InternetConnection />
    </div>
  );
}

export default App;
