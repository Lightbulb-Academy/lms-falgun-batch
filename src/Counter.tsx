import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  // count - variable
  // setCount - function to update the variable
  // useState - hook to store the variable
  // useState(0) - state initialized with a value 0

  const updateCounter = () => {
    // setCount(count + 1); // 0 + 1
    // setCount(count + 1); // 0 + 1 = 1

    setCount((prev) => prev + 1); // 0 + 1
    setCount((prev) => prev + 1); // 1 + 1
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      // button to increment by 10 // button to reset counter
    </div>
  );
};

export default Counter;
