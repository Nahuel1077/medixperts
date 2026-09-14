'use client'
import Aside from "../components/aside";
import Link from "next/link";
import { Montserrat } from "next/font/google";
import { Roboto_Mono } from "next/font/google";
import { useEffect, useState } from "react";
import { useAuth } from "../hooks/useAuth";
import { useCourses } from "../hooks/useCourses";
import { GetQuiz } from "../hooks/getQuiz";
import CircularProgress from "../components/circularProgress";

const montserrat = Montserrat({ subsets: ['latin'] });
const roboto_mono = Roboto_Mono({ subsets: ['latin']});

export default function Dashboard() {
  const { user, loading } = useAuth();
  const { progress, finalScore, loadingCourses, error, total, completed } = useCourses();
  const { quizAttempts, average, loadingQuizAttempts, quizError, } = GetQuiz();


  if (loading || loadingCourses) {return <div className="flex justify-center items-center h-screen">
    <div className="w-12 h-12 border-4 border-gray-300 border-t-black rounded-full animate-spin"></div>
    </div>
  };
  if (error) {
  return <div className="bg-black flex flex-col items-center">
    <p>Please contact support.</p>
      <p className="text-red-600 text-xl">{error}</p>
    </div>;
  }
    return (
        <div className="flex xl:flex-row flex-col gap-6 bg-gray-100">
            <Aside/>
            <div className="p-8 flex flex-col gap-4 right-[250px] w-full items-center xl:items-start">
                <h1 className={montserrat.className + " text-3xl font-bold"}>Dashboard</h1>
                <p className={montserrat.className + " text-2xl"}>Welcome <span className="text-yellow-600">{user.full_name}</span>!</p>
            <section className={roboto_mono.className + " font-bold capitalize flex flex-col gap-6 sm:p-8 items-center md:items-start"}>
                <p className={montserrat.className + " text-2xl"}>Check your progress:</p>
                <div className="grid xl:grid-cols-2 grid-cols-1 gap-6 sm:p-8">
                  <div className="flex flex-col md:flex-row gap-4">
                    <div className="p-6 flex flex-col 2xl:flex-row gap-6 items-center bg-white border-[1xp] border-black shadow-[0px_0px_3px_1px] rounded-lg 2xl:w-[555px] 2xl:h-[198px]">
                      <p>You have completed <b className="text-xl text-yellow-600">{completed}</b> of <b className="text-xl">12</b> courses</p>
                      <CircularProgress progress={total} size={100} strokeWidth={15}/>
                    </div>
                  </div>
                  <div className="flex flex-col md:flex-row gap-4">
                    <div className="p-6 flex flex-col 2xl:flex-row gap-6 items-center bg-white border-[1xp] border-black shadow-[0px_0px_3px_1px] rounded-lg 2xl:w-[555px] 2xl:h-[198px] h-[250px] md:w-[381px]">
                      <p><b className="text-xl text-yellow-600">Average Quiz score </b></p>{loadingQuizAttempts ? (
                          <p>Loading...</p>
                        ) : error ? (
                          <p>{error}</p>
                        ) : (<p className="text-xl">{average}%</p>)}
                    </div>
                  </div>
                  <div className="flex flex-col md:flex-row gap-4">
                    <div className="p-6 flex flex-col 2xl:flex-row gap-6 items-center bg-white border-[1xp] border-black shadow-[0px_0px_3px_1px] rounded-lg 2xl:w-[555px] 2xl:h-[198px] h-[250px] md:w-[381px]">
                      <p className="flex flex-col 2xl:flex-row gap-6 items-center">Final Test score <b className="text-xl text-yellow-600">{finalScore? ({finalScore}) : "No test results yet."}</b></p>
                    </div>
                  </div>
                  <div className="flex flex-col md:flex-row gap-4">
                    <div className="p-6 flex flex-col sm:gap-6 items-center bg-white border-[1xp] border-black shadow-[0px_0px_3px_1px] rounded-lg 2xl:w-[555px] 2xl:h-[198px] h-[250px] md:w-[381px]">
                      <p className="text-xl text-yellow-600">Hall of Fame</p>
                      <p className="text-black">Students with</p> 
                      <ul className="flex flex-col md:flex-row gap-4">
                        <li>
                          ✔ Quiz Average ≥ 90%
                        </li>
                        <li>
                          ✔ Final Test Passed
                        </li>
                        <li>
                          Contact us: <b className="text-yellow-600"><a href="mailto:info@medixperts, quiero más información del Hall of Fame.">info@medixperts.org</a></b>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <p>Details:</p>
              {progress.length > 0 &&
                Object.entries(progress[0])
                  .filter(([key]) => key !== 'id')
                  .filter(([key]) => key !== 'final_test')
                  .map(([course, value]) => (
                    <div key={course}>
                      <p className="font-semibold">
                        {course.replace('_', ' ').replace('course', 'Unit')}: {value}%  <meter value={value} min="0" max="100" low="30" high="75" optimum="90"></meter>
                      </p>
                      </div>
                  ))
              }
              {progress.map(course =>
              (
                <p key={course} className="text-2xl">
                  {/* Final Score: {course.final_test} */} 
                    {finalScore? `Final Score: ${finalScore}%` : 'No test results yet.'}
                </p>
              ))}
            </section>
            </div>
            {completed === 12 && (
              <Link
                href="/material/test"
                className="hidden md:block fixed bottom-6 right-6 z-50 bg-yellow-500 hover:bg-yellow-400 text-white font-bold px-6 py-4 rounded-full shadow-lg transition-all duration-300 hover:scale-105"
              >
                Take Final Test →
              </Link>
            )}
        </div>
    )
}