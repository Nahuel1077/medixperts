'use client';

import { useEffect, useState } from 'react';

export function useCourses() {
  const [progress, setProgress] = useState([]);
  const [finalScore, setFinalScore] = useState(null);
  const [loadingCourses, setLoadingCourses] = useState(true);
  const [error, setError] = useState(null);
  const [total, setTotal] = useState(0);
  const [completed, setCompleted] = useState(0);

  useEffect(() => {
    const getCourses = async () => {
      try {
        const token = localStorage.getItem('token');

        const res = await fetch('http://localhost:3001/api/courses', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!res.ok) {
          throw new Error('Error al obtener los cursos');
        }

        const data = await res.json();

        
        if (data && data.length > 0){
          const item = data[0];
          const sum = (
            item.course_1 + item.course_2 + item.course_3 + item.course_4 + 
            item.course_5 + item.course_6 + item.course_7 + item.course_8 + 
            item.course_9 + item.course_10 + item.course_11 + item.course_12
          ) / 12;
          setTotal(sum);
          const count = Object.values(item).filter(value => value === 100).length;
          setCompleted(count);
        }
        
        setProgress(data);

        if (data.length > 0) {
          setFinalScore(data[0].final_test);
        }
      } catch (err) {
        console.error(err);
        setError(err.message);
      } finally {
        setLoadingCourses(false);
      }
    };

    getCourses();
  }, []);

  return {
    progress,
    finalScore,
    loadingCourses,
    error,
    total,
    completed,
  };
}