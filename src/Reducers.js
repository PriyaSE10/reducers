import React, { useReducer } from "react";

function Reducers() {
  const initialState = 0;
  const reducer = (state, action) => {
    switch (action) {
      case "increment":
        return state + 1;
      case "decrement":
        return state - 1;
      case "reset":
        return initialState;
      default:
        return state;
    }
  };
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="container">
      <h1>Increment the value one by one..Count = {count}</h1>
      <div className="btn">
      <button style={{ color: "red" }} onClick={() => dispatch("increment")}>
        Increment
      </button>
      <button style={{ color: "green" }} onClick={() => dispatch("decrement")}>
        Decrement
      </button>
      <button style={{ color: "blue" }} onClick={() => dispatch("reset")}>
        Reset
      </button>
      </div>
    </div>
  );
}

export default Reducers;
