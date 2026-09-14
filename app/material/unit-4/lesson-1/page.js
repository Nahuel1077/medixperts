'use client'
import Aside from "../../../components/aside";
import Class from "../../../components/class";
import { useAuth } from "../../../hooks/useAuth";
import Link from "next/link";

const lessonData = {
  id: "unit4-title",
  unitTitle: "Lesson 1: Understanding different accents",
  description: null,
  nextLesson: "/material/unit-4/lesson-2",
  prevLesson: "/material/unit-4",
  restart: "/material/unit-4",
  courseNumber: 4,
  currentStep: 2,
  totalSteps: 8,
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
        <div className="relative w-full"><iframe src="https://player.mediadelivery.net/embed/752312/e224dbb1-18b9-4756-9e42-aaa8a9114425?autoplay=false&loop=false&muted=false&preload=true&responsive=true" loading="lazy" className="h-auto w-full aspect-video" allow="accelerometer; gyroscope; autoplay; encrypted-media; fullscreen" allowFullScreen></iframe></div>
      </Class>
    </div>
  );
}