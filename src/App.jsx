import React from "react";
import UseState from "./useState";
import UseEffect from "./useEffect";
import UseReducer from "./reducer";
import NameContextProvider from "./UserContext";
import Counter from "./UseCllBack";
import Counter1 from "./UseRef";

export default function App() {
  return (
    <NameContextProvider>
      <UseEffect />
      <UseReducer />
      <UseState />
      <Counter />
      <Counter1 />
    </NameContextProvider>
  );
}
