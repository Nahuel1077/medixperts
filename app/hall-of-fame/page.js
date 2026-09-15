'use client'
import Image from "next/image";
import { Montserrat } from "next/font/google";
import InnerNav from "../components/innerNav";
import { useAuth } from "../hooks/useAuth";
import PageTransition from '../components/Transition';

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function HallOfFame() {
    const { user, loading } = useAuth();

    const data = [
        {
            name: "John Doe",
            date: "2026-06-10",
            description: "John achieved an impressive 98% accuracy in the final test, showcasing his dedication and skill in mastering the material. His consistent performance throughout the course has been exemplary, making him a standout student in our program.",
            image: "/img/x.jpg",
            key: 1,
        },
        {
            name: "You Could Be Here",
            date: "2026-09-15",
            description: "You demonstrated strong interpreting skills throughout the course, earning your place in the Hall of Fame. Your commitment to learning and consistently high quiz scores are also achievements worth highlighting.",
            image: "/img/hall-of-fame-you.png",
            key: 2,     
        },
        {
            name: "Nahuel H.",
            date: "2026-06-10",
            description: "Nahuel developed the course in time record, showing compromise to the program. He was helped by colleagues, and experts within the interpreting industry. This whole course is dedicated to those seeking a brighter future and better opportunities.",
            image: "/img/hall_of_fame_Nahuel H.png",
            key: 3,     
        },
    ];

    if (loading) {return <div className="flex justify-center items-center h-screen">
    <div className="w-12 h-12 border-4 border-gray-300 border-t-black rounded-full animate-spin"></div>
    </div>
  };
  return (
    <PageTransition>
        <div className="flex flex-col overflow-x-hidden">
            <div className="sm:h-[800px]">
                <Image src="/img/halloffame.png" alt="Hall of Fame" width={2000} height={1125} className="w-full h-[800px] object-cover absolute -z-10 brightness-50" />
                <InnerNav />
                <div className={`${montserrat.className} flex flex-col items-center justify-center min-h-screen py-2`}>
                    <div className="flex flex-col items-start justify-center mb-12 w-full text-start">
                        <h1 className="text-7xl font-bold mb-8 text-white text-start w-full sm:pl-28">Hall of Fame</h1>
                        <div className="w-full">
                            <div className="h-[2px] w-[250px] relative sm:ml-28 bg-linear-to-r from-[#2563EB] via-blue-800 to-fuchsia-500 mb-8"></div>
                        </div>
                        <p className="text-lg text-gray-300 max-w-2xl text-start w-full sm:pl-28">Welcome to our Hall of Fame, where we celebrate the outstanding achievements of our students. These students have demonstrated exceptional dedication, hard work, and a commitment to excellence. We are proud to showcase their accomplishments and inspire others to strive for greatness in their own educational pursuits.</p>
                    </div>
                </div>
            </div>
                    <div className="flex flex-row items-center justify-center w-full bg-[#010e37] pt-0.5">
                        <div className="w-full">
                            <div className="h-[2px] w-full relative sm:ml-2 bg-linear-to-r from-transparent via-blue-800 to-blue-900 mb-8"></div>
                        </div>
                        <div className="w-full flex items-center justify-center">
                        <p className={montserrat.className + " text-3xl text-center font-bold text-gradient absolute mb-8 bg-linear-to-r from-blue-800 via-blue-400 to-fuchsia-500 bg-clip-text text-transparent"}>OUR LEGENDS</p>
                        </div>
                        <div className="w-full">
                            <div className="h-[2px] w-full relative sm:ml-2 bg-linear-to-r from-blue-800 via-fuchsia-500 to-transparent mb-8"></div>
                        </div>
                    </div>
            <div className="flex flex-col gap-12 md:grid md:grid-cols-2 lg:grid-cols-3 justify-items-center md:gap-12 bg-[#010e37] p-8">
                    {data.map((student) => (
                    <div className={montserrat.className + " bg-linear-to-b from-[#03185c] to-[#010e37] w-[400px] rounded-3xl shadow-md border-[1px] border-[#234fe2] text-white p-6 flex flex-col items-center"} key={student.key}>
                        <Image src={student.image} alt={student.name} width={150} height={150} className="rounded-full mb-4 w-[150px] h-[150px] object-cover object-top border-[1px] border-[#234fe2]"/>
                        <h2 className="text-2xl font-semibold">{student.name}</h2>
                        <p className="text-white">{student.date}</p>
                        <p className="text-white mt-2">{student.description}</p>
                    </div>
                    ))}
            </div>
        </div>
        </PageTransition>
        
    );
}

