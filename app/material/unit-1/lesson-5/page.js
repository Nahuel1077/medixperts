'use client'
import Aside from "../../../components/aside";
import Class from "../../../components/class";
import LessonContent from "./content.mdx"; 
import { useAuth } from "../../../hooks/useAuth";
import { useQuizAttempt } from '../../../hooks/useQuizAttempt';
import { QuizProvider, useQuizContext } from "../../../hooks/QuizContext";

const lessonData = {
  id: "unit1-title",
  unitTitle: "Lesson 5: Quiz",
  description: null,
  nextLesson: "/material/",
  prevLesson: "/material/unit-1/lesson-4",
  restart: "/material/unit-1",
  courseNumber: 1,
  currentStep: 6,
  totalSteps: 6,
  lessonNumber: 5
};

function FinalButton() {
  const { answers } = useQuizContext();
  const { saveAttempt, loadingQuiz, error, success } = useQuizAttempt();

  const handleFinish = async () => {
    // Calculamos el puntaje basándonos en las respuestas guardadas en el contexto
    const correctCount = Object.values(answers).filter(Boolean).length;
    const score = (correctCount / 20) * 100;
    
    // Usamos el número de curso definido en lessonData
    const result = await saveAttempt(lessonData.courseNumber, score); 
    
    if (result?.success) {
      alert(`¡Puntaje guardado con éxito: ${score}%!`);
    }
  };

  return (
    <div className="flex flex-col items-center gap-4 mt-6">

      <button 
        onClick={handleFinish} 
        disabled={loadingQuiz}
        className="bg-green-900 font-bold text-white px-6 py-3 rounded-xl hover:bg-zinc-800 transition-all"
      >
        {loadingQuiz ? 'Guardando...' : 'Finalizar Quiz'}
      </button>

      {error && (
        <p className="text-red-500 text-center">
          {error}
        </p>
      )}

      {success && (
        <p className="text-green-500 text-center">
          Intento registrado correctamente.
        </p>
      )}

    </div>
  );
}

export default function Lesson5() {
  const { loading } = useAuth();

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="w-12 h-12 border-4 border-gray-300 border-t-black rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <QuizProvider>
      <div className="flex xl:flex-row flex-col bg-black min-h-screen">
        <Aside />
        <Class lessonData={lessonData}>
          <LessonContent />
          <FinalButton />
        </Class>
      </div>
    </QuizProvider>
  );
}