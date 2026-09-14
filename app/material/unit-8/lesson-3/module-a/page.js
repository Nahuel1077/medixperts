'use client'
import Aside from "../../../../components/aside";
import Class from "../../../../components/class";
import Notes from "../../../../components/notes";
import Glossary from "../../../../components/glossary";
import AudioExercises from "../../../../components/AudioExercises";
import Assessment from "../../../../components/Assessment";
import { useAuth } from "../../../../hooks/useAuth";
import { useState } from "react";


const lessonData = {
  id: "unit8-title",
  unitTitle: "Lesson 3 - Module A: Emergency Room / 911 Call.",
  description: null,
  nextLesson: "/material/unit-8/lesson-3/module-b",
  prevLesson: "/material/unit-8/lesson-2",
  restart:"/material/unit-8",
  courseNumber: 8,
  currentStep: 4,
  totalSteps: 4,
  lessonNumber: 3
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
            src: "/audio/8-lesson3/module-a/full_audio_module-a.mp3",
            transcription: [
            {speaker: "Dispatcher", text: "911, what’s your emergency?"},
            {speaker: "Interpreter", text: "911, ¿cuál es su emergencia?"},
            {speaker: "Parent", text: "Mi hijo tiene dos años y tiene mucha fiebre. Está respirando muy rápido y se ve muy cansado."},
            {speaker: "Interpreter", text: "My son is two years old and he has a high fever. He’s breathing very fast and he looks very tired."},
            {speaker: "Dispatcher", text: "How long has he had the fever?"},
            {speaker: "Interpreter", text: "¿Desde cuándo tiene fiebre?"},
            {speaker: "Parent", text: "Desde anoche. Le tomé la temperatura hace un rato y tenía 39.8."},
            {speaker: "Interpreter", text: "Since last night. I took his temperature a little while ago and it was 39.8."},
            {speaker: "Dispatcher", text: "Is he awake? Is he responding to you?"},
            {speaker: "Interpreter", text: "¿Está despierto? ¿Le responde?"},
            {speaker: "Parent", text: "Está despierto pero muy decaído. No quiere jugar ni nada."},
            {speaker: "Interpreter", text: "He’s awake but very lethargic. He doesn’t want to play or anything."},
            {speaker: "Dispatcher", text: "Does he have any medical conditions or allergies?"},
            {speaker: "Interpreter", text: "¿Tiene alguna condición médica o alergias?"},
            {speaker: "Parent", text: "No, ninguna. Está sano."},
            {speaker: "Interpreter", text: "No, none. He’s healthy."},
            {speaker: "Dispatcher", text: "I’m sending an ambulance to your location. Stay on the line with me."},
            {speaker: "Interpreter", text: "Estoy enviando una ambulancia a su ubicación. Permanezca en la línea conmigo."},
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