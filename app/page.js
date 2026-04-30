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

  const content1 = [
    {id:1, title:"Interpretation guide EN<>ES", subheading:"All the concepts you need to know to start interpreting like a pro", title1:"Course", text1:"A comprehensive training program designed to transition beginners into job-ready remote medical interpreters.", image1:"/img/course.svg", title2:"Basic Medical Glossary", text2:"The ultimate glossary for medical interpreters. Terms from all fields: pediatrics, cardiology, neurology, among others.", image2:"/img/glossary.svg", title3:"Real case studies with explanations", text3:"We use scripts that simulate real-world scenarios based on our own experiences. This guarantees a realistic learning experience.", image3:"/img/teaching.svg", title4:"Career Toolkit", list1:"Resume template (interpreter-focused)", list2:"Sample interview questions", list3:"'What to say' scripts", list4:"Application checklist", image4:"/img/toolkit.svg",},   
  ]
  const content2 = [
    {id:1, title:"Including", subheading:"The tools you need to succeed", title1:"Core Guide", list1a:"All modules (theory + explanations)", list2a:"Structured examples", list3a:"Key concepts clearly explained", image1:"/img/guide.svg", title2:"Video Lessons", list1b:"5-10 minute videos per topic", list2b:"Straight to the point", list3b:"Watch on the go", image2:"/img/video.svg", title3:"Audio Practice", list3a:"Realistic medical dialogues", list3b:"Shadowing excercises", list3c:"Interpretation pauses ('now you interpret')", image3:"/img/audio.svg", title4:"Simulation Pack", list4a:"Full call simulations ('start to finish')", list4b:"Different difficulty levels", list4c:"Realistic scenarios:", list4d:"General consultations", list4e:"Emergency calls", list4f:"Specialized consultations (e.g. mental health)", list4g:"Pediatric", image4:"/img/simulation.svg",},
  ]

  return (
    <div className="bg-[#e7e7e7] text-black flex flex-col gap-6">
      <Nav></Nav>
      <div className="flex flex-col xl:grid xl:grid-cols-2 items-center xl:justify-start justify-center pt-[100px] w-full">
        <div className="w-full opacity-55 xl:opacity-80 xl:brightness-100 brightness-75 xl:w-full">
          <Image src="/img/heropicture.png" width={2000} height={2000} alt="hero" className="xl:shadow-2xl xl:border-4 xl:border-black xl:-rotate-4"/>
        </div>
        <div className="absolute xl:relative flex flex-col text-center items-center">
          <h1 className={montserrat.className + " sm:text-4xl text-xl font-bold mt-8"}>Turn into an expert</h1>
          <p className={robotoMono.className + " text-lg p-2"}>A practical training to help you become a remote medical interpreter</p>
          <button className="callToAction2 border-[black_1px] p-2 sm:w-[150px] sm:h-[58px] sm:text-2xl rounded-md mt-6 shadow-[black_0px_1px_3px_1px]"><Link href="/#contact">Get started</Link></button>
        </div>
      </div>
      <span className="border-b-[1px] border-gray-500 w-[90%] xl:w-[1400px] self-center p-6"></span>
      <main className="flex flex-col xl:grid xl:grid-cols-2 p-6 gap-6">
        <h1 className={montserrat.className + " text-center sm:text-4xl text-xl"}>Medical interpreting is more than just speaking two languages.</h1>
        <ul className={montserrat.className + " flex flex-col text-center sm:text-start gap-4 sm:pl-10 list-disc pl-4 sm:text-xl"}>
          <li><p>Bridge the gap between basic fluency and professional accuracy.</p></li>
          <li><p>Master the protocols that top-tier healthcare agencies actually demand.</p></li>
          <li><p>Go from &apos;bilingual speaker&apos; to &apos;certified-ready professional&apos;.</p></li>
        </ul>
      </main>
      <span className="border-t-[1px] border-gray-500 w-[90%] xl:w-[1400px] self-center p-6"></span>
      <div className="flex flex-col items-center w-full sm:p-8">
        <iframe className="sm:w-[560px] sm:h-80vh xl:w-[1120px] xl:h-[630px] w-full h-[315px]" src="https://www.youtube.com/embed/q5ZJzEeJbe0?si=n7xU8uyNau4UHroC" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
      </div>
      <span className="border-b-[1px] border-gray-500 w-[90%] xl:w-[1400px] self-center p-6"></span>
      <section id="products">
        {content1.map((c) => (
          <div key={c.id} className="flex flex-col gap-6 w-full p-6">
            <h2 className={montserrat.className + " font-bold sm:text-xl text-start xl:w-[1400px] xl:self-center"}>{c.title}</h2>
            <p className={robotoMono.className + " text-start xl:w-[1400px] xl:self-center"}>{c.subheading}</p>
            <div className="flex flex-col sm:flex-row text-center sm:text-start items-center gap-3 w-full border-[1px] border-gray-300 p-4 rounded-md shadow-[black_0px_1px_3px_1px] 2xl:w-[1400px] xl:self-center bg-white">
              <Image className="w-[50px] h-[50px] sm:w-[200px] sm:h-[200px]" src={c.image1} width={200} height={200} alt={c.title}/>
              <div className="flex flex-col justify-center gap-1">
                <h2 className={montserrat.className + " font-bold"}>{c.title1}</h2>
                <p className={montserrat.className + " text-start"}>{c.text1}</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row text-center sm:text-start items-center gap-3 w-full border-[1px] border-gray-300 p-4 rounded-md shadow-[black_0px_1px_3px_1px] 2xl:w-[1400px] xl:self-center bg-white">
              <Image className="w-[50px] h-[50px] sm:w-[200px] sm:h-[200px]" src={c.image2} width={200} height={200} alt={c.title}/>
              <div className="flex flex-col justify-center gap-1">
                <h2 className={montserrat.className + " font-bold"}>{c.title2}</h2>
                <p className={montserrat.className + " text-start"}>{c.text2}</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row text-center sm:text-start items-center gap-3 w-full border-[1px] border-gray-300 p-4 rounded-md shadow-[black_0px_1px_3px_1px] 2xl:w-[1400px] xl:self-center bg-white">
              <Image className="w-[50px] h-[50px] sm:w-[200px] sm:h-[200px]" src={c.image3} width={200} height={200} alt={c.title}/>
              <div className="flex flex-col justify-center gap-1">
                <h2 className={montserrat.className + " font-bold"}>{c.title3}</h2>
                <p className={montserrat.className + " text-start"}>{c.text3}</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row text-center sm:text-start items-center gap-3 w-full border-[1px] border-gray-300 p-4 rounded-md shadow-[black_0px_1px_3px_1px] 2xl:w-[1400px] xl:self-center bg-white">
              <Image className="w-[50px] h-[50px] sm:w-[200px] sm:h-[200px]" src={c.image4} width={200} height={200} alt={c.title}/>
              <div className="flex flex-col justify-center gap-1">
                <h2 className={montserrat.className + " font-bold"}>{c.title4}</h2>
                <ul className={montserrat.className + " flex flex-col gap-1 sm:pl-10 list-disc text-start pl-4"}>
                  <li>{c.list1}</li>
                  <li>{c.list2}</li>
                  <li>{c.list3}</li>
                  <li>{c.list4}</li>
                </ul>
              </div>
          </div>
        </div>
        ))}
        </section>
        <section id="products2">
        {content2.map((c) => (
          <div key={c.id} className="flex flex-col gap-6 w-full p-6">
            <h2 className={montserrat.className + " font-bold sm:text-xl text-start xl:w-[1400px] xl:self-center"}>{c.title}</h2>
            <p className={robotoMono.className + " text-start xl:w-[1400px] xl:self-center"}>{c.subheading}</p>
            <div className="flex flex-col sm:flex-row text-center sm:text-start items-center gap-3 w-full border-[1px] border-gray-300 p-4 rounded-md shadow-[black_0px_1px_3px_1px] 2xl:w-[1400px] xl:self-center bg-white">
              <Image className="w-[50px] h-[50px] sm:w-[200px] sm:h-[200px]" src={c.image1} width={200} height={200} alt={c.title}/>
              <div className="flex flex-col justify-center gap-1">
                <h2 className={montserrat.className + " font-bold"}>{c.title1}</h2>
                <ul className={montserrat.className + " flex flex-col gap-1 sm:pl-10 list-disc text-start pl-4"}>
                  <li>{c.list1a}</li>
                  <li>{c.list2a}</li>
                  <li>{c.list3a}</li>
                </ul>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row text-center sm:text-start items-center gap-3 w-full border-[1px] border-gray-300 p-4 rounded-md shadow-[black_0px_1px_3px_1px] 2xl:w-[1400px] xl:self-center bg-white">
              <Image className="w-[50px] h-[50px] sm:w-[200px] sm:h-[200px]" src={c.image2} width={200} height={200} alt={c.title}/>
              <div className="flex flex-col justify-center gap-1">
                <h2 className={montserrat.className + " font-bold"}>{c.title2}</h2>
                <ul className={montserrat.className + " flex flex-col gap-1 sm:pl-10 list-disc text-start pl-4"}>
                  <li>{c.list1b}</li>
                  <li>{c.list2b}</li>
                  <li>{c.list3b}</li>
                </ul>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row text-center sm:text-start items-center gap-3 w-full border-[1px] border-gray-300 p-4 rounded-md shadow-[black_0px_1px_3px_1px] 2xl:w-[1400px] xl:self-center bg-white">
              <Image className="w-[50px] h-[50px] sm:w-[200px] sm:h-[200px]" src={c.image3} width={200} height={200} alt={c.title}/>
              <div className="flex flex-col justify-center gap-1">
                <h2 className={montserrat.className + " font-bold"}>{c.title3}</h2>
                <ul className={montserrat.className + " flex flex-col gap-1 sm:pl-10 list-disc text-start pl-4"}>
                  <li>{c.list3a}</li>
                  <li>{c.list3b}</li>
                  <li>{c.list3c}</li>
                </ul>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row text-center sm:text-start items-center gap-3 w-full border-[1px] border-gray-300 p-4 rounded-md shadow-[black_0px_1px_3px_1px] 2xl:w-[1400px] xl:self-center bg-white">
              <Image className="w-[50px] h-[50px] sm:w-[200px] sm:h-[200px]" src={c.image4} width={200} height={200} alt={c.title}/>
              <div className="flex flex-col justify-center gap-1">
                <h2 className={montserrat.className + " font-bold"}>{c.title4}</h2>
                <ul className={montserrat.className + " flex flex-col gap-1 sm:pl-10 sm:list-disc text-start"}>
                  <li>{c.list4a}</li>
                  <li>{c.list4b}</li>
                  <li>{c.list4c}</li>
                  <ul className={montserrat.className + " flex flex-col gap-1 pl-4 sm:pl-10 list-disc sm:list-none"}>
                    <li>{c.list4d}</li>
                    <li>{c.list4e}</li>
                    <li>{c.list4f}</li>
                    <li>{c.list4g}</li>
                  </ul>
                </ul>
              </div>
            </div>
          </div>
        ))}
      </section>
      <span className="border-b-[1px] border-gray-500 w-[90%] xl:w-[1400px] self-center p-6"></span>
      <div className="flex flex-col items-center justify-center p-8" id="contact">
        <h1 className={montserrat.className + " sm:text-4xl font-bold text-center"}>Study now!</h1>
        <form className={montserrat.className + " flex flex-col gap-4 mt-10 w-full border-gray-300 border-[1px] bg-white p-4 rounded-md md:w-[400px] shadow-[black_0px_1px_3px_1px]"}>
            <label htmlFor="name" className="sm:text-lg font-bold">Name</label>
            <input type="text" placeholder="Name" id="name" name="name" className="border border-gray-300 rounded-md p-2" />
            <label htmlFor="email" className="sm:text-lg font-bold">Email</label>
            <input type="email" placeholder="Email" id="email" name="email" className="border border-gray-300 rounded-md p-2" />
            <div className="flex flex-col">
              <label htmlFor="phone" className="sm:text-lg font-bold">WhatsApp</label>
              <p className="text-xs text-gray-600">Include country code (e.g., +1 for USA)</p>
              </div>
            <input type="tel" placeholder="Phone" id="phone" name="phone" className="border border-gray-300 rounded-md p-2" />
            <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 callToAction2">
              Submit
            </button>
        </form>
      </div>
      
      <Footer></Footer>
    </div>
  );
}
