'use client'
import Aside from "../../../../components/aside";
import Class from "../../../../components/class";
import AudioExercises from "../../../../components/AudioExercises";
import Assessment from "../../../../components/Assessment";
import { useAuth } from "../../../../hooks/useAuth";
import Notes from "../../../../components/notes";
import Glossary from "../../../../components/glossary";


const lessonData = {
  id: "unit8-title",
  unitTitle: "Lesson 3 - Module E: Insurance & Billing Call",
  description: null,
  nextLesson: "/material/unit-8/lesson-3/module-f",
  prevLesson: "/material/unit-8/lesson-3/module-d",
  restart:"/material/unit-8",
  courseNumber: 8,
  currentStep: 1,
  totalSteps: 1,
};

export default function Lesson3() {
    const { user, loading } = useAuth();
    
      if (loading) {return <div className="flex justify-center items-center h-screen">
        <div className="w-12 h-12 border-4 border-gray-300 border-t-black rounded-full animate-spin"></div>
        </div>
    };
    const audios = [
        {
            id: "conv1",
            src: "/audio/8-lesson3/module-e/full_audio_module-e.mp3",
            transcription: [
            {speaker: "Representative", text: "Good morning, billing department, this is Sandra. How may I help you?"},
            {speaker: "Interpreter", text: "Buenos días, departamento de facturación, habla Sandra. ¿Cómo lo puedo ayudar?"},
            {speaker: "Patient", text: "Llamo porque me llegó una carta diciendo que no cubrieron la consulta del mes pasado."},
            {speaker: "Interpreter", text: "I’m calling because I received a letter saying they didn’t cover last month’s visit."},
            {speaker: "Representative", text: "May I have your member ID and date of birth, please?"},
            {speaker: "Interpreter", text: "¿Me puede dar su número de miembro y fecha de nacimiento, por favor?"},
            {speaker: "Patient", text: "Sí. El número es 45892317 y mi fecha de nacimiento es 12 de marzo de 1965."},
            {speaker: "Interpreter", text: "Yes. The number is 45892317 and my date of birth is March 12, 1965."},
            {speaker: "Representative", text: "Thank you. I see the claim was denied because the referral was missing."},
            {speaker: "Interpreter", text: "Gracias. Veo que el reclamo fue denegado porque faltaba la referencia."},
            {speaker: "Patient", text: "Si, pero si yo pedí la referencia. El doctor me dijo que la iba a enviar."},
            {speaker: "Interpreter", text: "Yes, but I did request the referral. The doctor told me he was going to send it."},
            {speaker: "Representative", text: "I recommend that you contact the doctor’s office and ask them to submit the referral. Once we receive it, we can reprocess the claim. Thank you for calling."},
            {speaker: "Interpreter", text: "Le recomiendo que se comunique con el consultorio del doctor y les pida que envíen la referencia. Una vez que la recibamos, podemos volver a procesar el reclamo. Gracias por llamar."},
            ],
        },
    ];

    return(
        <div className="flex xl:flex-row flex-col bg-black">
            <Aside/>
            <Class lessonData={lessonData}>
                <Glossary className="h-[250px] w-[400px] p-1 overflow-x-hidden border-gray-50 border rounded-md z-50" classNameInput="bg-black" draggable={true}/>
                <div className="flex flex-col gap-8 p-4 w-full">
                    <h6 className="text-lg text-start">
                        <strong>Instructions:</strong> <br/>Practice short consecutive interpreting in controlled, realistic exchanges.<br/>Record yourself and compare with the original.
                    </h6>
                    <AudioExercises audios={audios}/>
                    <h6 className="text-lg text-start">
                        Self-Reflection Questions:
                        <ul className="flex flex-col items-start">
                            <li>
                                Did I stay within my role at all times?
                            </li>
                            <li>
                                Were there moments where I guessed instead of asking for clarification?
                            </li>
                            <li>
                                Did I maintain a calm and professional presence even if the speaker was emotional?
                            </li>
                            <li>
                                What will I focus on improving in the next practice session?
                            </li>
                        </ul>
                    </h6>
                    <Assessment/>
                </div>
            </Class>
            <Notes/>
        </div>
    )
}