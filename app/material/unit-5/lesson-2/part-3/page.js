'use client'
import Aside from "../../../../components/aside";
import Class from "../../../../components/class";
import { useAuth } from "../../../../hooks/useAuth";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const lessonData = {
  id: "unit4-title",
  unitTitle: "Lesson 2 - Part 3: Car Accident Vocabulary",
  description: null,
  nextLesson: "/material/unit-5/lesson-2/part-4",
  prevLesson: "/material/unit-5/lesson-2/part-2",
  restart: "/material/unit-5",
  courseNumber: 5,
  currentStep: 3,
  totalSteps: 4,
};

const examples = [
  {src:"/img/lesson-2-accident/carParts.png", alt:"Car Parts", title:"Car Parts"},
  {src:"/img/lesson-2-accident/carCollisions.png", alt:"Car collisions", title:"Car Collisions"},
  {src:"/img/lesson-2-accident/injuries.png", alt:"Injuries", title:"Types of Injuries"},
]

export default function Lesson2() {
  const { user, loading } = useAuth();
  const [currentImage, setCurrentImage] = useState(0);
  const [animation, setAnimation] = useState("animate__fadeIn");
  const [toggleContent, setToggleContent] = useState("Table");



  const nextImage = () => {
    setAnimation("animate__fadeOutLeft");  
    setTimeout(() => {
      setCurrentImage((prev) => (prev + 1) % examples.length);
      setAnimation("animate__fadeInRight");
    }, 300);
    };

    const prevImage = () => {
    setAnimation("animate__fadeOutRight");
    setTimeout(() => {
      setCurrentImage(
        (prev) => (prev - 1 + examples.length) % examples.length
      );
      setAnimation("animate__fadeInLeft");
    }, 300);
    };
  
  const vehicleInterior = [
    {title:"Vehicle Anatomy (Partes del vehículo)", subtitle:"Interior (Interior del vehículo)"},
    {english: "Steering wheel", español: "Volante"},
    {english: "Seat belt", español: "Cinturón de seguridad"},
    {english: "Driver's seat", español: "Asiento del conductor"},
    {english: "Passenger seat", español: "Asiento del pasajero"},
    {english: "Headrest", español: "Reposacabezas"},
    {english: "Rearview mirror", español: "Espejo retrovisor"},
    {english: "Side mirror", español: "Espejo lateral"},
    {english: "Dashboard", español: "Tablero/Panel de instrumentos"},
    {english: "Brake pedal", español: "Pedal de freno"},
    {english: "Gas pedal", español: "Pedal del acelerador"},
    {english: "Gear shift", español: "Palanca de cambios"},
    {english: "Parking brake", español: "Freno de mano"},
    {english: "Windshield", español: "Parabrisas"},
    {english: "Airbag", español: "Bolsa de aire"},
  ]
  
  const vehicleExterior = [
    {title:"Vehicle Anatomy (Partes del vehículo)", subtitle:"Exterior (Exterior del vehículo)"},
    {english: "Hood", español: "Capó"},
    {english: "Trunk", español: "Baúl/Cajuela/Maletero"},
    {english: "Roof", español: "Techo"},
    {english: "Front bumper", español: "Parachoques delantero"},
    {english: "Back bumper", español: "Parachoques trasero"},
    {english: "Headlight", español: "Faro delantero"},
    {english: "Tail light", español: "Luz trasera"},
    {english: "Turn signal", español: "Luz direccional/Luz de giro"},
    {english: "Tire", español: "Neumático/Llanta"},
    {english: "Wheel", español: "Rueda"},
    {english: "Door", español: "Puerta"},
    {english: "Window", español: "Ventana"},
    {english: "License plate", español: "Placa/Matrícula"},
    {english: "Fender", español: "Guardabarros/Salpicadera"},
  ]
  
  const impact = [
    {title:"Impact Types (Tipos de colisión)", subtitle: null},
    {english: "Rear end", español: "Choque por alcance / Colisión por detrás"},
    {english: "Front end", español: "Choque frontal"},
    {english: "Side-impact", español: "Choque lateral"},
    {english: "T-bone", español: "Choque en 'T'"},
    {english: "Head-on collision", español: "Colisión de frente"},
    {english: "Rollover", español: "Vuelco/Volcadura"},
    {english: "Multi-vehicle accident", español: "Accidente con múltiples vehículos"},
    {english: "Hit-and-run", español: "Choque con fuga"},
    {english: "Fender bender", español: "Choque menor"},
  ]
  
  const accidentVerbs = [
    {title: "Common Accident Verbs (Verbos comunes relacionados con accidentes)", subtitle: null},
    {english: "Crash into", español: "Chocar contra"},
    {english: "Rear-end", español: "Chocar por detrás"},
    {english: "Hit", español: "Golpear/Chocar con"},
    {english: "Collide with", español: "Colisionar con"},
    {english: "Strike", español: "Impactar"},
    {english: "Lose control", español: "Perder el control"},
    {english: "Skid", español: "Derrapar"},
    {english: "Swerve", español: "Dar un volantazo"},
    {english: "Slam on brakes", español: "Frenar brúscamente"},
    {english: "Accelerate", español: "Acelerar"},
    {english: "Reverse", español: "Retroceder"},
    {english: "Back up", español: "Dar marcha atrás"},
    {english: "Merge", español: "Incorporarse al tráfico"},
    {english: "Yield", español: "Ceder el paso"},
    {english: "Overtake", español: "Adelantar"},
    {english: "Run a red light", español: "Pasar un semáforo en rojo"},
  ]
  
  const patientStatements = [
    {title: "Common Patient Statements (Expresiones comunes del paciente)", subtitle: null},
    {english: "I was rear-ended", español: "Me chocaron por detrás"},
    {english: "Someone hit me from behind", español: "Alguien me chocó por atrás"},
    {english: "I hit another vehicle", español: "Choqué contra otro vehículo"},
    {english: "Another car ran a red light", español: "Otro vehículo se pasó el semáforo en rojo"},
    {english: "My airbags deployed", español: "Se activaron las bolsas de aire"},
    {english: "I was wearing my seat belt", español: "Llevaba puesto el cinturón de seguridad"},
    {english: "The car rolled over", español: "El vehículo volcó"},
    {english: "The windshield shattered", español: "El parabrisas se hizo añicos"},
    {english: "I lost control of the vehicle", español: "Perdí el control del vehículo"},
    {english: "I hydroplaned", español: "El vehículo hizo hidroplaneo"},
    {english: "The car spun around", español: "El vehículo hizo un giro sobre sí mismo"},
    {english: "The vehicle was totaled", español: "El vehículo sufrió pérdida total"},
  ]
  
  const accidentTerm = [
    {title: "Accident & Emergency Terminology (Terminología frecuente en accidentes y emergencias)", subtitle: null},
    {english: "Minor damage", español: "Daños menores"},
    {english: "Major damage", español: "Daños importantes"},
    {english: "Vehicle was totaled", español: "Pérdida total del vehículo"},
    {english: "Airbags deployed", español: "Se activaron las bolsas de aire"},
    {english: "Airbags did not deployed", español: "No se activaron las bolsas de aire"},
    {english: "Broken windshield", español: "Parabrisas roto"},
    {english: "Cracked windshield", español: "Parabrisas agrietado"},
    {english: "Flat tire", español: "Neumático pinchado / Llanta desinflada"},
    {english: "Smoke coming from the engine", español: "Salía humo del motor"},
    {english: "Vehicle caught fire", español: "El vehículo se incendió"},
    {english: "Tow truck", español: "Grúa"},
    {english: "Insurance company", español: "Compañía de seguros / Aseguradora"},
    {english: "Police report", español: "Informe policial"},
    {english: "EMS arrived", español: "Llegó el servicio de emergencias médicas (EMS)"},
  ]
  
  const injuries = [
    {title: "Common Injuries After an MVA (Lesiones comunes tras un accidente automovilístico)", subtitle: null},
    {english: "Whiplash", español: "Latigazo cervical"},
    {english: "Concussion", español: "Conmoción cerebral"},
    {english: "Broken ribs", español: "Costillas fracturadas"},
    {english: "Fracture", español: "Fractura"},
    {english: "Bruising", español: "Moretones/Contusiones"},
    {english: "Cuts", español: "Cortes/Laceraciones"},
    {english: "Neck pain", español: "Dolor de cuello"},
    {english: "Back pain", español: "Dolor de espalda"},
    {english: "Shoulder pain", español: "Dolor de hombro"},
    {english: "Knee pain", español: "Dolor de rodilla"},
    {english: "Chest pain", español: "Dolor de pecho"},
    {english: "Airbag burn", español: "Quemadura por bolsa de aire"},
    {english: "Seat belt bruise", español: "Moretón por el cinturón de seguridad"},
    {english: "Loss of consciosness", español: "Pérdida del conocimiento"}
  ]

  if (loading) {return <div className="flex justify-center items-center h-screen">
    <div className="w-12 h-12 border-4 border-gray-300 border-t-black rounded-full animate-spin"></div>
    </div>
  };
  return (
    <div className="flex xl:flex-row flex-col bg-black min-h-screen">
      <Aside />
      <Class lessonData={lessonData}>
        
          <div className="flex gap-4 justify-center w-full">
            <button onClick={()=>setToggleContent("Table")} className={`px-6 py-2 rounded ${toggleContent === "Table" ? "bg-blue-600 text-white" : "bg-gray-200"}`}>Terms</button>
            <button onClick={()=>setToggleContent("Grid")} className={`px-6 py-2 rounded ${toggleContent === "Grid" ? "bg-blue-600 text-white" : "bg-gray-200"}`}>Examples</button>
          </div>
          <div className="flex flex-col items-center p-4 gap-14">
          { toggleContent === "Table"? (
            <div className="flex flex-col items-center p-4 gap-14">
            <table className="w-full max-w-2xl border-collapse border border-gray-300">
              <thead>
                <tr className="bg-blue-500">
                  <th colSpan={2} className="p-4 text-center border border-gray-300">
                    <h2 className="text-xl font-bold">{vehicleInterior[0].title}</h2>
                    <p className="text-gray-200 mt-1">{vehicleInterior[0].subtitle}</p>
                  </th>
                </tr>
                <tr className="bg-gray-50">
                  <th className="p-3 border border-gray-300 text-left text-black">English</th>
                  <th className="p-3 border border-gray-300 text-left text-black">Español</th>
                </tr>
              </thead>
              <tbody>
                {vehicleInterior.slice(1).map((item, index) => (
                  <tr key={index} className="hover:bg-gray-800">
                    <td className="p-3 border border-gray-300">{item.english}</td>
                    <td className="p-3 border border-gray-300 font-medium">{item.español}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            
            <table className="w-full max-w-2xl border-collapse border border-gray-300">
              <thead>
                <tr className="bg-blue-500">
                  <th colSpan={2} className="p-4 text-center border border-gray-300">
                    <h2 className="text-xl font-bold">{vehicleExterior[0].title}</h2>
                    <p className="text-gray-200 mt-1">{vehicleExterior[0].subtitle}</p>
                  </th>
                </tr>
                <tr className="bg-gray-50">
                  <th className="p-3 border border-gray-300 text-left text-black">English</th>
                  <th className="p-3 border border-gray-300 text-left text-black">Español</th>
                </tr>
              </thead>
              <tbody>
                {vehicleExterior.slice(1).map((item, index) => (
                  <tr key={index} className="hover:bg-gray-800">
                    <td className="p-3 border border-gray-300">{item.english}</td>
                    <td className="p-3 border border-gray-300 font-medium">{item.español}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <table className="w-full max-w-2xl border-collapse border border-gray-300">
              <thead>
                <tr className="bg-blue-500">
                  <th colSpan={2} className="p-4 text-center border border-gray-300">
                    <h2 className="text-xl font-bold">{impact[0].title}</h2>
                    <p className="text-gray-200 mt-1">{impact[0].subtitle}</p>
                  </th>
                </tr>
                <tr className="bg-gray-50">
                  <th className="p-3 border border-gray-300 text-left text-black">English</th>
                  <th className="p-3 border border-gray-300 text-left text-black">Español</th>
                </tr>
              </thead>
              <tbody>
                {impact.slice(1).map((item, index) => (
                  <tr key={index} className="hover:bg-gray-800">
                    <td className="p-3 border border-gray-300">{item.english}</td>
                    <td className="p-3 border border-gray-300 font-medium">{item.español}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <table className="w-full max-w-2xl border-collapse border border-gray-300">
              <thead>
                <tr className="bg-blue-500">
                  <th colSpan={2} className="p-4 text-center border border-gray-300">
                    <h2 className="text-xl font-bold">{accidentVerbs[0].title}</h2>
                    <p className="text-gray-200 mt-1">{accidentVerbs[0].subtitle}</p>
                  </th>
                </tr>
                <tr className="bg-gray-50">
                  <th className="p-3 border border-gray-300 text-left text-black">English</th>
                  <th className="p-3 border border-gray-300 text-left text-black">Español</th>
                </tr>
              </thead>
              <tbody>
                {accidentVerbs.slice(1).map((item, index) => (
                  <tr key={index} className="hover:bg-gray-800">
                    <td className="p-3 border border-gray-300">{item.english}</td>
                    <td className="p-3 border border-gray-300 font-medium">{item.español}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <table className="w-full max-w-2xl border-collapse border border-gray-300">
              <thead>
                <tr className="bg-blue-500">
                  <th colSpan={2} className="p-4 text-center border border-gray-300">
                    <h2 className="text-xl font-bold">{patientStatements[0].title}</h2>
                    <p className="text-gray-200 mt-1">{patientStatements[0].subtitle}</p>
                  </th>
                </tr>
                <tr className="bg-gray-50">
                  <th className="p-3 border border-gray-300 text-left text-black">English</th>
                  <th className="p-3 border border-gray-300 text-left text-black">Español</th>
                </tr>
              </thead>
              <tbody>
                {patientStatements.slice(1).map((item, index) => (
                  <tr key={index} className="hover:bg-gray-800">
                    <td className="p-3 border border-gray-300">{item.english}</td>
                    <td className="p-3 border border-gray-300 font-medium">{item.español}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <table className="w-full max-w-2xl border-collapse border border-gray-300">
              <thead>
                <tr className="bg-blue-500">
                  <th colSpan={2} className="p-4 text-center border border-gray-300">
                    <h2 className="text-xl font-bold">{accidentTerm[0].title}</h2>
                    <p className="text-gray-200 mt-1">{accidentTerm[0].subtitle}</p>
                  </th>
                </tr>
                <tr className="bg-gray-50">
                  <th className="p-3 border border-gray-300 text-left text-black">English</th>
                  <th className="p-3 border border-gray-300 text-left text-black">Español</th>
                </tr>
              </thead>
              <tbody>
                {accidentTerm.slice(1).map((item, index) => (
                  <tr key={index} className="hover:bg-gray-800">
                    <td className="p-3 border border-gray-300">{item.english}</td>
                    <td className="p-3 border border-gray-300 font-medium">{item.español}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <table className="w-full max-w-2xl border-collapse border border-gray-300">
              <thead>
                <tr className="bg-blue-500">
                  <th colSpan={2} className="p-4 text-center border border-gray-300">
                    <h2 className="text-xl font-bold">{injuries[0].title}</h2>
                    <p className="text-gray-200 mt-1">{injuries[0].subtitle}</p>
                  </th>
                </tr>
                <tr className="bg-gray-50">
                  <th className="p-3 border border-gray-300 text-left text-black">English</th>
                  <th className="p-3 border border-gray-300 text-left text-black">Español</th>
                </tr>
              </thead>
              <tbody>
                {injuries.slice(1).map((item, index) => (
                  <tr key={index} className="hover:bg-gray-800">
                    <td className="p-3 border border-gray-300">{item.english}</td>
                    <td className="p-3 border border-gray-300 font-medium">{item.español}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            </div>)
            :
            (
            <div className='flex flex-col items-center w-full pt-8'>
              <h1 className='text-4xl'>{examples[currentImage].title}</h1>
              <Image src={examples[currentImage].src} alt={examples[currentImage].alt} width={500} height={500} className={"w-[100%] rounded-xl animate__animated " + animation} />
              <div className='flex flex-row gap-14 w-full justify-evenly m-6'>
                <button
                  onClick={prevImage}
                  className=" transform -translate-y-1/2 bg-white/70 px-4 py-2 rounded hover:bg-white shadow"
                >
                  ◀
                </button>
            
                <button
                onClick={nextImage}
                className=" transform -translate-y-1/2 bg-white/70 px-4 py-2 rounded hover:bg-white shadow"
                >
                  ▶
                </button>
            
              </div>
            </div>)}
        </div>
      </Class>
    </div>
  );
}