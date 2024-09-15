import React, { useState, useCallback, useRef, useEffect } from "react";
import "./App.css";

function Counter() {
  const [count, setCount] = useState(0);
  const inputRef = useRef(null);

  const increment = useCallback(() => {
    setCount((prevCount) => {
      const newCount = prevCount + 1;
      if (inputRef.current) {
        inputRef.current.value = newCount;
      }
      return newCount;
    });
  }, []);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
      inputRef.current.style.backgroundColor = "orange";
    }
  }, []);

  return (
    <>
      <div className="count123">
        <h1>{count}</h1>
      </div>
      <div className="d">
        <div className="in" onClick={increment}>
          increment
        </div>
      </div>
    </>
  );
}

export default Counter;
