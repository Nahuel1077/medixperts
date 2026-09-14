'use client'
import Aside from "../../../components/aside";
import Class from "../../../components/class";
import LessonContent from "./content.mdx"; 
import { useAuth } from "../../../hooks/useAuth";

const lessonData = {
  id: "unit10-title",
  unitTitle: "Lesson 2: Ideal Workspace Setup",
  description: null,
  nextLesson: "/material/unit-10/lesson-3",
  prevLesson: "/material/unit-10/lesson-1",
  restart: "/material/unit-10",
  courseNumber: 10,
  currentStep: 3,
  totalSteps: 5,
  lessonNumber: 2
};

export default function Lesson2() {
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