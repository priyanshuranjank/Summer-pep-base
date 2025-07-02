import React, { useState, useEffect } from "react";

function CheatingDetect() {
  const [change, setChange] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      alert("⚠️ GOLI BETA MASTI NAHIIIIII!");
      console.log("Window resized...");
    };

    window.addEventListener("resize", handleResize);


    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <main>
      {/* <button onClick={() => setChange((prev) => !prev)}>Add</button> */}
    </main>
  );
}

export default CheatingDetect;
