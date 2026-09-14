'use client'
import { useState, useEffect } from 'react';
import { Montserrat } from "next/font/google";
import Image from 'next/image';
import Link from 'next/link';

const montserrat = Montserrat({ subsets: ['latin'] });

export default function Notes() {

    const [isOpen, setIsOpen] = useState(false);
    const [notes, setNotes] = useState("");

    return(
        <div className="hidden sm:flex flex-col items-center absolute top-0 right-0 p-4 bg-amber-200 z-10 h-screen">
            <button onClick={() => setIsOpen(!isOpen)}>
                <Image src={isOpen?"/img/close.svg":"/img/notes.svg"} alt="Notes" width={50} height={50} className="mx-auto mb-4 relative right-0" />
            </button>
            {isOpen && (
                <>
                    <h1 className={montserrat.className + " text-3xl font-bold mb-4"}>Notes</h1>
                    <p className={montserrat.className + " text-lg mb-2"}>This is the notes page.</p>
                    <p className={montserrat.className + " mb-2"}>(Notes won't be saved)</p>
                    <textarea 
                        className={montserrat.className + " w-full h-[600px] p-4 border border-gray-300 rounded-lg resize-none bg-white"} 
                        placeholder="Write your notes here..."
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                    ></textarea>
                </>
            )}
        </div>
    )
}