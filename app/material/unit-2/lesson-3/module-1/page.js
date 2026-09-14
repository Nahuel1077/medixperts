'use client'
import Aside from "../../../../components/aside";
import Class from "../../../../components/class";
import LessonContent from "./content.mdx"; 
import Image from "next/image";
import { useAuth } from "../../../../hooks/useAuth";


const lessonData = {
  id: "unit2-title",
  unitTitle: "Lesson 3 (Part 1): Structure of a Typical Call 📞",
  description: null,
  nextLesson: "/material/unit-2/lesson-3/module-2",
  prevLesson: "/material/unit-2/lesson-2",
  restart: "/material/unit-2",
  courseNumber: 2,
  currentStep: 3,
  totalSteps: 8,
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
        <Image
          src="/img/u2l3.jpg"
          alt="Structure of a typical call"
          width={800}
          height={400}
          className="my-4 rounded-lg"
        />
        <LessonContent />
        <Image
          src="/img/OPI.png"
          alt="OPI call"
          width={800}
          height={400}
          className="my-4 rounded-lg"
        />
      </Class>
    </div>
  );
}