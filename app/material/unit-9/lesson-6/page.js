'use client'
import Aside from "../../../components/aside";
import Class from "../../../components/class";
import Link from "next/link";
import { useAuth } from "../../../hooks/useAuth";
import LessonContent from "./content.mdx";

const lessonData = {
  id: "unit9-title",
  unitTitle: "Lesson 6: The Nesting Phase",
  description: null,
  nextLesson: "/material/unit-9/lesson-7",
  prevLesson: "/material/unit-9/lesson-5",
  restart:"/material/unit-9",
  courseNumber: 9,
  currentStep: 5,
  totalSteps: 10,
  lessonNumber: 6
};

export default function Lesson6() {
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