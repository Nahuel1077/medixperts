'use client'
import Aside from "../../components/aside";
import Class from "../../components/class";
import { useAuth } from "../../hooks/useAuth";
import { Montserrat } from "next/font/google";
import { Roboto_Mono } from "next/font/google";
import Notes from "../../components/notes";
import { useCourses } from "../../hooks/useCourses";

const montserrat = Montserrat({ subsets: ['latin'] });
const roboto_mono = Roboto_Mono({ subsets: ['latin'] });

const lessonData = {
  id: "test",
  unitTitle: "Final Test",
  description: null,
  nextLesson: "/material/",
  prevLesson: "/material/",
  restart: "/material/",

};

export default function Lesson1() {
  const { user, loading } = useAuth();
  const { completed, loadingCourses } = useCourses();

  if (loading || loadingCourses) {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-12 h-12 border-4 border-gray-300 border-t-black rounded-full animate-spin"></div>
    </div>
  );
}
    if (completed < 12) {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-black text-white gap-4">
      <h1 className="text-2xl font-bold">
        Final Test Locked
      </h1>

      <p>
        You must complete all 12 courses before accessing the Final Test.
      </p>

      <p>
        Progress: {completed}/12 courses completed.
      </p>
    </div>
  );
}
    return(
        <div className="flex xl:flex-row flex-col bg-black">
            <Aside/>
            <Class lessonData={lessonData}>
              <div className="flex flex-col gap-16 items-center w-full">
                <div className={roboto_mono.className + " flex flex-col gap-2 w-full text-start"}>
                    <h1>General Instructions</h1>
                    <p>Listen to the following audios while recording your answers.</p>
                    <p>Render your answer into the target language. </p>
                    <p>You can use the Notes section on the right side of the screen to help you interpret.</p>
                    <p>Once you finish, send your recordings to info@medixperts.org and make sure to include <strong className="text-yellow-400">your full name</strong> + <strong className="text-yellow-400">"Final test recordings"</strong> on the subject of the email.</p>
                </div>
                <div className={roboto_mono.className + " flex flex-col gap-2 items-center w-full"}>
                    <h1>Section 1: Vocabulary</h1>
                    <p className="self-start">Instructions</p>
                    <p className="self-start">Interpret all the words you hear into the target language.</p>
                    <audio controls controlsList="play" preload="metadata" src="/audio/test/section1.mp3" className="w-full"/>
                </div>
                <div className={roboto_mono.className + " flex flex-col gap-2 items-center w-full"}>
                    <h1>Section 2: Full Conversation - Scenario A</h1>
                    <p className="self-start">Instructions</p>
                    <p className="self-start">Test your interpreting skills on a full conversation.</p>
                    <audio controls controlsList="play" preload="metadata" src="/audio/test/section2-part1.mp3" className="w-full"/>
                </div>
                <div className={roboto_mono.className + " flex flex-col gap-2 items-center w-full"}>
                    <h1>Section 2: Full Conversation - Scenario B</h1>
                    <p className="self-start">Instructions</p>
                    <p className="self-start">Test your interpreting skills on a full conversation.</p>
                    <audio controls controlsList="play" preload="metadata" src="/audio/test/section2-part2.mp3" className="w-full"/>
                </div>
              </div>
            </Class>
            <Notes/>
        </div>
    )
}