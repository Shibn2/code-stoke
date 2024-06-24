import React, { useState, useCallback } from "react";

const ParentComponent = () => {
  const [count, setCount] = useState(0);

  // Without useCallback: handleIncrement is recreated on every render
  // const handleIncrement = () => {
  //     setCount(count + 1);
  // };

  // With useCallback: memoize handleIncrement
  const handleIncrement = useCallback(() => {
    setCount(count + 1);
  }, [count]); // Dependency array ensures handleIncrement is recreated only when count changes

  return (
    <div>
      <h2>Count: {count}</h2>
      <ChildComponent onIncrement={handleIncrement} />
    </div>
  );
};

const ChildComponent = React.memo(({ onIncrement }) => {
  console.log("ChildComponent rendered");
  return <button onClick={onIncrement}>Increment</button>;
});

export default ParentComponent;
