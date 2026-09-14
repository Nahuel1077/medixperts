'use client'
import Aside from "../../../../components/aside";
import Class from "../../../../components/class";
import Notes from "../../../../components/notes";
import Glossary from "../../../../components/glossary";
import AudioExercises from "../../../../components/AudioExercises";
import Assessment from "../../../../components/Assessment";
import { useAuth } from "../../../../hooks/useAuth";


const lessonData = {
  id: "unit8-title",
  unitTitle: "Lesson 3 - Module B: OBGYN / Labor & Delivery",
  description: null,
  nextLesson: "/material/unit-8/lesson-3/module-c",
  prevLesson: "/material/unit-8/lesson-3/module-a",
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
            src: "/audio/8-lesson3/module-b/full_audio_module-b.mp3",
            transcription: [
            {speaker: "Nurse", text: "What is your due date, ma’am?"},
            {speaker: "Interpreter", text: "¿Cuál es su fecha de parto, señora?"},
            {speaker: "Patient", text: "El 4 de octubre. Estoy embarazada de 37 semanas y desde esta mañana tengo contracciones."},
            {speaker: "Interpreter", text: "October 4th. I’m 37 weeks pregnant and I’ve been having contractions since this morning."},
            {speaker: "Nurse", text: "How far apart are the contractions?"},
            {speaker: "Interpreter", text: "¿Cada cuánto tiempo tiene las contracciones?"},
            {speaker: "Patient", text: "Más o menos cada 8 o 10 minutos, y duran como 40 segundos."},
            {speaker: "Interpreter", text: "More or less every 8 or 10 minutes. They last about 40 seconds."},
            {speaker: "Nurse", text: "Have you noticed any fluid leakage or bleeding?"},
            {speaker: "Interpreter", text: "¿Ha notado pérdida de líquido o sangrado?"},
            {speaker: "Patient", text: "No he visto sangre, pero siento como si estuviera un poco mojada."},
            {speaker: "Interpreter", text: "I haven’t seen any blood, but I feel like I’m a little wet."},
            {speaker: "Nurse", text: "When was the last time the baby moved?"},
            {speaker: "Interpreter", text: "¿Cuándo fue la última vez que sintió moverse al bebé?"},
            {speaker: "Patient", text: "Hace como una hora. Se está moviendo normal."},
            {speaker: "Interpreter", text: "About an hour ago. He’s moving normally."},
            {speaker: "Nurse", text: "I recommend that you come in so we can check you and monitor the baby."},
            {speaker: "Interpreter", text: "Le recomiendo que venga para poder examinarla y monitorear al bebé."},
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