'use client'
import Aside from "../../../components/aside";
import Class from "../../../components/class";
import { useAuth } from "../../../hooks/useAuth";

const lessonData = {
  id: "lesson2-title",
  unitTitle: "Lesson 2: Difference between translation and interpretation",
  description: null,
  nextLesson: "/material/unit-1/lesson-3",
  prevLesson: "/material/unit-1/lesson-1",
  restart: "/material/unit-1",
  courseNumber: 1,
  currentStep: 3,
  totalSteps: 6,
  lessonNumber: 2,
};

export default function Lesson2() {
  const { user, loading } = useAuth();

  if (loading) {return <div className="flex justify-center items-center h-screen">
    <div className="w-12 h-12 border-4 border-gray-300 border-t-black rounded-full animate-spin"></div>
    </div>
  };
    return(
        <div className="flex xl:flex-row flex-col bg-black">
            <Aside/>
            <Class lessonData={lessonData}>
              <div className="relative w-full"><iframe src="https://player.mediadelivery.net/embed/752312/096ff7c3-03e3-40d7-893e-c355cd56318f?autoplay=false&loop=false&muted=false&preload=true&responsive=true" loading="lazy" className="h-auto w-full aspect-video" allow="accelerometer; gyroscope; autoplay; encrypted-media; fullscreen" allowFullScreen></iframe></div>
            </Class>
        </div>
    )
}