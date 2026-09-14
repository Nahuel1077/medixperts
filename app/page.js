'use client'
import Image from "next/image";
import Nav from "./components/nav";
import Footer from "./components/footer";
import Link from "next/link";
import { Roboto_Mono } from 'next/font/google';
import { Montserrat } from 'next/font/google';
import { Inter } from 'next/font/google';

const montserrat = Montserrat({ subsets: ['latin'] })

const robotoMono = Roboto_Mono({ subsets: ['latin'] })

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const cleanForm = (e) => {
    e.preventDefault();
    e.target.reset();
  };
  
  const content1 = [
    {id:1, title:"Interpretation guide EN<>ES", subheading:"All the concepts you need to know to start interpreting like a pro", subtitle:null, image:null, text:null},
    {id:2, subtitle:"Course", text:"A comprehensive training program designed to transition beginners into job-ready remote medical interpreters.", image:"/img/course.svg"},
    {id:3, subtitle:"Basic Medical Glossary", text:"The ultimate glossary for medical interpreters. Terms from all fields: pediatrics, cardiology, neurology, among others.", image:"/img/glossary.svg"}, 
    {id:4, subtitle:"Real case studies with explanations", text:"We use scripts that simulate real-world scenarios based on our own experiences. This guarantees a realistic learning experience.", image:"/img/teaching.svg"}, 
    {id:5, subtitle:"Career Toolkit", list1:"Resume template (interpreter-focused)", list2:"Sample interview questions", list3:"'What to say' scripts", list4:"Application checklist", image:"/img/toolkit.svg",},
    
  ];
  const content2 = [
    {id:1, title:"Including", subheading:"The tools you need to succeed", subtitle:null, image:null, text:null},
    {id:2, subtitle:"Core Guide", list1:"All modules (theory + explanations)", list2:"Structured examples", list3:"Key concepts clearly explained", image:"/img/guide.svg"},
    {id:3, subtitle:"Video Lessons", list1:"3-10 minute videos per topic", list2:"Straight to the point", list3:"Watch on the go", image:"/img/video.svg"}, 
    {id:4, subtitle:"Audio Practice", list1:"Realistic medical dialogues", list2:"Shadowing excercises", list3:"Interpretation pauses ('now you interpret')", image:"/img/audio.svg"}, 
    {id:5, subtitle:"Simulation Pack", list1:"Full call simulations ('start to finish')", list2:"Different difficulty levels", list3:"Realistic scenarios:", item1:"General consultations", item2:"Emergency calls", item3:"Specialized consultations (e.g. mental health)", item4:"Pediatric", image:"/img/simulation.svg",},
  ];

  return (
    <div className="bg-[#e7e7e7] text-black flex flex-col gap-6 overflow-x-hidden">
      <Image src="/img/blank-bg.jpg" alt="background" width={2000} height={2000} className="hidden xl:block xl:h-[800px] absolute w-full z-0 brightness-50"/>
      <Nav></Nav>
      <div className="flex flex-col xl:grid xl:grid-cols-2 items-center xl:justify-start justify-center pt-[100px] w-full xl:h-[700px]">
        <div className="w-full opacity-55 xl:opacity-80 xl:brightness-100 brightness-75">
          <Image src="/img/heropicture.png" width={2000} height={2000} alt="hero" className="xl:shadow-2xl xl:border-[20px] xl:border-black xl:-rotate-4"/>
        </div>
        <div className="absolute xl:relative flex flex-col text-center items-center xl:text-white">
          <h1 className={montserrat.className + " sm:text-4xl text-xl font-bold mt-8 z-10"}>Turn into an expert</h1>
          <p className={robotoMono.className + " text-lg p-2 z-10"}>A practical training to help you become a remote medical interpreter</p>
          <button className="callToAction2 border-[black_1px] p-2 sm:w-[150px] sm:h-[58px] sm:text-2xl rounded-md mt-6 shadow-[black_0px_1px_3px_1px]"><Link href="/#contact">Get started</Link></button>
        </div>
      </div>
      <span className="border-b-[1px] border-gray-500 w-[90%] 2xl:w-[1400px] self-center p-6 mt-7 z-10"></span>
      <main className="flex flex-col xl:grid xl:grid-cols-2 p-6 gap-6">
        <h1 className={montserrat.className + " text-center sm:text-4xl text-xl z-10"}>Medical interpreting is more than just speaking two languages.</h1>
        <ul className={montserrat.className + " flex flex-col text-center sm:text-start gap-4 sm:pl-10 list-disc pl-4 sm:text-xl z-10"}>
          <li><p>Bridge the gap between basic fluency and professional accuracy.</p></li>
          <li><p>Master the protocols that top-tier healthcare agencies actually demand.</p></li>
          <li><p>Go from &apos;bilingual speaker&apos; to &apos;certified-ready professional&apos;.</p></li>
        </ul>
      </main>
      <span className="border-t-[1px] border-gray-500 w-[90%] xl:w-[1400px] self-center p-6 z-10"></span>
      <section className="flex flex-col items-center gap-4 p-3.5 z-10">
        <h1 className={montserrat.className + " text-center sm:text-4xl text-xl"}>Why is Medical Interpreting so important?</h1>
        <div className={robotoMono.className + " grid sm:grid-cols-4 grid-col-1 justify-evenly items-stretch gap-4 xl:w-[900px] p-6 min-w-1/2 sm:w-[90vw] md:w-[90vw] lg:w-[900px]  text-white rounded-2xl bg-radial from-blue-700 from-40% to-blue-400 shadow-[black_0px_1px_3px_1px]"}>
          <div className="flex flex-col items-center border-b-[1px] sm:border-b-0 sm:border-r-[1px] border-white p-4 h-auto">
            <h2 className="text-xl lg:text-4xl">25M+</h2>
            <p className="text-md xl:text-md">LEP patients</p>
            <p className="text-xs text-gray-400 sm:text-gray-700 text-center">Limited English Proficiency</p>
          </div>
          <div className="flex flex-col items-center border-b-[1px] sm:border-b-0 sm:border-r-[1px] border-white p-4 h-auto">
            <h2 className="text-xl lg:text-4xl">#1</h2>
            <p className="text-md xl:text-md">Spanish demand</p>
          </div>
          <div className="flex flex-col items-center border-b-[1px] sm:border-b-0 sm:border-r-[1px] border-white p-4 h-auto">
            <h2 className="text-xl lg:text-4xl">50%</h2>
            <p className="text-md xl:text-md">Shortage</p>
          </div>
          <div className="flex flex-col items-center border-white p-4 h-auto">
            <h2 className="text-xl lg:text-4xl">Millions</h2>
            <p className="text-md xl:text-md">Annual calls</p>
          </div>
        </div>
      </section>
      
      <span className="border-b-[1px] border-gray-500 w-[90%] 2xl:w-[1400px] self-center p-6"></span>
        <section id="products" className="z-10">
          <div className="flex flex-col mb-14">
            {content1.map((content)=>(
                <div key={content.id} className="flex flex-col gap-2 w-full p-1 items-start">
                    <h1 className={montserrat.className + " text-start font-bold lg:text-3xl sm:text-xl w-full 2xl:self-center xl:w-[1400px]"}>{content.title}</h1>
                    <p className={robotoMono.className + " text-start xl:w-[1400px] 2xl:self-center"}>{content.subheading}</p>
                      {content.subtitle !== null &&(
                        <div key={content.id} className="flex flex-col sm:flex-row text-center sm:text-start items-center gap-3 w-full border-[1px] border-gray-300 p-4 rounded-md shadow-[black_0px_1px_3px_1px] 2xl:w-[1400px] xl:self-center bg-white">
                      <Image className="w-[50px] h-[50px] sm:w-[200px] sm:h-[200px]" src={content.image} width={200} height={200} alt={content.subtitle}/>
                      <div className="flex flex-col justify-center gap-1">
                        <h3 className={montserrat.className + " font-bold text-3xl"}>{content.subtitle}</h3>
                        <p className={montserrat.className + " text-start"}>{content.text||""}</p>
                        {content.list1?(<ul className={montserrat.className + " flex flex-col gap-1 sm:pl-10 list-disc text-start pl-4"}>
                          <li>{content.list1}</li>
                          <li>{content.list2}</li>
                          <li>{content.list3}</li>
                          <li>{content.list4}</li>
                        </ul>):("")}
                      </div>
                    </div>)}
                </div>
            ))}
          </div>
          {content2.map((content)=>(
              <div key={content.id} className="flex flex-col gap-2 w-full p-1 items-start">
                  <h1 className={montserrat.className + " text-start font-bold lg:text-3xl sm:text-xl w-full 2xl:self-center xl:w-[1400px]"}>{content.title}</h1>
                  <p className={robotoMono.className + " text-start xl:w-[1400px] 2xl:self-center"}>{content.subheading}</p>
                    {content.subtitle !== null &&(
                      <div key={content.id} className="flex flex-col sm:flex-row text-center sm:text-start items-center gap-3 w-full border-[1px] border-gray-300 p-4 rounded-md shadow-[black_0px_1px_3px_1px] 2xl:w-[1400px] xl:self-center bg-white">
                    <Image className="w-[50px] h-[50px] sm:w-[200px] sm:h-[200px]" src={content.image} width={200} height={200} alt={content.subtitle}/>
                    <div className="flex flex-col justify-center gap-1">
                      <h3 className={montserrat.className + " font-bold text-3xl"}>{content.subtitle}</h3>
                      <p className={montserrat.className + " text-start"}>{content.text||""}</p>
                      {content.list1?(<ul className={montserrat.className + " flex flex-col gap-1 sm:pl-10 list-disc text-start pl-4"}>
                        <li>{content.list1}</li>
                        <li>{content.list2}</li>
                        <li>
                          {content.list3}
                          {content.item1 && (
                            <ul>
                              <li>{content.item1}</li>
                              <li>{content.item2}</li>
                              <li>{content.item3}</li>
                              <li>{content.item4}</li>
                            </ul>)}
                        </li>
                      </ul>):("")}
                    </div>
                  </div>)}
              </div>
          ))}
        </section>
      <span className="border-b-[1px] border-gray-500 w-[90%] 2xl:w-[1400px] self-center p-6 z-10"></span>
      <div className="flex flex-col items-center justify-center p-8 z-10" id="contact">
        <h1 className={montserrat.className + " sm:text-4xl font-bold text-center"}>Study now!</h1>
        <form onSubmit={cleanForm} action="https://formsubmit.co/info@medixperts.org" method="POST" className={montserrat.className + " flex flex-col gap-4 mt-10 w-full border-gray-300 border-[1px] bg-white p-4 rounded-md md:w-[400px] shadow-[black_0px_1px_3px_1px]"}>
                        <label htmlFor="name" className="text-lg font-bold">Name</label>
                        <input type="text" placeholder="Name" id="name" name="name" required className="border border-gray-300 rounded-md p-2" />
                        <label htmlFor="email" className="text-lg font-bold">Email</label>
                        <input type="email" placeholder="Email" id="email" name="email" required className="border border-gray-300 rounded-md p-2" />
                        <label htmlFor="message" className="text-lg font-bold">Message</label>
                        <textarea placeholder="Message" id="message" name="message" className="border border-gray-300 rounded-md p-2" rows="4"></textarea>
                        <button type="submit" id="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 callToAction2 max-w-[100px] self-center">
                        Submit
                        </button>
                </form>
      </div>     
      <Footer></Footer>
    </div>
  );
}
