'use client'
import Aside from "../../../components/aside";
import Class from "../../../components/class";
import { useAuth } from "../../../hooks/useAuth";
import Link from "next/link";

const lessonData = {
  id: "unit3-title",
  unitTitle: "Lesson 6: Essential Interpreter Protocols & Scripts + Extra Practice",
  description: null,
  nextLesson: "/material/unit-3/lesson-7",
  prevLesson: "/material/unit-3/lesson-5",
  restart: "/material/unit-3",
  courseNumber: 3,
  currentStep: 7,
  totalSteps: 8,
  lessonNumber: 6
};

export default function Lesson6() {
  const { user, loading } = useAuth();

  if (loading) {return <div className="flex justify-center items-center h-screen">
    <div className="w-12 h-12 border-4 border-gray-300 border-t-black rounded-full animate-spin"></div>
    </div>
  };
  return (
    <div className="flex xl:flex-row flex-col bg-black min-h-screen">
      <Aside />
      <Class lessonData={lessonData}>
        <Link href="https://drive.google.com/uc?export=download&id=1RcKxhvOsNfC-serLccvj6c3qdcQuKV61" 
              className="download-btn text-center">Click here to download this lesson.</Link>
      </Class>
    </div>
  );
}