'use client'
import Aside from "../../components/aside";
import Class from "../../components/class";
import { useAuth } from "../../hooks/useAuth";
import LessonContent from "./content.mdx";

const lessonData = {
  id: "unit9-title",
  unitTitle: "UNIT 9: Getting Hired as a Medical Interpreter 💼",
  description: "(From application to your first paycheck)",
  nextLesson: "/material/unit-9/lesson-1",
  prevLesson: "/material",
  restart:"/material/unit-9",
  courseNumber: 9,
  currentStep: 1,
  totalSteps: 10,
};

export default function Unit9() {
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