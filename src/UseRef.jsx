import React, { useState, useCallback, useRef, useEffect } from "react";
import "./App.css";

function Counter1() {
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
      <div
        style={{ display: "flex", justifyContent: "center", margin: "30px" }}
      >
        <input
          style={{
            color: "white",
            width: "200px",
            height: "30px",
            border: "2px solid white",
            borderRadius: "25px",
            color: "black",
            fontWeight: "bold",
            fontSize: "20px",
            backgroundColor: "black",
          }}
          ref={inputRef}
          type="text"
          placeholder="Focus on mount"
        />
      </div>
    </>
  );
}

export default Counter1;
