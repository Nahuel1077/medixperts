'use client'
import Aside from "../../../components/aside";
import Class from "../../../components/class";
import Link from "next/link";
import { useAuth } from "../../../hooks/useAuth";
import LessonContent from "./content.mdx";

const lessonData = {
  id: "unit9-title",
  unitTitle: "Lesson 2: Building a Strong Interpreter-Focused Resume",
  description: null,
  nextLesson: "/material/unit-9/lesson-3",
  prevLesson: "/material/unit-9/lesson-1",
  restart:"/material/unit-9",
  courseNumber: 9,
  currentStep: 3,
  totalSteps: 10,
  lessonNumber: 2
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
                <LessonContent/>
                <div className="flex flex-col gap-8 py-8 items-center w-full">
                  <div className="flex flex-col gap-2 w-full">
                    <h6>Resume Sample 1:</h6>
                    <iframe 
                      className="w-full h-[650px] border border-black select-none"
                      src="https://drive.google.com/file/d/1-imGKWsWqMbXVxH8DluawbnPzZVW_GzO/preview"
                      allow="autoplay">
                    </iframe>
                    <Link href="https://drive.google.com/uc?export=download&id=1JoZpoQ_-iJo9tb1TMimsaoXKP0PDm3YU" 
                      className="download-btn self-center">
                      📥 Download Material (docx)
                    </Link>
                  </div>
                  <div className="flex flex-col gap-2 w-full">
                    <h6>Resume Sample 2:</h6>
                    <iframe 
                      className="w-full h-[650px] border border-black select-none"
                      src="https://drive.google.com/file/d/1UgNGh6ZENbJ1CJHQ8D5d9DBfZbwqj1jM/preview"
                      allow="autoplay">
                    </iframe>
                    <Link href="https://drive.google.com/uc?export=download&id=18drOTm8tNv_AK0mLgT2aggNAgtYngCOT" 
                      className="download-btn self-center">
                      📥 Download Material (docx)
                    </Link>
                  </div>
                  <div className="flex flex-col gap-2 w-full">
                    <h6>Online Resource:</h6>
                    <Link href="https://www.open-resume.com/" className="self-start text-blue-400 hover:text-blue-600">OpenResume - Free Open-source Resume Builder and Parser</Link>
                    <Link href="https://www.resume88.com/" className="self-start text-blue-400 hover:text-blue-600">Resume88 — Free Resume Builder, No Login Required</Link>
                  </div>
                </div>
            </Class>
        </div>
    )
}