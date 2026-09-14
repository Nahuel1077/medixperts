'use client'
import Aside from "../../../components/aside";
import Class from "../../../components/class";
import { useAuth } from "../../../hooks/useAuth";
import Link from "next/link";

const lessonData = {
  id: "unit7-title",
  unitTitle: "Lesson 5: Cultural Awareness",
  description: "",
  nextLesson: "/material/unit-7/lesson-6",
  prevLesson: "/material/unit-7/lesson-4",
  restart:"/material/unit-7",
  courseNumber: 7,
  currentStep: 6,
  totalSteps: 9, 
  lessonNumber: 5
};

export default function Lesson5() {
  const { user, loading } = useAuth();

  if (loading) {return <div className="flex justify-center items-center h-screen">
    <div className="w-12 h-12 border-4 border-gray-300 border-t-black rounded-full animate-spin"></div>
    </div>
  };
  return (
    <div className="flex xl:flex-row flex-col bg-black min-h-screen">
      <Aside />
      <Class lessonData={lessonData}>
        <div className="relative w-full"><iframe src="https://player.mediadelivery.net/embed/752312/33cb96fa-63ef-48f9-9b57-abe43f63f59a?autoplay=false&loop=false&muted=false&preload=true&responsive=true" loading="lazy" className="h-auto w-full aspect-video" allow="accelerometer; gyroscope; autoplay; encrypted-media; fullscreen" allowFullScreen></iframe></div>
      </Class>
    </div>
  );
}