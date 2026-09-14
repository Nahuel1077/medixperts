'use client'
import Aside from "../../../components/aside";
import Class from "../../../components/class";
import LessonContent from "./content.mdx"; 
import { useAuth } from "../../../hooks/useAuth";
import { useQuizAttempt } from '../../../hooks/useQuizAttempt';
import { QuizProvider, useQuizContext } from "../../../hooks/QuizContext";

const lessonData = {
  id: "unit2-title",
  unitTitle: "Lesson 7: Quiz",
  description: null,
  nextLesson: "/material/",
  prevLesson: "/material/unit-2/lesson-6",
  restart: "/material/unit-2",
  courseNumber: 2,
  currentStep: 8,
  totalSteps: 8,
  lessonNumber: 7
};

function FinalButton() {
  const { answers } = useQuizContext();
  const { saveAttempt, loadingQuiz } = useQuizAttempt();

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
    <button 
      onClick={handleFinish} 
      disabled={loadingQuiz}
      className="bg-green-900 font-bold text-white px-6 py-3 rounded-xl mt-6 hover:bg-zinc-800 transition-all"
    >
      {loadingQuiz ? 'Guardando...' : 'Finalizar Quiz'}
    </button>
  );
}

export default function Lesson7() {
  const { loading } = useAuth();

  if (loading) {return <div className="flex justify-center items-center h-screen">
      <div className="w-12 h-12 border-4 border-gray-300 border-t-black rounded-full animate-spin"></div>
    </div>
  };
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