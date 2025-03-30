import { useReducer, useState } from "react";
import "./App.css";

const initialState = {count:0,step:1};

function reducer (state,action){
  console.log(state,action);
  switch(action.type){
    case "dec" :
      return {...state,count:state.count - state.step};
      case "inc" :
      return {...state,count:state.count + state.step};
      case "defineCount" :
      return {...state,count:action.payload};
      case "setStep":
      return {...state,step:action.payload};
      case "reset":
      return initialState;  
    default:
      throw new Error("Action is not valid");      
  }
}

export function DateCounter() {
  const[state,disPatch]= useReducer(reducer,initialState);
  const {count,step} = state;
  const date = new Date();
  date.setDate(date.getDate() + count);
  console.log(date); 

  function dec() {
    disPatch({type:"dec",payload:-1});
  }

  function inc() {
    disPatch({type:"inc",payload:1})
  }

  function handleDefineCount(e) {
    disPatch({type:"defineCount",payload:Number(e.target.value)})
  }

  function handleStep(e) {
    disPatch({type:"setStep",payload:Number(e.target.value)})
  }

  const reset = function () {
    disPatch({type:"reset"})
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
