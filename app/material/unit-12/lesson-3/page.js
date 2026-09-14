'use client'
import Aside from "../../../components/aside";
import Class from "../../../components/class";
import Link from "next/link";
import LessonContent from "./content.mdx"; 
import { useAuth } from "../../../hooks/useAuth";

const lessonData = {
  id: "unit12-title",
  unitTitle: "Lesson 3: Decompression Techniques Between Calls",
  description: null,
  nextLesson: "/material/unit-12/lesson-4",
  prevLesson: "/material/unit-12/lesson-2",
  restart: "/material/unit-12",
  courseNumber: 12,
  currentStep: 4,
  totalSteps: 6,
  lessonNumber: 3
};

export default function Lesson3() {
  const { user, loading } = useAuth();

  if (loading) {return <div className="flex justify-center items-center h-screen">
    <div className="w-12 h-12 border-4 border-gray-300 border-t-black rounded-full animate-spin"></div>
    </div>
  };
  return (
    <div className="flex xl:flex-row flex-col bg-black min-h-screen">
      <Aside />
      <Class lessonData={lessonData}>
        <div className="w-full flex flex-col items-center">
          <Link href="https://drive.google.com/uc?export=download&id=1nknM7P8rJg-OQ82IKfTFt0ajMV54vWLS" 
              className="download-btn text-blue-300 hover:text-blue-500">Download this lesson here</Link>
        </div>
        <LessonContent />
      </Class>
    </div>
  );
}