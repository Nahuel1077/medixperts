'use client'

import { useState } from "react";

export default function AudioExercises({ audios }) {

    const [openTranscription, setOpenTranscription] = useState(null);

    return (
        <div className="flex flex-col gap-8 w-full">

            {audios.map((audio) => (
                <div key={audio.id} className="flex flex-col gap-1 w-full">
                    <audio controls preload="metadata" src={audio.src} className="w-full"/>
                    <button className="border-none w-full text-start"
                        onClick={() =>
                            setOpenTranscription(
                                openTranscription === audio.id
                                    ? null
                                    : audio.id
                            )
                        }
                    >
                        {openTranscription === audio.id ? "Hide transcription" : "See transcription"}
                    </button>
                    <div className={`overflow-hidden transition-all duration-500 ease-in-out ${openTranscription === audio.id ? "max-h-[1000px] opacity-100 translate-y-0" : "max-h-0 opacity-0 -translate-y-2"}`}>
                        <div className="pt-2">
                            {audio.transcription.map((line, index) => (
                                <p key={index}>
                                    <strong>{line.speaker}:</strong>{" "}
                                    <span className={line.speaker === "Interpreter" ? "text-green-500 font-bold" : ""}>
                                        “{line.text}”
                                    </span>
                                </p>
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}