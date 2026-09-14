'use client'
import { useState } from "react";
import { useQuizContext } from '../hooks/QuizContext';

interface QuizProps {
  number: string;
  question: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
}

export default function Quiz({ 
  number,
  question, 
  options, 
  correctAnswer, 
  explanation,
}: QuizProps) {
  
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const { registerAnswer } = useQuizContext();

  const handleAnswer = (answer: string) => {
    setSelectedAnswer(answer);
    setShowExplanation(true);
    registerAnswer(number, answer === correctAnswer);
  };

  const isCorrect = selectedAnswer === correctAnswer;

  return (
    <div className="bg-zinc-900 border border-zinc-700 rounded-2xl p-8 my-10 max-w-2xl mx-auto">
      <h3 className="text-xl font-semibold text-white mb-6">{number}</h3>
      <h3 className="text-xl font-semibold text-white mb-6">{question}</h3>

      <div className="space-y-3 mb-6">
        {options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleAnswer(option)}
            className={`w-full text-left p-4 rounded-xl border transition-all
              ${selectedAnswer === option 
                ? isCorrect 
                  ? 'border-green-500 bg-green-900/30' 
                  : 'border-red-500 bg-red-900/30'
                : 'border-zinc-700 hover:border-zinc-500'
              }`}
            disabled={showExplanation}
          >
            {option}
          </button>
        ))}
      </div>

      {showExplanation && (
        <div className={`p-5 rounded-xl text-sm leading-relaxed
          ${isCorrect ? 'bg-green-900/30 border border-green-500' : 'bg-red-900/30 border border-red-500'}`}>
          <p className="font-medium mb-2">
            {isCorrect ? "✅ Correct!" : "❌ Incorrect"}
          </p>
          <p>{explanation}</p>
        </div>
      )}
    </div>
  );
}