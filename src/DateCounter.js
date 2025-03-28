import { useReducer, useState } from "react";
import "./App.css";

function reducer (state,action){
  if(action.type === "inc") return state + action.payload;
  if(action.type === "dec") return state + action.payload;
  if(action.type === "defineCount") return action.payload;
}

export function DateCounter() {
  // const [count, setCount] = useState(0);
  // const [step, setStep] = useState(1);
  
  const[state,disPatch]= useReducer(reducer,0);
  const initialState = {count:0,step:1};
  const {count,step} = state;
  const date = new Date();
  date.setDate(date.getDate() + count);
  console.log(date);

  function dec() {
    disPatch({type:"dec",payload:-1});
    // setCount((count) => count - step);
  }

  function inc() {
    disPatch({type:"inc",payload:1})
    // setCount((count) => count + step);
  }

  function handleDefineCount(e) {
    disPatch({type:"defineCount",payload:Number(e.target.value)})
    // setCount(Number(e.target.value));x
  }

  function handleStep(e) {
    setStep(Number(e.target.value));
  }

  const reset = function () {
    // setCount(0);
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
        <input type="text" value={count} onChange={handleDefineCount}></input>
        <button onClick={inc}>+</button>
      </div>
      <p>{date.toDateString()}</p>
      <div>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}
