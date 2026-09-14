'use client'
import Aside from "../../../components/aside";
import Class from "../../../components/class";
import Link from "next/link";
import { useAuth } from "../../../hooks/useAuth";

const lessonData = {
  id: "unit9-title",
  unitTitle: "Lesson 5: The Training Phase",
  description: null,
  nextLesson: "/material/unit-9/lesson-6",
  prevLesson: "/material/unit-9/lesson-4",
  restart:"/material/unit-9",
  courseNumber: 9,
  currentStep: 6,
  totalSteps: 10,
  lessonNumber: 5
};

export default function Lesson5() {
    const { user, loading } = useAuth();
    
      if (loading) {return <div className="flex justify-center items-center h-screen">
        <div className="w-12 h-12 border-4 border-gray-300 border-t-black rounded-full animate-spin"></div>
        </div>
      };
    return(
        <div className="flex xl:flex-row flex-col bg-black">
            <Aside/>
            <Class lessonData={lessonData}>
                <div className="relative w-full"><iframe src="https://player.mediadelivery.net/embed/752312/53ca1862-1c69-4f22-aefd-280db47c2e83?autoplay=false&loop=false&muted=false&preload=true&responsive=true" loading="lazy" className="h-auto w-full aspect-video" allow="accelerometer; gyroscope; autoplay; encrypted-media; fullscreen" allowFullScreen></iframe></div>
            </Class>
        </div>
    )
}