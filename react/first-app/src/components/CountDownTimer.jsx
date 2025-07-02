import React, { useState, useEffect } from "react";

function CountdownTimer() {
  const [input, setInput] = useState(60);     // Default input in seconds
  const [timeLeft, setTimeLeft] = useState(0);
  const [status, setStatus] = useState("stop"); // "start", "pause", "stop"

  useEffect(() => {
    let intervalId;

    if (status === "start" && timeLeft > 0) {
      intervalId = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    }

    if (timeLeft === 0) {
      clearInterval(intervalId);
      setStatus("stop");
    }

    return () => clearInterval(intervalId);
  }, [status, timeLeft]);

  const handleStart = () => {
    if (timeLeft === 0) setTimeLeft(input); // Load time from input only if timeLeft is 0
    setStatus("start");
  };

  const handlePause = () => {
    setStatus("pause");
  };

  const handleStop = () => {
    setStatus("stop");
    setTimeLeft(0);
  };

  return (
    <main style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Countdown Timer</h1>
      <input
        type="number"
        value={input}
        onChange={(e) => setInput(Number(e.target.value))}
        disabled={status === "start"}
        min="1"
      />
      <h2>{timeLeft} seconds</h2>
      <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
        <button onClick={handleStart}>Start</button>
        <button onClick={handlePause}>Pause</button>
        <button onClick={handleStop}>Reset</button>
      </div>
    </main>
  );
}

export default CountdownTimer;
