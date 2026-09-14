'use client';

import { useState } from 'react';

export function useQuizAttempt() {
  const [loadingQuiz, setLoadingQuiz] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const saveAttempt = async (unit, score) => {
    setLoadingQuiz(true);
    setError(null);
    setSuccess(false);

    try {
      const token = localStorage.getItem('token');
      
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/courses/quiz-attempt`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({ unit, score }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || 'Error al guardar el intento');
      }

      setSuccess(true);
      return data; // Retorna la respuesta por si el componente necesita hacer algo extra

    } catch (err) {
      console.error(err);
      setError(err.message);
      return null;
    } finally {
      setLoadingQuiz(false);
    }
  };

  return { saveAttempt, loadingQuiz, error, success };
}