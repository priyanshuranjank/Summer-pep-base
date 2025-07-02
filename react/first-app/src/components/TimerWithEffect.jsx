// import React, { useEffect, useState } from "react";

// function TimerWithEffect() {
//   const [status, setStatus] = useState("stop"); 
//   const [timer, setTimer] = useState(0);

//   useEffect(() => {
//     let intervalId;

//     if (status === "start") {
//       intervalId = setInterval(() => {
//         setTimer((prev) => prev + 1);
//       }, 1000);
//     }

//     return () => {
//       clearInterval(intervalId);
//     };
//   }, [status]);

//   const handleStart = () => setStatus("start");

//   const handlePause = () => setStatus("pause");

//   const handleStop = () => {
//     setStatus("stop");
//     setTimer(0);
//   };

//   return (
//     <main>
//       <h1>STOPWATCH: {timer}</h1>
      
//       <div>
//         <button onClick={handleStart}>Start</button>
//         <button onClick={handlePause}>Pause</button>
//         <button onClick={handleStop}>Reset</button>
//       </div>
//     </main>
//   );
// }

// export default TimerWithEffect;



///----------------------------------------++++++++++-------------------------------------------------------------



import React, { useEffect, useState } from "react";

function TimerWithEffect() {
  const [interval, setInter] = useState(null);
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    let inter = setInterval(() => {
      console.log("Hello from LPU");
      setTimer((prev) => prev + 1);
    }, 1000);

    console.log("hello");
    setInter(inter);

    return () => {
      clearInterval(inter);
    };
  }, []);

  const handleStop = (interval) => {
    clearInterval(interval);
    setInter(null);
  };

  return (
    <main>
      <h1>Stop Watch</h1>
      <h1>{timer}</h1>
      <button onClick={() => handleStop(interval)}>Stop</button>
    </main>
  );
}

export default TimerWithEffect;

// import React, { useEffect, useState } from "react";

// function TimerWithEffect() {
//   const [status, setStatus] = useState("stop");
//   const [interval, setInter] = useState(null);
//   const [timer, setTimer] = useState(0);

//   useEffect(() => {
//     if (status === "start") {
//       let interval = setInterval(() => {
//         setTimer((prev) => prev + 1);
//       }, 1000);

//       setInter(interval);
//     }

//     if (status === "stop") {
//       clearInterval(interval);
//       setInter(null);
//     }

//     if (status === "reset") {
//       setTimer(0);
//     }
//   }, [status]);

//   return (
//     <main>
//       <h1>Stop Watch</h1>
//       <h1>{timer}</h1>
//       <div>
//         <button onClick={() => setStatus("start")}>Start</button>
//         <button onClick={() => setStatus("stop")}>Stop</button>
//         <button onClick={() => setStatus("reset")}>Reset</button>
//       </div>
//     </main>
//   );
// }

// export default TimerWithEffect;
