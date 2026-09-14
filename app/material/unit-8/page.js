'use client'
import Aside from "../../components/aside";
import Class from "../../components/class";
import { useAuth } from "../../hooks/useAuth";
import LessonContent from "./content.mdx";

const lessonData = {
  id: "unit8-title",
  unitTitle: "UNIT 8: Guided Practice🎧",
  description: "(Building confidence through highly realistic medical interpreting simulations across the most common healthcare specialties.)",
  nextLesson: "/material/unit-8/lesson-1",
  prevLesson: "/material",
  restart:"/material/unit-8",
  courseNumber: 8,
  currentStep: 1,
  totalSteps: 1,
};

export default function Unit8() {
    const { user, loading } = useAuth();
    
      if (loading) {return <div className="flex justify-center items-center h-screen">
        <div className="w-12 h-12 border-4 border-gray-300 border-t-black rounded-full animate-spin"></div>
        </div>
      };
    return(
        <div className="flex xl:flex-row flex-col bg-black">
            <Aside/>
            <Class lessonData={lessonData}>
                <LessonContent/>
            </Class>
        </div>
    )
}