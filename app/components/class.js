'use client'

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import 'animate.css';


const unitStructure = {
    1: { lessons: 5 },
    2: { lessons: 7, modules: { 3: 2 } },
    3: { lessons: 7 },
    4: { lessons: 7 },
    5: { lessons: 3, parts: { 1: 7, 2: 4 } },
    6: { lessons: 3, modules: { 1: 9, 2: 3 } },
    7: { lessons: 8 },
    8: { lessons: 3, modules: { 3: 6 } },
    9: { lessons: 9 },
    10: { lessons: 4 },
    11: { lessons: 4 },
    12: { lessons: 5 }
};


export default function Class({ children, lessonData }) {

    const router = useRouter();

    const [openMenu, setOpenMenu] = useState(false);
    const [courseProgress, setCourseProgress] = useState(null);

    const unit = unitStructure[lessonData.courseNumber];

    useEffect(() => {

        const getProgress = async () => {

            try {

                const token = localStorage.getItem('token');

                const res = await fetch(
                    `${process.env.NEXT_PUBLIC_API_URL}/api/courses`,
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    }
                );

                if (!res.ok) {
                    throw new Error('Error al obtener el progreso');
                }

                const data = await res.json();

                if (data.length > 0) {

                    const courseKey = `course_${lessonData.courseNumber}`;

                    setCourseProgress(data[0][courseKey]);

                }

            } catch (error) {

                console.error(error);

            }

        };

        getProgress();

    }, [lessonData.courseNumber]);


    const handleNext = async () => {

        try {

            const percentage = Math.round(
                (lessonData.currentStep / lessonData.totalSteps) * 100
            );

            const token = localStorage.getItem('token');

            await fetch(
                `${process.env.NEXT_PUBLIC_API_URL}/api/courses/progress`,
                {
                    method: 'PUT',
                    headers: {
                        Authorization: `Bearer ${token}`,
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        courseNumber: lessonData.courseNumber,
                        progress: percentage,
                    }),
                }
            );

            router.push(lessonData.nextLesson);

        } catch (error) {

            console.error(error);

        }

    };


    // --------------------------------------------------
    // MENU
    // --------------------------------------------------

    const courseCompleted = courseProgress === 100;

    const isLessonUnlocked = (lessonNumber) => {

        // Si la unidad está terminada, todo queda disponible
        if (courseCompleted) {
            return true;
        }

        // Resumen siempre disponible
        if (lessonNumber === 0) {
            return true;
        }

        // Lessons anteriores y la actual disponibles
        return lessonNumber <= lessonData.lessonNumber;

    };


    const getLessonPath = (lessonNumber) => {

        if (lessonNumber === 0) {
            return `/material/unit-${lessonData.courseNumber}`;
        }

        return `/material/unit-${lessonData.courseNumber}/lesson-${lessonNumber}`;

    };


    const renderLesson = (lessonNumber) => {

        const unlocked = isLessonUnlocked(lessonNumber);

        const isCurrent = lessonNumber === lessonData.lessonNumber;

        return (
            <div
                key={`lesson-${lessonNumber}`}
                className="w-full"
            >

                {unlocked ? (

                    <Link
                        href={getLessonPath(lessonNumber)}
                        onClick={() => setOpenMenu(false)}
                        className={`
                            flex items-center justify-between
                            w-full px-4 py-2
                            rounded-md
                            transition-all
                            ${isCurrent
                                ? "bg-black text-white"
                                : "text-black hover:bg-white/50"
                            }
                        `}
                    >

                        <span>
                            {lessonNumber === 0
                                ? `Resumen de unidad ${lessonData.courseNumber}`
                                : `Lección ${lessonNumber}`
                            }
                        </span>

                        {isCurrent && (
                            <span className="text-yellow-400">
                                ●
                            </span>
                        )}

                    </Link>

                ) : (

                    <div
                        className="flex items-center justify-between w-full px-4 py-2 text-gray-500 cursor-not-allowed"
                    >

                        <span>
                            {lessonNumber === 0
                                ? `Resumen de unidad ${lessonData.courseNumber}`
                                : `Lección ${lessonNumber}`
                            }
                        </span>

                        <span>
                            🔒
                        </span>

                    </div>

                )}

            </div>
        );

    };


    return (

        <div className="flex flex-col items-center justify-center h-screen w-full bg-black select-none">

            <nav className="absolute top-6 text-white text-xl text-center font-medium pt-[100px] xl:pt-0">
                {lessonData.unitTitle}
            </nav>


            <p className="text-white text-center w-1/2">
                {lessonData.description
                    ? lessonData.description
                    : null
                }
            </p>


            <div className="w-full max-w-4xl px-6 pt-20 overflow-auto h-[calc(100vh-160px)] scrollbar-none">

                <article className="prose prose-invert max-w-none text-white">

                    {children}

                </article>

            </div>


            {/* BOTONES */}

            <div className="flex flex-row sm:gap-5 gap-2 justify-around w-1/2 bottom-0 absolute">

                <button>

                    <Link href={lessonData.prevLesson}>

                        <Image
                            src="/img/left.svg"
                            alt="Back"
                            width={50}
                            height={50}
                            className="rounded-lg invert"
                        />

                    </Link>

                </button>


                <button>

                    <Link href={lessonData.restart}>

                        <Image
                            src="/img/restart.svg"
                            alt="Restart Lesson"
                            width={50}
                            height={50}
                            className="rounded-lg invert"
                        />

                    </Link>

                </button>


                <button
                    onClick={() => setOpenMenu(!openMenu)}
                >

                    <Image
                        src="/img/menu.svg"
                        alt="Menu"
                        width={50}
                        height={50}
                        className="rounded-lg invert"
                    />

                </button>


                <button onClick={handleNext}>

                    <Link href={lessonData.nextLesson}>

                        <Image
                            src="/img/right.svg"
                            alt="Forward"
                            width={50}
                            height={50}
                            className="rounded-lg invert"
                        />

                    </Link>

                </button>

            </div>


            {/* MENU */}

            {openMenu && (

                <div
                    className="
                        animate__animated animate__fadeInLeft
                        bg-white
                        p-4
                        absolute
                        h-[100vh]
                        w-[200px]
                        sm:w-[250px]
                        left-0
                        bg-linear-to-t
                        from-white
                        to-[#2563EB]
                        flex
                        flex-col
                        items-center
                        justify-center
                        overflow-y-auto
                    "
                >

                    <div className="w-full flex flex-col gap-1">

                        {renderLesson(0)}

                        {Array.from(
                            { length: unit.lessons },
                            (_, index) => renderLesson(index + 1)
                        )}

                    </div>

                </div>

            )}

        </div>

    );

}