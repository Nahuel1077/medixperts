import Image from "next/image";
import Nav from "../components/nav";
import Footer from "../components/footer";
import Link from "next/link";
import { Roboto_Mono } from 'next/font/google';
import { Montserrat } from 'next/font/google';
import { Inter } from 'next/font/google';

const montserrat = Montserrat({ subsets: ['latin'] });
const robotoMono = Roboto_Mono({ subsets: ['latin'] });
const inter = Inter({ subsets: ['latin'] });

const data = [
    {
        name: "Our Contributors",
        description: "Many linguists contributed to this project, and this course would not have been possible without their knowledge, time, and dedication. Every contribution, big or small, has been deeply appreciated and has helped shape this course into what it is today.",
        role: "Content Writter, QA",
        image: "/img/x.jpg",
        link: "https://www.instagram.com/medixperts",
    },
    {
        name: "Nahuel Ezequiel Henríquez",
        description: "Nahuel is a dedicated language professional with over 5 years of experience in the language industry. He has a background in translation and developing, with a focus on MERN stack development. Nahuel is committed to helping others succeed and is dedicated to providing a high-quality platform that equips students with the skills they need to excel in their careers.",
        role: "Founder & Developer",
        image: "/img/hall_of_fame_Nahuel H.png",
        link: "https://www.linkedin.com/in/nahuel-ezequiel-henriquez-/",
    }
]

export default function AboutUs() {

  return (
    <div className="bg-linear-to-t from-white to-[#e7e7e7] text-black flex flex-col overflow-x-hidden">
      <Nav></Nav>
      <div className="sm:h-[700px] h-[800px]">
            <Image src="/img/halloffame.png" alt="Hall of Fame" width={2500} height={2500} className="w-full h-[800px] sm:max-h-[700px] object-cover absolute z-0 brightness-50" />
            <div className={`${montserrat.className} flex flex-col items-center justify-center min-h-screen py-2`}>
                <div className="flex flex-col items-start justify-center mb-12 w-full text-start z-10 p-2 sm:p-0">
                    <h1 className="text-3xl xl:text-7xl font-bold mb-8 text-white text-start w-full sm:pl-28">Our Mision</h1>
                        <div className="w-full">
                            <div className="h-[2px] w-[250px] xl:w-[450px] relative sm:ml-28 bg-linear-to-r from-[#2563EB] via-blue-800 to-fuchsia-500 mb-8 text-white"></div>
                        </div>
                    <p className="text-md xl:text-lg text-gray-300 max-w-2xl text-start w-full sm:pl-28">Our motivation stems from the desire to train future medical interpreters by equipping them with the essential tools and real-world skills necessary for outstanding professional performance. We strongly believe that consistent practice leads to excellence. For this reason, we developed this extensive, hands-on course full of practical activities so you can begin interpreting like a pro with confidence.</p>
                </div>
                <div className="flex flex-row items-center justify-center w-full bg-[#010e37] pt-0.5">
                    <div className="sm:w-full w-1/3">
                        <div className="h-[2px] w-full relative sm:ml-2 bg-linear-to-r from-transparent via-blue-800 to-blue-900 mb-8"></div>
                    </div>
                    <div className="w-full flex items-center justify-center">
                        <p className={montserrat.className + " text-3xl text-center font-bold text-gradient absolute mb-8 bg-linear-to-r from-blue-800 via-blue-400 to-fuchsia-500 bg-clip-text text-transparent"}>Who we are</p>
                    </div>
                    <div className="sm:w-full w-1/3">
                        <div className="h-[2px] w-full sm:w-full relative sm:ml-2 bg-linear-to-r from-blue-800 via-fuchsia-500 to-transparent mb-8"></div>
                    </div>
                </div>
            </div>
        </div>
        <div className={montserrat.className + " flex flex-col justify-items-center bg-[#010e37] p-2 text-white pb-6"}>
            <div className="w-full p-4 flex flex-col items-center">
                <p className={montserrat.className + " text-lg mt-4 text-justify sm:w-1/2"}>We are a group of language professionals with a shared vision: to empower individuals to become skilled remote medical interpreters. With over 5 years of experience in the language industry, we have witnessed firsthand the transformative impact that effective communication can have on healthcare outcomes. Our mission is to provide comprehensive and practical training that equips aspiring interpreters with the knowledge, skills, and confidence they need to excel in this rewarding field.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full p-0 sm:p-4 justify-items-center">
                {data.map((person)=>(
                    <div className={montserrat.className + " bg-linear-to-b from-[#03185c] to-[#010e37] w-full sm:w-[400px] rounded-3xl shadow-md border-[1px] border-[#234fe2] text-white p-4 sm:p-6 flex flex-col items-center"} key={person.name}>
                        <Link href={person.link} alt="LinkedIn Profile">
                            <Image src={person.image} alt={person.name} width={150} height={150} className="rounded-full mb-4 w-[150px] h-[150px] object-cover object-top border-[1px] border-[#234fe2]"/>
                        </Link>
                        <h2 className="text-2xl font-semibold">{person.name}</h2>
                        <p className="text-gray-400">{person.role}</p>
                        <p className="text-white mt-2 text-justify">{person.description}</p>
                    </div>
                ))}
            </div>
            <div className="flex flex-row items-center justify-center w-full bg-[#010e37] pt-6">
                    <div className="sm:w-full w-1/3">
                        <div className="h-[2px] w-full relative sm:ml-2 bg-linear-to-r from-transparent via-blue-800 to-blue-900 mb-8"></div>
                    </div>
                    <div className="w-full flex items-center justify-center">
                        <p className={montserrat.className + " text-3xl text-center font-bold text-gradient absolute mb-8 bg-linear-to-r from-blue-800 via-blue-400 to-fuchsia-500 bg-clip-text text-transparent"}>Our Values</p>
                    </div>
                    <div className="sm:w-full w-1/3">
                        <div className="h-[2px] w-full sm:w-full relative sm:ml-2 bg-linear-to-r from-blue-800 via-fuchsia-500 to-transparent mb-8"></div>
                    </div>
            </div>
            <div className="w-full p-4 flex flex-col items-center">
                <p className={montserrat.className + " sm:w-1/2 text-lg mt-4 text-justify"}>We are committed to fostering a supportive and inclusive learning environment where students can thrive. We believe in the power of education to transform lives and are dedicated to providing high-quality, accessible training that meets the needs of our students. We value integrity, professionalism, and continuous improvement, and we strive to instill these values in our students as they embark on their journey to become remote medical interpreters.</p>
            </div>
        </div>
        <Footer/>
    </div>
  );
}
