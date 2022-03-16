import React, { useState } from "react";

function IncrementButtons() {
  const [count, setCount] = useState(0);
  const [lastPressed, setLastPressed] = useState(null);
  
  const handleClick = (label) => {
    if (label === "One") {
      setLastPressed(label);
      setCount((currCount) => currCount + 1);
      //console.log("One Pressed: " + count);
    } else if (label === "Two") {
      setLastPressed(label);
      setCount((currCount) => currCount + 1);
      setCount((currCount) => currCount + 1);
      //console.log("Two Pressed: " + count);
    }
  };
  return (
    <div>
      <h3>Last Pressed: {lastPressed}</h3>
      <h4>Count: {count}</h4>
      <button onClick={() => handleClick("One")}>One</button>
      <button onClick={() => handleClick("Two")}>Two</button>
    </div>
  );
}

export default IncrementButtons;
