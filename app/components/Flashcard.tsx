'use client'
import { useState } from 'react';

interface FlashcardProps {
  title: string;
  front: string;
  back: string;
}

export default function Flashcard({ title, front, back, }: FlashcardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      className="relative w-full max-w-md h-[750px] sm:h-[520px] cursor-pointer mx-auto my-8 perspective-1000"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d ${isFlipped ? 'rotate-y-180' : ''}`}>

        {/* === CARA FRONTAL === */}
        <div className="absolute inset-0 bg-white text-black rounded-3xl shadow-2xl p-8 flex flex-col backface-hidden border border-gray-200 select-none">
          <div className="text-2xl font-bold text-blue-600 mb-6 text-center">{title}</div>
          <p className="text-start text-md leading-relaxed flex-1">{front}</p>
          <p className="text-xs text-gray-400 text-center mt-6">Click to flip →</p>
        </div>

        {/* === CARA TRASERA === */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-3xl shadow-2xl p-8 flex flex-col backface-hidden rotate-y-180 select-none">
          <div className="text-2xl font-bold mb-6 text-center">Example</div>
          <p className="text-start text-base leading-relaxed whitespace-pre-line flex-1">{back}</p>
          <p className="text-xs text-blue-200 text-center mt-6">Click to flip back →</p>
        </div>

      </div>
    </div>
  );
}