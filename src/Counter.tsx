import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  // count - variable
  // setCount - function to update the variable
  // useState - hook to store the variable
  // useState(0) - state initialized with a value 0
  // state - triggers re-render of the component on value change

  const updateCounter = () => {
    // setCount(count + 1); // 0 + 1
    // setCount(count + 1); // 0 + 1 = 1

    setCount((prev) => prev + 1); // 0 + 1
    setCount((prev) => prev + 1); // 1 + 1
  };

  return (
    <div>
      <p>Count: {count}</p>
      <div className="flex gap-4 justify-center">
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
        <button onClick={() => setCount(count + 10)}>Increment by 10</button>
        {/* display render button only if count is greater than 0 */}
        {count > 0 && <button onClick={() => setCount(0)}>Reset</button>}

        {/* TODO: limit counter value to 0-100 */}
      </div>
    </div>
  );
};

export default Counter;
