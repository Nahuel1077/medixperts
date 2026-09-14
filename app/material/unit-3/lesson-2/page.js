'use client'
import Aside from "../../../components/aside";
import Class from "../../../components/class";
import { useAuth } from "../../../hooks/useAuth";

const lessonData = {
  id: "unit3-title",
  unitTitle: "Lesson 2: Short-term memory techniques",
  description: null,
  nextLesson: "/material/unit-3/lesson-3",
  prevLesson: "/material/unit-3/lesson-1",
  restart: "/material/unit-3",
  courseNumber: 3,
  currentStep: 3,
  totalSteps: 8,
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
        <div className="relative w-full"><iframe src="https://player.mediadelivery.net/embed/752312/f7abe137-04b3-442c-b7fc-3bf3a328a79d?autoplay=false&loop=false&muted=false&preload=true&responsive=true" loading="lazy" className="h-auto w-full aspect-video" allow="accelerometer; gyroscope; autoplay; encrypted-media; fullscreen" allowFullScreen></iframe></div>
      </Class>
    </div>
  );
}