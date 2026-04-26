'use client'
import Image from "next/image";
import Nav from "./components/nav";
import Footer from "./components/footer";
import Link from "next/link";

export default function Home() {

  const content = [
    {id:1, title:"Interpretation guide EN<>ES", subheading:"All the concepts you need to know to start interpreting like a pro", title1:"Course", text1:"Body text for whatever you’d like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story.", image1:"/img/course.svg", title2:"Basic Medical Glossary", text2:"Body text for whatever you’d like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story.", image2:"/img/glossary.svg", title3:"Real case studies with explanations", text3:"Body text for whatever you’d like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story.", image3:"/img/teaching.svg", title4:"Career Toolkit", text4:"Resume template (interpreter-focused), Sample interview questions, 'What to say' scripts, Application checklist", image4:"/img/toolkit.svg",},
    {id:2, title:"Including", subheading:"The tools you need to succeed", title1:"Core Guide", text1:"All modules (theory + explanations), Structured examples, Key concepts clearly explained", image1:"/img/guide.svg", title2:"Video Lessons", text2:"5-10 minute videos per topic, Straight to the point, Watch on the go", image2:"/img/video.svg", title3:"Audio Practice", text3:"Realistic medical dialogues, Shadowing excercises, Interpretation pauses ('now you interpret')", image3:"/img/audio.svg", title4:"Simulation Pack", text4:"Full call simulations ('start to finish'), Different difficulty levels, Realistic scenarios: General consultations, Emergency calls, Specialized consultations (e.g. mental health), Pediatric", image4:"/img/simulation.svg",},    
  ]

  return (
    <div className="bg-white text-black flex flex-col gap-4">
      <Nav></Nav>
      <div className="flex flex-col items-center justify-center pt-[100px] sm:pt-0">
        <div className="w-full opacity-55">
          <Image src="/img/heropicture.png" width={2000} height={2000} alt="hero"/>
        </div>
        <div className="absolute flex flex-col text-center items-center">
          <h1 className="text-4xl font-bold mt-8">Turn into an expert</h1>
          <p className="text-lg mt-4">A practical training to help you become a remote medical interpreter</p>
          <button className="callToAction2 border-[black_1px] p-2 w-[150px] h-[58px] text-2xl rounded-md mt-6 shadow-[black_0px_1px_3px_1px]">Get started</button>
        </div>
      </div>
      <div className="flex flex-col items-center w-full sm:p-8">
        <iframe className="sm:w-[560px] sm:h-80vh xl:w-[1120px] xl:h-[630px] w-full h-[315px]" src="https://www.youtube.com/embed/q5ZJzEeJbe0?si=n7xU8uyNau4UHroC" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
      </div>
      <main id="products">
        {content.map((c) => (
          <div key={c.id} className="flex flex-col gap-6 w-full p-6">
            <h2>{c.title}</h2>
            <p>{c.subheading}</p>
            <div className="flex flex-col sm:flex-row text-center sm:text-start items-center gap-3 w-full border-[1px] border-gray-300 p-4 rounded-md">
              <Image className="w-[50px] h-[50px] sm:w-[200px] sm:h-[200px]" src={c.image1} width={200} height={200} alt={c.title}/>
              <div className="flex flex-col justify-center gap-1">
                <h2>{c.title1}</h2>
                <p>{c.text1}</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row text-center sm:text-start items-center gap-3 w-full border-[1px] border-gray-300 p-4 rounded-md">
              <Image className="w-[50px] h-[50px] sm:w-[200px] sm:h-[200px]" src={c.image2} width={200} height={200} alt={c.title}/>
              <div className="flex flex-col justify-center gap-1">
                <h2>{c.title2}</h2>
                <p>{c.text2}</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row text-center sm:text-start items-center gap-3 w-full border-[1px] border-gray-300 p-4 rounded-md">
              <Image className="w-[50px] h-[50px] sm:w-[200px] sm:h-[200px]" src={c.image3} width={200} height={200} alt={c.title}/>
              <div className="flex flex-col justify-center gap-1">
                <h2>{c.title3}</h2>
                <p>{c.text3}</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row text-center sm:text-start items-center gap-3 w-full border-[1px] border-gray-300 p-4 rounded-md">
              <Image className="w-[50px] h-[50px] sm:w-[200px] sm:h-[200px]" src={c.image4} width={200} height={200} alt={c.title}/>
              <div className="flex flex-col justify-center gap-1">
                <h2>{c.title4}</h2>
                <p>{c.text4}</p>
              </div>
            </div>
          </div>
        ))}
      </main>
      <Footer></Footer>
    </div>
  );
}
