'use client'
import Aside from "../../components/aside";
import Class from "../../components/class";
import { useAuth } from "../../hooks/useAuth";
import LessonContent from "./content.mdx";

const lessonData = {
  id: "unit6-title",
  unitTitle: "UNIT 6: Essential Medical Terminology 🏥",
  description: "(Understanding the anatomy, terminology, common conditions, and vocabulary associated with each major body system)",
  nextLesson: "/material/unit-6/lesson-1/module-a",
  prevLesson: "/material",
  restart:"/material/unit-6",
  courseNumber: 6,
  currentStep: 1,
  totalSteps: 3,
};

export default function Unit6() {
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