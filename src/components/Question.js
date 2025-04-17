import { useQuiz } from "../Context/QuizeContext";
import Options from "./Options";

export default function Question() {
  const{ questionIndex } = useQuiz();
  return (
    <div>
      <h4>{questionIndex.question}</h4>
      <Options />
    </div>
  );
}

