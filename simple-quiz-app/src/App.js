import { useState } from "react";

const questions = [
  { question: "Capital of France?", options: ["Berlin", "Madrid", "Paris", "Rome"], answer: "Paris" },
  { question: "2 + 2?", options: ["3", "4", "5", "6"], answer: "4" }
];

export default function App() {
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const handleAnswer = (option) => {
    if (option === questions[index].answer) setScore(score + 1);
    if (index + 1 < questions.length) setIndex(index + 1);
    else setFinished(true);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 p-4">
      {finished ? (
        <h1 className="text-2xl font-bold">Score: {score}/{questions.length}</h1>
      ) : (
        <div className="text-center">
          <h1 className="text-xl font-bold mb-4">{questions[index].question}</h1>
          {questions[index].options.map((opt, i) => (
            <button key={i} onClick={() => handleAnswer(opt)} className="m-2 p-2 border rounded">
              {opt}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
