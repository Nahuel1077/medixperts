'use client'
import Aside from "../../components/aside";
import Class from "../../components/class";
import { useAuth } from "../../hooks/useAuth";
import LessonContent from "./content.mdx";

const lessonData = {
  id: "unit11-title",
  unitTitle: "UNIT 11: Career Path and Growth 📈",
  description: "(Understanding your long-term opportunities in the field)",
  nextLesson: "/material/unit-11/lesson-1",
  prevLesson: "/material",
  restart:"/material/unit-11",
  courseNumber: 11,
  currentStep: 1,
  totalSteps: 5,
};

export default function Unit11() {
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