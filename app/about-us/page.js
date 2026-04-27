import Image from "next/image";
import Nav from "../components/nav";
import Link from "next/link";

export default function AboutUs() {

  return (
    <div className="bg-linear-to-t from-white to-[#ffffe0] text-black flex flex-col">
      <Nav></Nav>
        <div className="flex flex-col items-center justify-center pt-[100px] gap-10 sm:gap-20">
            <div className="w-full p-4 sm:w-1/2 flex flex-col items-center">
                <h1 className="text-4xl font-bold mt-8">About us 😎</h1>
                <p className="text-lg mt-4 text-center text-justify">We are two passionate language professionals with a shared vision: to empower individuals to become skilled remote medical interpreters. With a combined experience of over 10 years in the language industry, we have witnessed firsthand the transformative impact that effective communication can have on healthcare outcomes. Our mission is to provide comprehensive and practical training that equips aspiring interpreters with the knowledge, skills, and confidence they need to excel in this rewarding field.</p>
            </div>
            <div className="w-full p-4 sm:w-1/2 flex flex-col items-center sm:mt-8">
                <h1 className="text-4xl font-bold mt-8">Our values 🌟</h1>
                <p className="text-lg mt-4 text-center text-justify">We are committed to fostering a supportive and inclusive learning environment where students can thrive. We believe in the power of education to transform lives and are dedicated to providing high-quality, accessible training that meets the needs of our students. We value integrity, professionalism, and continuous improvement, and we strive to instill these values in our students as they embark on their journey to become remote medical interpreters.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-start">
                <div className="flex flex-col gap-4 items-center">
                    <Link className="flex flex-col gap-4 items-center" href="https://www.linkedin.com/in/lorenzo-guarini-dosta-76365429b/"><Image src="/img/lolo-pp.jfif" width={400} height={400} alt="Lorenzo Guarini Dosta" className="border-4 border-[#000000] rounded-full w-[200px] h-[200px] md:w-[400px] md:h-[400px] object-cover"/>
                    <h2 className="text-2xl font-bold underline">Lorenzo Guarini Dosta</h2></Link>
                    <p className="text-lg text-justify p-2 w-full md:w-[400px]">Lorenzo is a seasoned language professional with over 5 years of experience in the language industry. He has a background in translation and interpretation, with a focus on medical interpreting. Lorenzo is passionate about helping others succeed and is dedicated to providing high-quality training that equips students with the skills they need to excel in their careers.</p>
                </div>
                <div className="flex flex-col gap-4 items-center">
                    <Link href="https://www.linkedin.com/in/nahuel-ezequiel-henriquez-/" className="flex flex-col items-center gap-4"><Image src="/img/nahue-pp.jpg" width={400} height={400} alt="Nahuel Ezequiel Henríquez" className="border-4 border-[#000000] rounded-full w-[200px] h-[200px] md:w-[400px] md:h-[400px] object-cover"/>
                    <h2 className="text-2xl font-bold underline">Nahuel Ezequiel Henríquez</h2></Link>
                    <p className="text-lg text-justify p-2 w-full md:w-[400px]">Nahuel is a dedicated language professional with over 5 years of experience in the language industry. He has a background in translation and developing, with a focus on MERN stack development. Nahuel is committed to helping others succeed and is dedicated to providing a high-quality platform that equips students with the skills they need to excel in their careers.</p>
                </div>
            </div>
        </div>
    </div>
  );
}
