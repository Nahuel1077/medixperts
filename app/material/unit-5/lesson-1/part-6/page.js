'use client'
import { useAuth } from "../../../../hooks/useAuth";
import Link from 'next/link';
import Image from 'next/image';
import Aside from "../../../../components/aside";
import Class from "../../../../components/class";


const lessonData = {
    id: "unit5-title",
    unitTitle: "Lesson 1: Medical Terminology – Part 6: Healthcare professionals",
    description: null,
    nextLesson: "/material/unit-5/lesson-1/part-7",
    prevLesson: "/material/unit-5/lesson-1/part-5",
    restart:"/material/unit-5",
    courseNumber: 5,
    currentStep: 2,
    totalSteps: 4,
};

export default function Lesson1() {
    const { user, loading } = useAuth();

    if (loading) {return <div className="flex justify-center items-center h-screen">
        <div className="w-12 h-12 border-4 border-gray-300 border-t-black rounded-full animate-spin"></div>
        </div>
    };

    return(
        <div className="flex xl:flex-row flex-col bg-black">
            <Aside/>
            <Class lessonData={lessonData}>
                <div className="flex flex-col items-center w-full">
                    <p>You can read the material directly here or download it to study offline.</p>
                    <iframe 
                        className="w-full h-[650px] border border-black select-none"
                        src="https://drive.google.com/file/d/1z_v0Sa5sqURHxeLXMsP07oEjG4kph8pO/preview"
                        allow="autoplay">
                    </iframe>
                    <div className="text-center">
                        <Link href="https://drive.google.com/uc?export=download&id=1z_v0Sa5sqURHxeLXMsP07oEjG4kph8pO" 
                        className="download-btn">
                        📥 Download Material (PDF)
                        </Link>
                    </div>
                </div>
            </Class>
        </div>
    )
}

