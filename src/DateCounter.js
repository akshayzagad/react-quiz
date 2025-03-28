import { useState } from "react";
import "./App.css";
export function DateCounter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);
  const date = new Date();
  date.setDate(date.getDate() + count);
  console.log(date);

  function dec() {
    setCount((count) => count - step);
  }

  function inc() {
    setCount((count) => count + step);
  }

  function handleCount(e) {
    setCount(Number(e.target.value));
  }

  function handleStep(e) {
    setStep(Number(e.target.value));
  }

  const reset = function () {
    setCount(0);
    setStep(1);
  };

  return (
    <div className="counter">
      <div>
        <input
          type="range"
          min={0}
          max={10}
          value={step}
          onChange={handleStep}
        ></input>
        <span>{step}</span>
      </div>
      <div>
        <button onClick={dec}>-</button>
        <input type="text" value={count} onChange={handleCount}></input>
        <button onClick={inc}>+</button>
      </div>
      <p>{date.toDateString()}</p>
      <div>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}
