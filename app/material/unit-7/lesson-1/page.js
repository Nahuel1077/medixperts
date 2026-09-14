'use client'
import Aside from "../../../components/aside";
import Class from "../../../components/class";
import { useAuth } from "../../../hooks/useAuth";
import LessonContent from "./content.mdx";
import Link from "next/link";

const lessonData = {
  id: "unit7-title",
  unitTitle: "Lesson 1: Professional Ethics and Standards of Practice",
  description: "",
  nextLesson: "/material/unit-7/lesson-2",
  prevLesson: "/material/unit-7/",
  restart:"/material/unit-7",
  courseNumber: 7,
  currentStep: 2,
  totalSteps: 9,
  lessonNumber: 1
};

export default function Lesson1() {
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
                <ul className="flex flex-col gap-2 text-blue-600 underline">
                    <Link  className="hover:text-blue-800" href="https://www.ncihc.org/standards-of-practice?">NCIHC National Standards of Practice</Link>
                    <Link className="hover:text-blue-800" href="https://www.certifiedmedicalinterpreters.org/assets/docs/NBCMI_Handbook.pdf?">NBCMI_Handbook.pdf</Link>
                    <Link className="hover:text-blue-800" href="https://www.imiaweb.org/code/">IMIA - International Medical Interpreters Association</Link>
                </ul>
            </Class>
        </div>
    )
}