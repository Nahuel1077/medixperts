'use client'
import Aside from "../../components/aside";
import Class from "../../components/class";
import LessonContent from "./content.mdx"; 
import { useAuth } from "../../hooks/useAuth";

const lessonData = {
  id: "unit1-title",
  unitTitle: "UNIT 1: Introduction to Medical Interpreting 🧭",
  description: "(Understanding the profession and your role from day one)",
  content: `
    <h2>Introduction</h2>
    <p>In this unit you'll learn...</p>
  `,
  videoUrl: "https://youtube.com/...",
  resources: [
    { name: "Lista de agencias", url: "/" },
    { name: "Plantilla de CV", url: "/" }
  ],
  duration: "45 min",
  nextLesson: "/material/unit-1/lesson-1",
  prevLesson: "/material",
  restart: "/material/unit-1",
  courseNumber: 1,
  currentStep: 1,
  totalSteps: 6,
};

export default function Unit1() {
  const { user, loading } = useAuth();

  if (loading) {return <div className="flex justify-center items-center h-screen">
    <div className="w-12 h-12 border-4 border-gray-300 border-t-black rounded-full animate-spin"></div>
    </div>
  };
  return(
    <div className="flex xl:flex-row flex-col bg-black">
      <Aside/>
        <Class lessonData={lessonData}>
          <LessonContent className="text-justify"/>
        </Class>
    </div>
  )
}