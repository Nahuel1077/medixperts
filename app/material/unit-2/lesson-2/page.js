'use client'
import Aside from "../../../components/aside";
import Class from "../../../components/class";
import { useAuth } from "../../../hooks/useAuth";

const lessonData = {
  id: "unit2-title",
  unitTitle: "Lesson 2: Service Modalities 🏥",
  description: null,
  nextLesson: "/material/unit-2/lesson-3/module-1",
  prevLesson: "/material/unit-2/lesson-1",
  restart: "/material/unit-2",
  courseNumber: 2,
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
        <div className="relative w-full"><iframe src="https://player.mediadelivery.net/embed/752312/6e9ffe2d-f3fd-43f9-9547-1b1e812872af?autoplay=false&loop=false&muted=false&preload=true&responsive=true" loading="lazy" className="h-auto w-full aspect-video" allow="accelerometer; gyroscope; autoplay; encrypted-media; fullscreen" allowFullScreen></iframe></div>
      </Class>
    </div>
  );
}