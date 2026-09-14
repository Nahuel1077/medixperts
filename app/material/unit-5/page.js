'use client'
import Aside from "../../components/aside";
import Class from "../../components/class";
import LessonContent from "./content.mdx";
import { useAuth } from "../../hooks/useAuth";

const lessonData = {
  id: "unit5-title",
  unitTitle: "UNIT 5: Basic Medical and Non-Medical Terminology 🗣️",
  description: "(Handling real-world pressure and complex human interactions)",
  nextLesson: "/material/unit-5/lesson-1/part-1",
  prevLesson: "/material",
  restart:"/material/unit-5",
  courseNumber: 5,
  currentStep: 1,
  totalSteps: 4,
};

export default function Unit5() {
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