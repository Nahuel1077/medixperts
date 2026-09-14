'use client'
import Aside from "../../../../components/aside";
import Class from "../../../../components/class";
import Link from "next/link";
import { useAuth } from "../../../../hooks/useAuth";
import LessonContent from "./content.mdx";

const lessonData = {
  id: "unit6-title",
  unitTitle: "Module B: Medication Labels",
  description: "",
  nextLesson: "/material/unit-6/lesson-2/module-c",
  prevLesson: "/material/unit-6/lesson-2/module-a",
  restart:"/material/unit-6",
  courseNumber: 6,
  currentStep: 2,
  totalSteps: 3,
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
              <Link href="https://drive.google.com/uc?export=download&id=12v2jbHVrOgWtC413b9BKxVIGf4ZelC5r" 
              className="download-btn w-full flex flex-col items-center text-blue-300 hover:text-blue-500">
              📥 Download Material (PDF)</Link>
                <LessonContent/>
            </Class>
        </div>
    )
}