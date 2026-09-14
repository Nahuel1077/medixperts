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
  unitTitle: "Lesson 3 - Module D: Mental Health Call",
  description: null,
  nextLesson: "/material/unit-8/lesson-3/module-e",
  prevLesson: "/material/unit-8/lesson-3/module-c",
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
            src: "/audio/8-lesson3/module-d/full_audio_module-d.mp3",
            transcription: [
            {speaker: "Therapist", text: "Hello, Hector. How are you feeling today?"},
            {speaker: "Interpreter", text: "Hola, Hector. ¿Cómo se siente hoy?"},
            {speaker: "Patient", text: "La verdad que no muy bien. Últimamente me siento muy ansioso y casi no puedo dormir."},
            {speaker: "Interpreter", text: "To be honest, not very well. Lately I’ve been feeling very anxious and I can barely sleep."},
            {speaker: "Therapist", text: "How long has this been going on?"},
            {speaker: "Interpreter", text: "¿Desde hace cuánto tiempo le pasa esto?"},
            {speaker: "Patient", text: "Más o menos desde hace tres semanas. Se me aceleró después de que perdí el trabajo."},
            {speaker: "Interpreter", text: "More or less for three weeks. It got worse after I lost my job."},
            {speaker: "Therapist", text: "Are you having any thoughts of harming yourself?"},
            {speaker: "Interpreter", text: "¿Ha tenido pensamientos de hacerse daño?"},
            {speaker: "Patient", text: "No, nada de eso. Solo siento mucha preocupación y no puedo relajarme."},
            {speaker: "Interpreter", text: "No, nothing like that. I just feel a lot of worry and I can’t relax."},
            {speaker: "Therapist", text: "Have you been able to talk to anyone about how you’re feeling?"},
            {speaker: "Interpreter", text: "¿Ha podido hablar con alguien sobre cómo se siente?"},
            {speaker: "Patient", text: "Solo con mi hermana un poco, pero no quiero preocuparla."},
            {speaker: "Interpreter", text: "Only a little with my sister, but I don’t want to worry her."},
            {speaker: "Therapist", text: "Ok, Hector, thank you for sharing that. I’d like us to schedule a follow-up session this week."},
            {speaker: "Interpreter", text: "Ok, Hector, gracias por compartir eso. Me gustaría que agendemos una sesión de seguimiento esta semana."},
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