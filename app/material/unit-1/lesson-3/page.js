'use client'
import Aside from "../../../components/aside";
import Class from "../../../components/class";
import LessonContent from "./content.mdx"; 
import { useAuth } from "../../../hooks/useAuth";

const lessonData = {
  id: "unit3-title",
  unitTitle: "Lesson 3: The interpreter’s role in healthcare settings 🏥",
  description: null,
  nextLesson: "/material/unit-1/lesson-4",
  prevLesson: "/material/unit-1/lesson-2",
  restart: "/material/unit-1",
  courseNumber: 1,
  currentStep: 4,
  totalSteps: 6,
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
      </Class>
    </div>
  );
}