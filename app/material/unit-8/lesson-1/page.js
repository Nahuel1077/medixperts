'use client'
import Aside from "../../../components/aside";
import Class from "../../../components/class";
import Glossary from "../../../components/glossary";
import { useAuth } from "../../../hooks/useAuth";
import { useState } from "react";
import Notes from "../../../components/notes";


const lessonData = {
  id: "unit8-title",
  unitTitle: "Lesson 1: Shadowing Exercises",
  description: null,
  nextLesson: "/material/unit-8/lesson-2/",
  prevLesson: "/material/unit-8",
  restart:"/material/unit-8",
  courseNumber: 8,
  currentStep: 1,
  totalSteps: 1,
  lessonNumber: 1
};

export default function Lesson1() {
    const { user, loading } = useAuth();
    const [openTranscription, setOpenTranscription] = useState(null);
    const [openInterpretation, setOpenInterpretation] = useState(null);
    
      if (loading) {return <div className="flex justify-center items-center h-screen">
        <div className="w-12 h-12 border-4 border-gray-300 border-t-black rounded-full animate-spin"></div>
        </div>
      };

    const audios = [
        {
        id: "short1",
        src: "/audio/8-lesson1/short1.mp3",
        transcription: "Have you had any nausea?",
        interpretation: "¿Ha tenido náuseas?"
        },
        {
        id: "short2",
        src: "/audio/8-lesson1/short2.mp3",
        transcription: "Are you currently taking any medications?",
        interpretation: "¿Está tomando alguna medicación actualmente?"
        },
        {
        id: "short3",
        src: "/audio/8-lesson1/short3.mp3",
        transcription: "We need to draw some blood for laboratory tests.",
        interpretation: "Necesitamos extraer sangre para análisis de laboratorio."
        },
        {
        id: "short4",
        src: "/audio/8-lesson1/short4.mp3",
        transcription: "I’m going to listen to your lungs now.",
        interpretation: "Voy a escuchar sus pulmones ahora."
        },
        {
        id: "short5",
        src: "/audio/8-lesson1/short5.mp3",
        transcription: "Please rate your pain from zero to ten.",
        interpretation: "Por favor, califique su dolor del uno al diez."
        },
        {
        id: "intermediate1_br",
        src: "/audio/8-lesson1/intermediate1_br.mp3",
        transcription: "The chest X-ray shows a possible infection in the lower part of the right lung. We are going to start antibiotics and keep you under observation.",
        interpretation: "La radiografía de tórax muestra una posible infección en la parte inferior del pulmón derecho. Vamos a iniciar el tratamiento con antibióticos y a mantenerle en observación."
        },
        {
        id: "intermediate1_wm",
        src: "/audio/8-lesson1/intermediate1_wm.mp3",
        transcription: "Are you taking anything for the pain? I’d recommend 1000mg of Tylenol, 400mg of Ibuprofen and saline dressing.",
        interpretation: "¿Está tomando algo para el dolor? Le recomiendo 1000mg de Tylenol, 400mg de Ibuprofeno y gasa salina."
        },
        {
        id: "intermediate1_bl",
        src: "/audio/8-lesson1/intermediate1_bl.mp3",
        transcription: "Ok, we're gonna need you to go to the pharmacy and buy some medication. Please, pay attention to the names. Are you ready?",
        interpretation: "Bien, necesitaremos que vaya a la farmacia y compre algunos medicamentos. Por favor, preste atención a los nombres. ¿Está listo?"
        },
        {
        id: "intermediate2_br",
        src: "/audio/8-lesson1/intermediate2_br.mp3",
        transcription: "Your blood pressure is higher than we would like. I recommend that we adjust your medication and schedule a follow-up in two weeks.",
        interpretation: "Su presión sanguínea es más alta de lo que nos gustaría. Le recomiendo ajustar su medicación y programar una cita de seguimiento en dos semanas."
        },
        {
        id: "intermediate2_wm",
        src: "/audio/8-lesson1/intermediate2_wm.mp3",
        transcription: "Yes, I can explain that. Dialysis is a treatment that replicates the kidney's function and cleans the waste from blood.",
        interpretation: "Si, puedo explicar eso. La diálisis es un tratamiento que replica la función de los riñones y elimina los desechos de la sangre."
        },
        {
        id: "intermediate2_bl",
        src: "/audio/8-lesson1/intermediate2_bl.mp3",
        transcription: "Is there anyone in your family with hypertension? It is commonly hereditary. I'll give you a low-sodium diet to see how your body reacts, and if it is still high, I'll recommend you some medication.",
        interpretation: "¿Hay alguien en su familia con hipertensión? Comunmente, es hereditario. Le indicaré una dieta baja en sodio para ver cómo reacciona su cuerpo, y si aún sigue alta, le recomendaré algún medicamento."
        },
        {
        id: "intermediate3_br",
        src: "/audio/8-lesson1/intermediate3_br.mp3",
        transcription: "Please take into account that you’ll have to take this medication twice a day, everyday. Do not mix it with alcohol. It is extremely important for your health.",
        interpretation: "Por favor, tenga en cuenta que deberá tomar este medicamento dos veces al día, todos los días. No lo mezcle con alcohol. Es sumamente importante para su salud."
        },
        {
        id: "intermediate3_wm",
        src: "/audio/8-lesson1/intermediate3_wm.mp3",
        transcription: "Do you have any allergies? It is important to know before we proceed.",
        interpretation: "¿Tiene alguna alergia? Es importante saberlo antes de proceder."
        },
        {
        id: "intermediate3_bl",
        src: "/audio/8-lesson1/intermediate3_bl.mp3",
        transcription: "We're gonna know better when we get the test results. In the meantime, please stick to the low-fat diet we gave you. Remember to avoid fried foods, or else, the ulcers may worsen.",
        interpretation: "Sabremos más cuando recibamos los resultados de las pruebas. Mientras tanto, por favor, siga la dieta baja en grasas que le indicamos. Recuerde evitar los alimentos fritos; de lo contrario, las úlceras podrían empeorar."
        },
        {
        id: "natural1_wm",
        src: "/audio/8-lesson1/natural1_wm.mp3",
        transcription: "Ay doctor, disculpe, es que estoy muy preocupada. Mi niño tiene fiebre desde anoche y no le baja.",
        interpretation: "Oh doctor, I'm sorry, it's just that I'm very worried. My son has fever since last night and it's not going down."
        },
        {
        id: "natural2_wm",
        src: "/audio/8-lesson1/natural2_wm.mp3",
        transcription: "Le di el jarabe a las 10, después a las 2 de la mañana, y sigue caliente. Está muy molesto, no quiere comer nada. Solo toma un poquito de agua, y se pone a llorar.",
        interpretation: "I gave him the syrup at 10, then again at 2 in the morning, and he's still hot. He's very upset, and doesn't want to eat anything. He only drinks a little water, and then he starts crying."
        },
        {
        id: "natural3_wm",
        src: "/audio/8-lesson1/natural3_wm.mp3",
        transcription: "Se siente bien caliente la cabecita, y está respirando como más agitado. No sé qué hacer. De verdad estoy asustada.",
        interpretation: "His head feels very hoy, and he's breathing agitated. I don't know what to do. I'm really scared."
        },
        {
        id: "natural1_ar",
        src: "/audio/8-lesson1/natural1_ar.mp3",
        transcription: "Es que este dolor... este dolor de la espalda ya lleva como... no sé, como 3 meses.",
        interpretation: "The thing is that this pain... this back pain has been going on for about... I don't know, about 3 months."
        },
        {
        id: "natural2_ar",
        src: "/audio/8-lesson1/natural2_ar.mp3",
        transcription: "A veces es un dolor sordo, así constante. Y otras veces... otras veces me pega más fuerte, como un pinchazo. Sobretodo cuando me agacho o cuando estoy mucho tiempo sentado... se me pone peor.",
        interpretation: "Sometimes it's a dull pain, like constant. And other times... other times it hits harder, like a sharp, stabbing pain. It gets worse, especially when I bend down or sit for a long time."
        },
        {
        id: "natural3_ar",
        src: "/audio/8-lesson1/natural3_ar.mp3",
        transcription: "Ya probé con pastillas, con cremas... y nada, sigo igual. A veces hasta se me va hacia la pierna... eh si... hacia la pierna derecha.",
        interpretation: "I have already tried pills, creams... and nothing. I’m still the same. Sometimes the pain even shoots down into my leg... yeah, my right leg."
        },
    ];
    return(
        <div className="flex xl:flex-row flex-col bg-black">
            <Aside/>
            <Class lessonData={lessonData}>
            <Glossary className="h-[250px] w-[400px] p-1 overflow-x-hidden border-gray-50 border rounded-md z-50" classNameInput="bg-black" draggable={true}/>
                <div className="flex flex-col gap-8 p-4 w-full">
                    <h6 className="text-lg text-start">
                        <strong>Instructions:</strong> <br/>Listen to the audio. <br/>Shadow the speaker with a 1–2 second delay. <br/>Focus on meaning, not word-for-word repetition. <br/>Record yourself and compare with the original. <br/>PD: You can drag the Glossary!
                    </h6>
                    <div className="flex flex-col gap-8 w-full">
                         {audios.map((audio) => (
                            <div key={audio.id} className="flex flex-col gap-1 w-full">
                                <audio controls preload="metadata" src={audio.src} className="w-full"/>
                                <button className="border-none w-full text-start" onClick={() => 
                                    setOpenTranscription(
                                        openTranscription === audio.id
                                        ? null
                                        : audio.id
                                    )}>
                                    See transcription
                                </button>
                                {openTranscription === audio.id && (
                                    <h6>
                                    “{audio.transcription}”
                                    </h6>
                                )}
                                <button
                                    className="border-none w-full text-start"
                                    onClick={() =>
                                    setOpenInterpretation(
                                        openInterpretation === audio.id
                                        ? null
                                        : audio.id
                                    )
                                    }
                                >
                                    See interpretation
                                </button>
                                {openInterpretation === audio.id && (
                                    <h6>
                                    “{audio.interpretation}”
                                    </h6>
                                )}
                            </div>
                        ))}
                    </div>
                    <h6 className="text-lg text-start">
                        Self-Check Criteria:<br/>
                        Did you maintain the original meaning?<br/>
                        Was your delivery natural and fluid?<br/>
                        Did you avoid adding or omitting information?
                    </h6>
                </div>
                
            </Class>
            <Notes/>
        </div>
    )
}