'use client'
import Aside from "../../../components/aside";
import Class from "../../../components/class";
import { useAuth } from "../../../hooks/useAuth";
import LessonContent from "./content.mdx"; 
import Link from "next/link";

const lessonData = {
  id: "unit4-title",
  unitTitle: "Lesson 2: Handling distressed, angry, or confused patients",
  description: null,
  nextLesson: "/material/unit-4/lesson-3",
  prevLesson: "/material/unit-4/lesson-1",
  restart: "/material/unit-4",
  courseNumber: 4,
  currentStep: 3,
  totalSteps: 8,
  lessonNumber: 2
};

export default function Lesson2() {
  const { user, loading } = useAuth();

  if (loading) {return <div className="flex justify-center items-center h-screen">
    <div className="w-12 h-12 border-4 border-gray-300 border-t-black rounded-full animate-spin"></div>
    </div>
  };
  return (
    <div className="flex xl:flex-row flex-col bg-black min-h-screen">
      <Aside />
      <Class lessonData={lessonData}>
        <LessonContent />
        <div className="flex flex-col gap-3">
            <Link href="https://www.ncihc.org/" className="text-blue-500 hover:text-white">• The National Council on Interpreting in Health Care (NCIHC): <p className="text-white">Provides ethical standards and best practices for medical interpreters, emphasizing the role of the interpreter in difficult clinical encounters.</p></Link>
            <Link href="https://imiaweb.org/" className="text-blue-500 hover:text-white">• International Medical Interpreters Association (IMIA): <p className="text-white">Offers guidelines on professional conduct and training resources for specialized medical settings.</p></Link>
            <p>• Crucial Conversations in Healthcare: Many medical systems utilize the "Crucial Conversations" framework to help staff and support personnel manage high-stakes communication without damaging relationships or clinical outcomes.</p>
            <h1 className="text-xl text-center pt-8 pb-8">Click NEXT to continue to the following lesson!</h1>
        </div>
      </Class>
    </div>
  );
}