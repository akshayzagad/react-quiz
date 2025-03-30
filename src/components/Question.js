import Options from "./Options";

export default function Question({ questionIndex,dispatch,answer }) {
  return (
    <div>
      <h4>{questionIndex.question}</h4>
      <Options question={questionIndex} dispatch={dispatch} answer={answer}/>
    </div>
  );
}

