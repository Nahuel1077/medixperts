'use client'
import Aside from "../../../../components/aside";
import Class from "../../../../components/class";
import { useAuth } from "../../../../hooks/useAuth";
import Link from "next/link";

const lessonData = {
  id: "unit6-title",
  unitTitle: "Module H: Nervous system",
  description: null,
  nextLesson: "/material/unit-6/lesson-1/module-i",
  prevLesson: "/material/unit-6/lesson-1/module-g",
  restart: "/material/unit-6",
  courseNumber: 6,
  currentStep: 1,
  totalSteps: 3,
};

export default function Lesson1() {
  const { user, loading } = useAuth();

  if (loading) {return <div className="flex justify-center items-center h-screen">
    <div className="w-12 h-12 border-4 border-gray-300 border-t-black rounded-full animate-spin"></div>
    </div>
  };
  return (
    <div className="flex xl:flex-row flex-col bg-black min-h-screen">
      <Aside />
      <Class lessonData={lessonData}>
        <div className="flex flex-col items-center w-full">
          <p>You can read the material directly here or download it to study offline.</p>
          <iframe 
            className="w-full h-[650px] border border-black select-none"
            src="https://drive.google.com/file/d/1S44aUViM1xOT-JSX0EzsVsou0ftljEUi/preview"
            allow="autoplay">
          </iframe>
          <div className="text-center">
            <Link href="https://drive.google.com/uc?export=download&id=1S44aUViM1xOT-JSX0EzsVsou0ftljEUi" 
              className="download-btn">
              📥 Download Material (PDF)
            </Link>
          </div>
        </div>
      </Class>
    </div>
  );
}