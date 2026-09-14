'use client'
import Aside from "../../components/aside";
import Class from "../../components/class";
import LessonContent from "./content.mdx"; 
import { useAuth } from "../../hooks/useAuth";

const lessonData = {
  id: "unit2-title",
  unitTitle: "UNIT 2: The Reality of Remote Interpreting 📞",
  description: null,
  nextLesson: "/material/unit-2/lesson-1",
  prevLesson: "/material",
  restart: "/material/unit-2",
  courseNumber: 2,
  currentStep: 1,
  totalSteps: 8,
};

export default function Unit2() {
  const { user, loading } = useAuth();

  if (loading) {return <div className="flex justify-center items-center h-screen">
    <div className="w-12 h-12 border-4 border-gray-300 border-t-black rounded-full animate-spin"></div>
    </div>
  };
    return(
        <div className="flex xl:flex-row flex-col bg-black">
            <Aside/>
            <Class lessonData={lessonData}>
                <LessonContent className="text-justify"/>
            </Class>
        </div>
    )
}