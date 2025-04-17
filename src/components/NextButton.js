import { useQuiz } from "../Context/QuizeContext";

export default function NextButton() {
  const { dispatch, answer,numQuestion,index } = useQuiz();
  if (answer === null) return;
    if(index< numQuestion-1)  return (
    <button
      className="btn btn-ui"
      onClick={() => dispatch({ type: "nextQuestion" })}
    >
      Next
    </button>
  );
  if(index === numQuestion-1)  return (
    <button
      className="btn btn-ui"
      onClick={() => dispatch({ type: "finish" })}
    >
      Submit
    </button>
  );
}
