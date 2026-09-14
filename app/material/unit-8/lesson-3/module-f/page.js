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
  unitTitle: "Lesson 3 - Module F: Pharmacy Call",
  description: null,
  nextLesson: "/material/",
  prevLesson: "/material/unit-8/lesson-3/module-e",
  restart:"/material/",
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
            src: "/audio/8-lesson3/module-f/full_audio_module-f.mp3",
            transcription: [
            {speaker: "Pharmacist", text: "Pharmacy, this is Michael. How can I help you?"},
            {speaker: "Interpreter", text: "Farmacia, habla Michael. ¿Cómo lo puedo ayudar?"},
            {speaker: "Patient", text: "Quería preguntar si ya está lista la receta de mi medicamento para la presión."},
            {speaker: "Interpreter", text: "I wanted to ask if my blood pressure medication prescription is ready."},
            {speaker: "Pharmacist", text: "Can I have your date of birth, please?"},
            {speaker: "Interpreter", text: "¿Me puede dar su fecha de nacimiento, por favor?"},
            {speaker: "Patient", text: "4 de julio de 1978."},
            {speaker: "Interpreter", text: "July 4, 1978."},
            {speaker: "Pharmacist", text: "Yes, it’s ready for pick-up. Would you like me to tell you about possible side effects?"},
            {speaker: "Interpreter", text: "Sí, ya está lista para recoger. ¿Quiere que le informe sobre los posibles efectos secundarios?"},
            {speaker: "Patient", text: "Sí, por favor."},
            {speaker: "Interpreter", text: "Yes, please."},
            {speaker: "Pharmacist", text: "The most common side effects are dizziness and mild headache. If you notice swelling in your legs or difficulty breathing, contact your doctor right away."},
            {speaker: "Interpreter", text: "Los efectos secundarios más comunes son mareo y dolor de cabeza leve. Si nota hinchazón en las piernas o dificultad para respirar, comuníquese con su doctor de inmediato."},
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