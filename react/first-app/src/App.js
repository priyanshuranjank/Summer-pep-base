import "./App.css";
import React from "react";
import Counter from "./components/Counter"; 
import Timer from "./components/Timer"; 

function App() {
  return (
    <div className="App">
      <Counter />  
      <Timer/>
    </div>
  );
}

export default App;


{/* // function App() {
//   const name = "Munit";
//   return (
//     <div className="App">
//       <Greet studentName={name} college={"Lpu"} branch={"CSE"} />
//     </div>
//   );
// }

export default App;
 */}


//  React hooks -  special function of react
// - state,

// Rendering - changes on real Dom when changes makes on virtual Dom

// State - memory components
// -mutable
// -store data that can change over time- when changes, components re-render
// -two primary mechanisms
// --props and state

// useState
// -stateVariable - current state value
// --setStateFunction - func to update the value
