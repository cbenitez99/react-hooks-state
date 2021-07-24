import React, { useState } from "react"; //importing {useState} function from React
//It's a React hook because we are hooking into reacts internal state

// function Counter() {
//   const [count, setCount] = useState(0);

//   function increment() {
//     setCount(count + 1);
//   }

//   return <button onClick={increment}>I have been clicked {count} times</button>;
// }

function Counter() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount((currentCount) => currentCount + 1);
    setCount((currentCount) => currentCount + 1);
  } 

  return <div onClick={increment}>{count}</div>;
} 

export default Counter;
