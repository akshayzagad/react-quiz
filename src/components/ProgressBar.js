import { useQuiz } from "../Context/QuizeContext"



export default function ProgressBar() {
  const {index,numQuestions,points,maxPosiblePoints,answer} = useQuiz();
  return (
    <header className="progress">
        <progress max={numQuestions} value={index + (answer !== null)}></progress>
      <p>
        Questions <strong>{index}</strong> / {numQuestions}
      </p>

      <p>
      Out of <strong>{points}</strong> / {maxPosiblePoints}
      </p>
    </header>
  )
}
