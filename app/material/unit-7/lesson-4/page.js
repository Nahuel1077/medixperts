'use client'
import Aside from "../../../components/aside";
import Class from "../../../components/class";
import { useAuth } from "../../../hooks/useAuth";
import LessonContent from "./content.mdx";
import Link from "next/link";

const lessonData = {
  id: "unit7-title",
  unitTitle: "Lesson 4: Role Boundaries",
  description: "",
  nextLesson: "/material/unit-7/lesson-5",
  prevLesson: "/material/unit-7/lesson-3",
  restart:"/material/unit-7",
  courseNumber: 7,
  currentStep: 5,
  totalSteps: 9,
  lessonNumber: 4
};

export default function Lesson4() {
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