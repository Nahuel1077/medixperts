'use client'
import Aside from "../../components/aside";
import Class from "../../components/class";
import LessonContent from "./content.mdx";
import { useAuth } from "../../hooks/useAuth";

const lessonData = {
  id: "unit4-title",
  unitTitle: "UNIT 4: Communication & Challenging Situations ⚠️",
  description: "(Handling real-world pressure and complex human interactions)",
  nextLesson: "/material/unit-4/lesson-1",
  prevLesson: "/material",
  restart:"/material/unit-4",
  courseNumber: 4,
  currentStep: 1,
  totalSteps: 8,
};

export default function Unit4() {
    const { user, loading } = useAuth();
    
      if (loading) {return <div className="flex justify-center items-center h-screen">
        <div className="w-12 h-12 border-4 border-gray-300 border-t-black rounded-full animate-spin"></div>
        </div>
      };
    return(
        <div className="flex xl:flex-row flex-col bg-black">
            <Aside/>
            <Class lessonData={lessonData}>
                <LessonContent />
            </Class>
        </div>
    )
}