import "./App.css";
// import './DateCounter.js'
import Header from "./Header.js";
import Main from "./Main.js";
import { useEffect, useReducer } from "react";
import Loader from "./Loader.js";
import Error from "./Error.js";
import StartScreen from "./StartScreen.js";
import Question from "./Question.js";

const initialState = {
  questions:[],
  status:"loading"
}

function reducer(state,action){
  switch (action.type) {
    case "dataReceived":
  return{
    ...state,questions:action.payload,status:"ready"
  }
  case "dataFailed":
    return{
      ...state,status:"Failed"
    }
    case "start":
    return{
      ...state,status:"active"
    }
    default:
      throw new Error("Action Unknown"); 
  }
}

function App() {
  const[{questions,status},dispatch] = useReducer(reducer,initialState)
  const numQuestion = questions.length;
  useEffect(function () {
    fetch("http://localhost:9000/questions")
      .then((res) => res.json())
      .then((data) => dispatch({type:"dataReceived",payload:data}))
      .catch((err) => dispatch({type:"dataFailed"}));
  }, []); // Add an empty dependency array to ensure it runs only once
  return (
    <div className="App">
      <Header />
      <Main>
       {status==="loading" && <Loader/>}
       {status==="error" && <Error/>}
       {status==="ready" && <StartScreen numQuestion={numQuestion} dispatch={dispatch}/>}
       {status==="active" && <Question/>}
      </Main>
    </div>
  );
}

export default App;
