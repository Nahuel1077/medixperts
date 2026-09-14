'use client'
import Aside from "../../../components/aside";
import Class from "../../../components/class";
import { useAuth } from "../../../hooks/useAuth";
import Link from "next/link";

const lessonData = {
  id: "unit9-title",
  unitTitle: "Lesson 3: What to Expect During the Hiring Process",
  description: null,
  nextLesson: "/material/unit-9/lesson-4",
  prevLesson: "/material/unit-9/lesson-2",
  restart:"/material/unit-9",
  courseNumber: 9,
  currentStep: 4,
  totalSteps: 10,
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
        <div className="relative w-full"><iframe src="https://player.mediadelivery.net/embed/752312/20163951-c391-4fe5-b229-c72f65bd471e?autoplay=false&loop=false&muted=false&preload=true&responsive=true" loading="lazy" className="h-auto w-full aspect-video" allow="accelerometer; gyroscope; autoplay; encrypted-media; fullscreen" allowFullScreen></iframe></div>
        <div className="flex flex-col text-start w-full pt-10">
            <h1 className="text-xl">Want to Test Your English Proficiency?</h1>
            <h6>
                If you'd like to evaluate your English level before applying for medical interpreter positions, we recommend taking the 90-minute EF SET. It's an online English proficiency test that provides an official CEFR certificate (A1–C2).<br/>
                Many LSPs and BPOs recognize the EF SET during their hiring process, so having your certificate ready may be an advantage during the selection process.
                You can take the test at: <Link href="https://www.efset.org/" className="text-blue-400 hover:text-blue-600">https://www.efset.org/</Link>.
            </h6>
        </div>
      </Class>
    </div>
  );
}