import React, { useState } from 'react'
import Counter from './Counter';
import Timer from './Timer';

// function Conditional() {
//   const [isUpdated, setIsUpdated] =  useState(false);
//   // const [isUpdated2, setIsUpdated2] =  useState(false);

//   const handleChange = () => {
//     // console.log("Clicked");
//     setIsUpdated(true);
//   };

//   return(
//     <main>
//       {/* {isUpdated ? <Counter/> : <Timer/>}   */}
//       {(() => {
//         if(isUpdated) <Counter />
//         else <Timer />
//       })()}
//       <br />
//       <button onClick={handleChange}>Click HERE!
//       </button>
//     </main>
//   )


//   // if(isUpdated){
//   //   return <Counter/>
//   // }else{
//   //   return <Timer/>
//   // }
// }

// export default Conditional;


//////////////////////////////////////////
function Conditional() {
  const [isCounter, setIsCounter] = useState(false);

  const handleChange = () => {
    setIsCounter(true);
  };
  //   if (isCounter) {
  //     return <Counter />;
  //   } else {
  //     return <Timer />;
  //   }

  return (
    <main>
      {/* {isCounter && <h1>Hello Lpu</h1>} */}
      {/* {isCounter ? <h1>Hello Lpu</h1> : <></>} */}
      {(() => {
        if(isCounter)  return <Counter />
        else return <Timer />
      })()}
      <button onClick={handleChange}>Click here</button>
    </main>
  );
}

export default Conditional;
