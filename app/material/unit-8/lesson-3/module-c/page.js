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
  unitTitle: "Lesson 3 - Module C: Pediatric Call",
  description: null,
  nextLesson: "/material/unit-8/lesson-3/module-d",
  prevLesson: "/material/unit-8/lesson-3/module-b",
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
            src: "/audio/8-lesson3/module-c/full_audio_module-c.mp3",
            transcription: [
            {speaker: "Doctor", text: "I understand you’re calling about your daughter. How old is she?"},
            {speaker: "Interpreter", text: "Entiendo que llama por su hija. ¿Qué edad tiene ella?"},
            {speaker: "Patient", text: "Sí, Doctor. Mi hija tiene 5 años y desde ayer se queja de dolor de oído. También tiene fiebre."},
            {speaker: "Interpreter", text: "Yes, Doctor. My daughter is 5 years old and since yesterday she’s been complaining of ear pain. She also has a fever."},
            {speaker: "Doctor", text: "What was her highest temperature?"},
            {speaker: "Interpreter", text: "¿Cuál fue su temperatura más alta?"},
            {speaker: "Patient", text: "Esta mañana tenía 38.9."},
            {speaker: "Interpreter", text: "This morning it was 38.9."},
            {speaker: "Doctor", text: "Is she eating and drinking normally? Any vomiting?"},
            {speaker: "Interpreter", text: "¿Está comiendo y tomando líquidos normalmente? ¿Ha tenido vómitos?"},
            {speaker: "Patient", text: "Está tomando líquidos, pero no tiene mucha hambre. No ha vomitado."},
            {speaker: "Interpreter", text: "She’s taking fluids, but she doesn’t have much appetite. She hasn’t vomited."},
            {speaker: "Doctor", text: "Has she had any cold symptoms recently — runny nose or cough?"},
            {speaker: "Interpreter", text: "¿Ha tenido síntomas de resfriado recientemente… moqueo o tos?"},
            {speaker: "Patient", text: "Sí, desde la semana pasada tiene moqueo y un poco de tos."},
            {speaker: "Interpreter", text: "Yes, since last week she has a runny nose and a little cough."},
            {speaker: "Doctor", text: "It sounds like she may have an ear infection. I recommend that you bring her in today so we can examine her."},
            {speaker: "Interpreter", text: "Parece que puede tener una infección de oído. Le recomiendo que la traiga hoy para poder examinarla."},
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