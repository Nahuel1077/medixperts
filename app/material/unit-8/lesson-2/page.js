'use client'
import Aside from "../../../components/aside";
import Class from "../../../components/class";
import Glossary from "../../../components/glossary";
import Notes from "../../../components/notes";
import { useAuth } from "../../../hooks/useAuth";
import { useState } from "react";


const lessonData = {
  id: "unit8-title",
  unitTitle: "Lesson 2: Doctor–Patient Dialogues",
  description: null,
  nextLesson: "/material/unit-8/lesson-3/module-a",
  prevLesson: "/material/unit-8/lesson-1",
  restart:"/material/unit-8",
  courseNumber: 8,
  currentStep: 1,
  totalSteps: 1,
  lessonNumber: 2
};

export default function Lesson2() {
    const { user, loading } = useAuth();
    const [openTranscription, setOpenTranscription] = useState(null);
    
      if (loading) {return <div className="flex justify-center items-center h-screen">
        <div className="w-12 h-12 border-4 border-gray-300 border-t-black rounded-full animate-spin"></div>
        </div>
      };
    const audios = [
  {
    id: "conv1",
    src: "/audio/8-lesson2/full_audio_conversation1.mp3",
    transcription: [
      {speaker: "Doctor", text: "What brings you in today?"},
      {speaker: "Interpreter", text: "¿Qué lo trae por aquí hoy?"},
      {speaker: "Patient", text: "Me duele mucho la cabeza desde hace tres días y tengo un poco de náuseas."},
      {speaker: "Interpreter", text: "I’ve had a bad headache for three days and I feel a little nauseous."},
      {speaker: "Doctor", text: "On a scale from zero to ten, how would you rate the pain?"},
      {speaker: "Interpreter", text: "En una escala del cero al diez, ¿cómo calificaría el dolor?"},
      {speaker: "Patient", text: "Como un siete."},
      {speaker: "Interpreter", text: "About a seven."},
      {speaker: "Doctor", text: "Any other symptom? Phlegm, cough, runny nose, fever?"},
      {speaker: "Interpreter", text: "¿Algún otro síntoma? Flema, tos, moqueo, fiebre?"},
      {speaker: "Patient", text: "No no, eso no, pero sí cansancio."},
      {speaker: "Interpreter", text: "No, no, not that, but tiredness."}
    ],
  },
  {
    id: "conv2",
    src: "/audio/8-lesson2/full_audio_conversation2.mp3",
    transcription: [
      {speaker: "Doctor", text: "How have you been feeling since we lowered the dose on your blood pressure medication?"},
      {speaker: "Interpreter", text: "¿Cómo se ha sentido desde que le bajamos la dosis del medicamento para la presión?"},
      {speaker: "Patient", text: "Me siento mejor, pero a veces me da mareo cuando me paro de repente."},
      {speaker: "Interpreter", text: "I feel better, but sometimes I get dizzy when I stand up suddenly."},
      {speaker: "Doctor", text: "That is normal once in a while. But, if it is frequent, we might have to give you a higher dose, like the one that you used to take before."},
      {speaker: "Interpreter", text: "Eso es normal de vez en cuando. Pero, si es frecuente, podríamos tener que darle una dosis más elevada, como la que usted solía tomar antes."},
      {speaker: "Patient", text: "Si, yo diría que es frecuente. Quizás no me he acostumbrado a esta dosis todavía."},
      {speaker: "Interpreter", text: "Yes, I would say it’s frequent. Maybe I haven’t got used to this dose yet."},
      {speaker: "Doctor", text: "Ok, please buy Lisinopril 20 mg and take one pill a day."},
      {speaker: "Interpreter", text: "Bien, por favor compre Lisinopril 20 miligramos y tome una píldora al día."},
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
                        <strong>Instructions:</strong> <br/>Practice short consecutive interpreting in controlled, realistic exchanges.
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
                                    {audio.transcription.map((line, index) => (
                                    <p key={index}>
                                        <strong>{line.speaker}:</strong>{" "}
                                        <span
                                        className={
                                            line.speaker === "Interpreter"
                                            ? "text-green-500 font-bold"
                                            : ""
                                        }
                                        >
                                        “{line.text}”
                                        </span>
                                    </p>
                                    ))}
                                    </h6>
                                )}
                            </div>
                        ))}
                    </div>
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
                </div>
            </Class>
            <Notes/>
        </div>
    )
}