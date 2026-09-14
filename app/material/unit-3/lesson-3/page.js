'use client'
import Aside from "../../../components/aside";
import Class from "../../../components/class";
import LessonContent from "./content.mdx"; 
import { useAuth } from "../../../hooks/useAuth";

const lessonData = {
  id: "unit3-title",
  unitTitle: "Lesson 3: Note-taking (different techniques and methods)📝",
  description: null,
  nextLesson: "/material/unit-3/lesson-4",
  prevLesson: "/material/unit-3/lesson-2",
  restart: "/material/unit-3",
  courseNumber: 3,
  currentStep: 4,
  totalSteps: 8,
  lessonNumber: 3
};

export default function Lesson3() {
  const { user, loading } = useAuth();

  if (loading) {return <div className="flex justify-center items-center h-screen">
    <div className="w-12 h-12 border-4 border-gray-300 border-t-black rounded-full animate-spin"></div>
    </div>
  };
  return (
    <div className="flex xl:flex-row flex-col bg-black min-h-screen">
      <Aside />
      <Class lessonData={lessonData}>
        <LessonContent />
        <h1 className="text-xl text-center pt-8 pb-8">Click NEXT to continue to the following lesson!</h1>
      </Class>
    </div>
  );
}