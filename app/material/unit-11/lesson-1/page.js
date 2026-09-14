'use client'
import Aside from "../../../components/aside";
import Class from "../../../components/class";
import LessonContent from "./content.mdx"; 
import { useAuth } from "../../../hooks/useAuth";

const lessonData = {
  id: "unit11-title",
  unitTitle: "Lesson 1: Where to find job opportunities",
  description: null,
  nextLesson: "/material/unit-11/lesson-2",
  prevLesson: "/material/unit-11",
  restart: "/material/unit-11",
  courseNumber: 11,
  currentStep: 2,
  totalSteps: 5,
  lessonNumber: 1
};

export default function Lesson1() {
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