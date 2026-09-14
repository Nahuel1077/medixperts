'use client'
import Aside from "../../../components/aside";
import Class from "../../../components/class";
import { useAuth } from "../../../hooks/useAuth";

const lessonData = {
  id: "lesson1-title",
  unitTitle: "Lesson 1: What medical interpreting is (and what it is NOT)",
  description: null,
  nextLesson: "/material/unit-1/lesson-2",
  prevLesson: "/material/unit-1",
  restart: "/material/unit-1",
  courseNumber: 1,
  currentStep: 2,
  totalSteps: 6,
  lessonNumber: 1,
};

export default function Lesson1() {
  const { user, loading } = useAuth();

  if (loading) {return <div className="flex justify-center items-center h-screen">
    <div className="w-12 h-12 border-4 border-gray-300 border-t-black rounded-full animate-spin"></div>
    </div>
  };
    return(
        <div className="flex xl:flex-row flex-col bg-amber-200">
            <Aside/>
            <Class lessonData={lessonData}>
              <div className="relative w-full"><iframe src="https://player.mediadelivery.net/embed/752312/8c8a8ee9-4368-400f-b244-fbe18c1b6352?autoplay=false&loop=false&muted=false&preload=true&responsive=true" loading="lazy" className="h-auto w-full aspect-video" allow="accelerometer; gyroscope; autoplay; encrypted-media; fullscreen" allowFullScreen></iframe></div>
            </Class>
        </div>
    )
}