'use client'
import Aside from "../../../../components/aside";
import Class from "../../../../components/class";
import { useAuth } from "../../../../hooks/useAuth";
import LessonContent from "./content.mdx";
import Link from "next/link";

const lessonData = {
  id: "unit6-title",
  unitTitle: "Module C: Medical Consent Forms",
  description: "",
  nextLesson: "/material/unit-6/lesson-3",
  prevLesson: "/material/unit-6/lesson-2/module-b",
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
                <Link href="https://drive.google.com/uc?export=download&id=1ORUUWt9QZ521EGolwHjYRjdjKDCGL_qG" 
              className="download-btn w-full flex flex-col items-center text-blue-300 hover:text-blue-500">
              📥 Download Material (PDF)</Link>
                <LessonContent/>
                <div className="flex flex-col w-full mt-6 gap-2">
                    <p className="font-bold italic">Recommended Resources</p>
                    <ul className="flex flex-col gap-1">
                        <Link href="https://www.nih.gov" target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:text-blue-500">National Institutes of Health</Link>
                        <Link href="https://medlineplus.gov" target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:text-blue-500">MedlinePlus</Link>
                        <Link href="https://www.fda.gov" target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:text-blue-500">U.S. Food and Drug Administration</Link>
                        <Link href="https://www.ahrq.gov" target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:text-blue-500">Agency for Healthcare Research and Quality</Link>
                    </ul>
                </div>
            </Class>
        </div>
    )
}