
export default function ProgressBar({index,numQuestions,points,maxPosiblePoints,answer}) {
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
