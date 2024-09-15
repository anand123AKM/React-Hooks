import React, { useEffect, useContext } from "react";
import "./App.css";
import { useState } from "react";
import { NameContext } from "./UserContext";

export default function UseEffect() {
  const name = useContext(NameContext);
  const initialCount = 10;
  const [count, setCount] = useState(initialCount);
  const [text, setText] = useState("");
  const [name1, setName] = useState("");

  useEffect(() => {
    setText("Welcome to Hooks: useEffect");
    const timer = setTimeout(() => {
      setText("");
    }, 3000);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    setName("AKM");
    const timer = setTimeout(() => {
      setName(name);
    }, 3000);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      <div className="c">
        <div>
          <h1>
            <span className="useff">{text}</span>
          </h1>
          <span className="name">{name1}</span>
        </div>
        <div>
          <h1 className="count">{count}</h1>
        </div>
        <div className="d">
          <div className="in" onClick={() => setCount(count + 1)}>
            increment
          </div>
        </div>
      </div>
    </>
  );
}
