'use client'
import Aside from "../../../../components/aside";
import Class from "../../../../components/class";
import { useAuth } from "../../../../hooks/useAuth";
import Link from "next/link";

const lessonData = {
  id: "unit5-title",
  unitTitle: "Lesson 2 - Part 1: Proper Names",
  description: null,
  nextLesson: "/material/unit-5/lesson-2/part-2",
  prevLesson: "/material/unit-5/lesson-1/part-7",
  restart: "/material/unit-5",
  courseNumber: 5,
  currentStep: 2,
  totalSteps: 4,
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
        <div className="relative w-full"><iframe src="https://player.mediadelivery.net/embed/752312/8954eeed-bb23-4101-8d2e-f59393069571?autoplay=false&loop=false&muted=false&preload=true&responsive=true" loading="lazy" className="h-auto w-full aspect-video" allow="accelerometer; gyroscope; autoplay; encrypted-media; fullscreen" allowFullScreen></iframe></div>
      </Class>
    </div>
  );
}