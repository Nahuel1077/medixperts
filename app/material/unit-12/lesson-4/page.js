'use client'
import Aside from "../../../components/aside";
import Class from "../../../components/class";
import { useAuth } from "../../../hooks/useAuth";
import Link from "next/link";

const lessonData = {
  id: "unit12-title",
  unitTitle: "Lesson 4: Long-Term Career Sustainability",
  description: null,
  nextLesson: "/material/unit-12/lesson-5",
  prevLesson: "/material/unit-12/lesson-3",
  restart: "/material/unit-12",
  courseNumber: 12,
  currentStep: 5,
  totalSteps: 6,
  lessonNumber: 4
};

export default function Lesson4() {
  const { user, loading } = useAuth();

  if (loading) {return <div className="flex justify-center items-center h-screen">
    <div className="w-12 h-12 border-4 border-gray-300 border-t-black rounded-full animate-spin"></div>
    </div>
  };
  return (
    <div className="flex xl:flex-row flex-col bg-black min-h-screen">
      <Aside />
      <Class lessonData={lessonData}>
        <div className="relative w-full"><iframe src="https://player.mediadelivery.net/embed/752312/3d4b28c7-4b4f-4441-81b5-7246cf6d87b6?autoplay=false&loop=false&muted=false&preload=true&responsive=true" loading="lazy" className="h-auto w-full aspect-video" allow="accelerometer; gyroscope; autoplay; encrypted-media; fullscreen" allowFullScreen></iframe></div>
      </Class>
    </div>
  );
}