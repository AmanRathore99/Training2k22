import React, { useState } from "react";
import "./style.css";
export default function Demo() {
  const [value, setValue] = useState(0);

  const Increment = () => {
    setValue((prevState) => prevState + 1);
  };

  const Decrement = () => {
    setValue(value - 1);
  };
  /**
   * Challenge: Set up state to track our count (initial value is 0)
   */
  return (
    <div className="counter">
      <button className="counter--minus" onClick={Decrement}>
        -
      </button>
      <div className="counter--count">
        <h1>{value}</h1>
      </div>
      <button className="counter--plus" onClick={Increment}>
        +
      </button>
    </div>
  );
}
