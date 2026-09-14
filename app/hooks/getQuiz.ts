'use client';

import { useEffect, useState } from 'react';

export function GetQuiz() {
  const [quizAttempts, setQuizAttempts] = useState([]);
  const [average, setAverage] = useState(0);
  const [loadingQuizAttempts, setLoadingQuizAttempts] = useState(true);
  const [quizError, setQuizError] = useState(null);

  const getQuizAttempts = async () => {
    setLoadingQuizAttempts(true);
    setQuizError(null);

    try {
      const token = localStorage.getItem('token');

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/courses/quiz-attempts`,
        {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        }
      );

      const data = await res.json();

      if (!res.ok) {
        throw new Error(
          data.message || 'Error al obtener los resultados de los quizzes'
        );
      }

      setQuizAttempts(data);
      console.log("quizzes:", data);

      // Calcular promedio
      if (data.length > 0) {
        const total = data.reduce(
          (sum, quiz) => sum + Number(quiz.score),
          0
        );

        const averageScore = total / data.length;

        setAverage(Number(averageScore.toFixed(1)));
      } else {
        setAverage(0);
      }

    } catch (err) {
      console.error(err);
      setQuizError(err.message);
    } finally {
      setLoadingQuizAttempts(false);
    }
  };

  useEffect(() => {
    getQuizAttempts();
  }, []);

  return {
    quizAttempts,
    average,
    loadingQuizAttempts,
    quizError,
    getQuizAttempts,
  };
}