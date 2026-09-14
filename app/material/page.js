'use client'
import Image from "next/image";
import Link from "next/link";
import Aside from "../components/aside";
import { useState } from "react";
import 'animate.css';
import { useAuth } from "../hooks/useAuth";
import { useCourses } from "../hooks/useCourses";

export default function Material() {

    const [hoveredMaterial, setHoveredMaterial] = useState(null);
    const { user, loading } = useAuth();
    const [isOpen, setIsOpen] = useState(false);
    const {progress, finalScore, loadingCourses, error,} = useCourses();

    const isCourseLocked = (courseId) => {
    if (!progress.length) return true;

    const userProgress = progress[0];

    if (courseId === 1) return false;

    const previousCourse =
        userProgress[`course_${courseId - 1}`];

    return previousCourse !== 100;
    };

    const materials = [
        { id: 1, name: "UNIT 1: Introduction to Medical Interpreting", description: "Lesson 1 introduces the fundamentals of medical interpreting, clarifying what it is and what it is not. It explains the key differences between translation and interpretation, emphasizing the interpreter’s role as an accurate and impartial communication bridge in healthcare settings. The lesson also explores the main types of interpreting—consecutive, simultaneous, sight translation, and summarization—highlighting when and how each is used. In addition, learners gain insight into real-world work environments such as hospitals, clinics, and telehealth contexts. The lesson concludes with a quiz to reinforce understanding of the core concepts.", goal:"Build a clear, professional understanding of the role.", background: "bg-red-500", link:"/material/unit-1" },
        { id: 2, name: "UNIT 2: The Reality of Remote Interpreting", description: "This lesson provides an overview of remote medical interpreting, explaining how services are delivered through technology. It covers the main types of remote interpreting, including Over-the-Phone Interpreting (OPI) and Video Remote Interpreting (VRI), and outlines the structure of a typical interpreting call. Learners will also understand what companies expect from professional interpreters, such as reliability, confidentiality, and effective communication skills. Additionally, the lesson introduces key performance metrics used to evaluate interpreters, including accuracy, fluency, response time, and professionalism, along with the importance of ongoing professional development. The lesson concludes with a quiz to reinforce understanding of these essential concepts.", background: "bg-blue-500", goal:"Understanding how the job actually works in real life", link:"/material/unit-2" },
        { id: 3, name: "UNIT 3: Core Interpreting Skills", description: "This lesson focuses on the core skills required for effective medical interpreting. It develops advanced active listening abilities and introduces techniques to strengthen short-term memory. Learners will practice efficient note-taking using symbols and abbreviations to support accuracy. The lesson also emphasizes accurate message reformulation, ensuring that meaning is conveyed clearly and completely between parties. Additionally, it covers strategies for managing interruptions, handling situations where clarification is needed through appropriate intervention skills, and maintaining control of the flow of communication. The lesson concludes with a quiz to reinforce these essential interpreting competencies.", background: "bg-green-500", link:"/material/unit-3", goal:"Building the cognitive and technical foundation of interpreting"},
        { id: 4, name: "UNIT 4: Communication & Challenging Situations", description: "This lesson explores communication strategies for handling challenging situations in medical interpreting. It helps learners develop skills to understand a variety of accents and effectively manage interactions with distressed, angry, or confused patients. The lesson also addresses how to keep pace with fast-speaking healthcare providers while maintaining accuracy. Special attention is given to delivering emotionally sensitive information with care and professionalism, as well as maintaining neutrality under pressure. Additionally, learners will gain strategies for managing long calls of over 90 minutes without compromising performance. The lesson concludes with a quiz to reinforce these critical communication skills.", goal:"Handling real-world pressure and complex human interactions",background: "bg-orange-500", link:"/material/unit-4" },
        { id: 5, name: "UNIT 5: Basic Medical and Non-Medical Terminology", description: "This lesson introduces essential medical terminology needed for accurate interpreting in healthcare settings. It covers key vocabulary related to major body systems, including digestive, respiratory, cardiovascular, musculoskeletal, nervous, reproductive, urinary, and integumentary systems. Learners will also become familiar with common symptoms and basic medications frequently encountered in medical interactions. The lesson highlights false cognates and common language mistakes to help prevent misunderstandings and ensure clarity. The lesson concludes with a quiz to reinforce knowledge of core medical terms and concepts.", goal:"Building a strong everyday vocabulary foundation", background: "bg-gray-300", link:"/material/unit-5" },
        { id: 6, name: "UNIT 6: Essential Medical Terminology", description: "This lesson introduces the ethical principles and professional standards that guide medical interpreters. It covers the interpreter’s code of conduct, including key standards of practice, and explains confidentiality requirements such as HIPAA in simple terms. Learners will explore the importance of cultural awareness, impartiality, and maintaining clear role boundaries, including what interpreters must not do. The lesson also discusses appropriate advocacy and when it may be necessary in healthcare settings. The lesson concludes with a quiz to reinforce understanding of ethical responsibilities and professional behavior.",goal: "Mastering body systems and clinical language", background: "bg-purple-500", link:"/material/unit-6" },
        { id: 7, name: "UNIT 7: Ethics and Professional Standards", description: "This lesson focuses on guided practice to help learners apply their interpreting skills in realistic scenarios. It includes shadowing exercises to build fluency and confidence, as well as doctor–patient dialogues for practical experience. Learners will engage in full call simulations using consecutive interpreting, allowing them to practice in conditions similar to real assignments. The lesson also provides self-assessments with answer keys to support independent learning and improvement. The lesson concludes with a quiz to reinforce skills and track progress.", background: "bg-green-200", goal:"Acting with integrity, neutrality, and professionalism", link:"/material/unit-7" },
        { id: 8, name: "UNIT 8: Guided Practice", description: "This lesson prepares learners for entering the workforce as medical interpreters. It outlines common hiring requirements and provides guidance on building a strong, interpreter-focused resume. Learners will gain practical tips to succeed in interviews and understand what to expect in interpreting assessments, along with strategies to prepare effectively. The lesson also highlights common candidate mistakes and how to avoid them to improve chances of success. The lesson concludes with a quiz to reinforce key concepts and readiness for the hiring process.", goal:"Turning knowledge into real interpreting performance", background: "bg-orange-200", link:"/material/unit-8" },
        { id: 9, name: "UNIT 9: Getting Hired as a Medical Interpreter", description: "This lesson covers the essential tools and setup needed for effective remote medical interpreting. It outlines required equipment such as a quality headset, camera, and a stable wired internet connection to ensure clear and reliable communication. Learners will also explore how to create an ideal workspace that supports focus and professionalism. The lesson introduces common interpreting platforms and tools, along with technical best practices to prevent issues and maintain high performance. The lesson concludes with a quiz to reinforce these practical concepts.", goal:"From application to your first paycheck", background: "bg-red-200", link:"/material/unit-9" },
        { id: 10, name: "UNIT 10: Tools and Work Setup", description: "This lesson explores career opportunities and growth paths for medical interpreters. It guides learners on where to find job opportunities and explains the different types of contracts available in the field. The lesson also compares freelance and employee roles, helping learners understand the benefits and challenges of each option. By the end, learners will have a clearer vision of how to build and advance their careers in medical interpreting.", goal:"Setting up your environment for professional performance", background: "bg-blue-200", link:"/material/unit-10" },
        { id: 11, name: "UNIT 11: Career Path and Growth", description: "This unit explores career opportunities and long-term growth paths for medical interpreters. It guides learners on where to find job opportunities, explains the different types of contracts in the field, and compares freelance work with employee or independent contractor roles. By the end, learners will have a clearer understanding of their professional options and the potential to build and advance a successful career in medical interpreting.", goal:"Understanding your long-term opportunities in the field", background: "bg-blue-800", link:"/material/unit-11" },
        { id: 12, name: "UNIT 12: Interpreter Wellness & Self-Care", description: "This unit focuses on the emotional demands of medical interpreting and equips learners with essential self-care strategies. It covers the emotional load in medical settings, signs of burnout, techniques for disconnecting between calls, setting healthy professional boundaries, managing stress during intense sessions, and maintaining long-term sustainability. By the end, learners will be better prepared to protect their well-being and sustain high performance throughout their careers.", goal:"Building emotional resilience and preventing burnout", background: "bg-green-800", link:"/material/unit-12" },
    ]

    const onHover = (material) => {
        console.log(`Hovered over ${material.name} and id ${material.id}`);
        setHoveredMaterial(material);
    }

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


    return(


        <div className="flex flex-col xl:flex-row gap-8 bg-linear-to-t from-white to-[#ffffe0]">
            <Aside/>
            <section className="grid md:grid-cols-2 xl:grid-cols-4 grid-cols-1 justify-center justify-items-center items-center content-evenly gap-40 md:gap-8 w-full z-10 overflow-y-scroll sm:overflow-y-hidden pb-[500px] sm:pb-0 md:h-dvh">
                {materials.map((material) => {
                const locked = isCourseLocked(material.id);

                return (
                    
                <div
                onMouseEnter={() => onHover(material)}
                key={material.id}
                className={`flex flex-col items-center w-[100px] h-[100px]
                    ${locked ? 'opacity-50' : ''}
                `}
>
                {locked ? (
                    <div className="relative flex flex-col items-center">
                        <Image
                            width={100}
                            height={100}
                            src="/img/book.svg"
                            alt={`Material ${material.id}`}
                        />

                        <div className="absolute inset-0 flex items-center justify-center text-3xl">
                            🔒
                        </div>

                        <div
                            className={
                                material.background +
                                " w-[75px] absolute h-[99px] rounded-[10px_5px_30px_10px] -z-10"
                            }
                        />

                        <p className="self-center absolute font-bold">
                            {material.id}
                        </p>
                    </div>
                ) : (
                <Link
                    href={material.link}
                    className="flex flex-col items-center justify-center hover:scale-110 transition-transform duration-200"
                >
                    <Image
                        width={100}
                        height={100}
                        src="/img/book.svg"
                        alt={`Material ${material.id}`}
                    />

                    <div
                        className={
                            material.background +
                            " w-[75px] absolute h-[99px] rounded-[10px_5px_30px_10px] -z-10"
                        }
                    />

                    <p className="self-center absolute font-bold">
                        {material.id}
                    </p>
                </Link>
            )}

            <div className="sm:hidden block text-center font-bold">
                {material.name}
            </div>

            <button
                onClick={() => onHover(material)}
                className="sm:hidden block text-center underline underline-offset-1 text-blue-500"
            >
                Details
            </button>
        </div>
            );
        })}
            </section>
            {isOpen?(
            <div className="flex flex-col sm:gap-8 sm:w-1/3 items-center justify-center sm:border-l-[1px] border-gray-300 p-8 fixed sm:relative bottom-0 bg-yellow-100 z-20 h-[300px] sm:h-[100vh] w-full">
                <button onClick={()=> setIsOpen(!isOpen)}><Image src="/img/close.svg" alt="close" width={30} height={30} className=""/></button>
                <h3 className="text-xl">Description</h3>
                <p className="animate__animated animate__fadeIn text-justify font-bold"> {hoveredMaterial ? hoveredMaterial.name : ""} </p>
                <p>{hoveredMaterial ? hoveredMaterial.goal : "Selec a material to view its goals"}</p>
                <p key={hoveredMaterial?.id} className="animate__animated animate__fadeIn text-justify overflow-y-scroll sm:overflow-y-hidden">{hoveredMaterial ? hoveredMaterial.description : "Select a material to view its details."}</p>
            </div>
            ):(
                <div className="flex flex-col w-full md:w-[150px] md:h-100dvh bg-yellow-100 justify-center items-center fixed bottom-0 z-10 md:relative">
                    <button onClick={() => setIsOpen(!isOpen)} className="w-[150px] h-100dvh p-2">Click here to see the description</button>
                </div>
            )}
        </div>
    )
}