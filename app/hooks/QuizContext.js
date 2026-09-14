import { createContext, useContext, useState } from 'react';

const QuizContext = createContext();

export function QuizProvider({ children }) {
  const [answers, setAnswers] = useState({});

  const registerAnswer = (id, isCorrect) => {
    setAnswers(prev => ({ ...prev, [id]: isCorrect }));
  };

  return (
    <QuizContext.Provider value={{ answers, registerAnswer }}>
      {children}
    </QuizContext.Provider>
  );
}

export const useQuizContext = () => useContext(QuizContext);