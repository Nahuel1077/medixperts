'use client'
import Aside from "../../../components/aside";
import Class from "../../../components/class";
import { useAuth } from "../../../hooks/useAuth";

const lessonData = {
  id: "unit2-title",
  unitTitle: "Lesson 6: Handling Audio Challenges and Technical Issues",
  description: null,
  nextLesson: "/material/unit-2/lesson-7",
  prevLesson: "/material/unit-2/lesson-5",
  restart: "/material/unit-2",
  courseNumber: 2,
  currentStep: 7,
  totalSteps: 8,
  lessonNumber: 6
};

export default function Lesson6() {
  const { user, loading } = useAuth();

  if (loading) {return <div className="flex justify-center items-center h-screen">
    <div className="w-12 h-12 border-4 border-gray-300 border-t-black rounded-full animate-spin"></div>
    </div>
  };
  return (
    <div className="flex xl:flex-row flex-col bg-black min-h-screen">
      <Aside />
      <Class lessonData={lessonData}>
        <div className="relative w-full"><iframe src="https://player.mediadelivery.net/embed/752312/2dd84282-afce-448f-a6f7-29bddba7ec5f?autoplay=false&loop=false&muted=false&preload=true&responsive=true" loading="lazy" className="h-auto w-full aspect-video" allow="accelerometer; gyroscope; autoplay; encrypted-media; fullscreen" allowFullScreen></iframe></div>
      </Class>
    </div>
  );
}