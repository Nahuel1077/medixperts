'use client'
import { useState, useEffect } from 'react';
import { useAuth } from "../../../../hooks/useAuth";
import Link from 'next/link';
import Image from 'next/image';
import Aside from "../../../../components/aside";
import Class from "../../../../components/class";
import LessonContent from "./content.mdx";

const lessonData = {
  id: "unit5-title",
  unitTitle: "Lesson 1: Medical Terminology – Part 1: Body Parts",
  description: null,
  nextLesson: "/material/unit-5/lesson-1/part-2",
  prevLesson: "/material/unit-5",
  restart:"/material/unit-5",
  courseNumber: 5,
  currentStep: 2,
  totalSteps: 4,
  lessonNumber: 1
};

export default function Lesson1() {
    const { user, loading } = useAuth();
    
    const [terms] = useState([
      { id: 'head', name: 'Crown of the head' , top: 3.5, left: 69, width: 20, height: 6},
      { id: 'forehead', name: 'Forehead' , top: 21.5, left: 75, width: 20, height: 6.5},
      { id: 'eyebrow', name: 'Eyebrow' , top: 28.5, left: 75, width: 20, height: 6.5},
      { id: 'eye', name: 'Eye' , top: 35.5, left: 75, width: 20, height: 6.5},
      { id: 'ear', name: 'Ear' , top: 42, left: 75, width: 20, height: 6.5},
      { id: 'nostril', name: 'Nostril' , top: 49, left: 75, width: 20, height: 6.5},
      { id: 'cheek', name: 'Cheek' , top: 56, left: 75, width: 20, height: 6.5},
      { id: 'chin', name: 'Chin' , top: 62.5, left: 75, width: 20, height: 6.5},
      { id: 'temple', name: 'Temple' , top: 25.2, left: 4.5, width: 20, height: 6.5},
      { id: 'eyelid', name: 'Eyelid' , top: 32, left: 4.5, width: 20, height: 6.5},
      { id: 'nose', name: 'Nose' , top: 38.8, left: 4.5, width: 20, height: 6.5},
      { id: 'earlobe', name: 'Earlobe' , top: 45.5, left: 4.5, width: 20, height: 6.5},
      { id: 'upperlip', name: 'Upper Lip' , top: 52.5, left: 4.5, width: 20, height: 6.5},
      { id: 'lowerlip', name: 'Lower Lip' , top: 59.2, left: 4.5, width: 20, height: 6.5},
      { id: 'throat', name: 'Throat' , top: 68, left: 4.5, width: 20, height: 6.5},
    ]);

    const [terms2] = useState([
      {id: 'neck', name: 'Neck', top: 60, left: 10, width: 16.5, height: 4.5},
      {id: 'nape', name: 'Nape', top: 30.5, left: 0.9, width: 16.5, height: 4.5},
      {id: 'jaw', name: 'Jaw', top: 56.5, left: 81.7, width: 16.5, height: 4.5},
    ]);

    const [placedIds, setPlacedIds] = useState(new Set());
    
    // 1. Iniciamos el arrastre
    const onDragStart = (e, id) => {
      e.dataTransfer.setData("termId", id);
    };

    // 2. Permitimos el soltado (necesario por defecto de HTML5)
    const onDragOver = (e) => e.preventDefault();

    const onDrop = (e, targetId) => {
    const droppedId = e.dataTransfer.getData("termId");
    if (droppedId === targetId) {
      // Solo agregamos el ID al Set de colocados
      setPlacedIds(prev => new Set(prev).add(droppedId));
    } else {
      alert("¡Intenta de nuevo!");
    }
  };


      if (loading) {return <div className="flex justify-center items-center h-screen">
        <div className="w-12 h-12 border-4 border-gray-300 border-t-black rounded-full animate-spin"></div>
        </div>
      };
    return(
        <div className="flex xl:flex-row flex-col bg-black">
            <Aside/>
            <Class lessonData={lessonData}>
                <LessonContent/>
                <div className="flex flex-col gap-4 items-center">
                    {/* Zonas de soltado sobre la imagen */}
                  <div className="relative w-full max-w-[1000px]" onClick={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    const x = ((e.clientX - rect.left) / rect.width) * 100;
                    const y = ((e.clientY - rect.top) / rect.height) * 100;
                    console.log(`top-[${y}%] left-[${x}%]`);
                  }}>
                      <Image
                      src="/img/unit5-head.png"
                      alt="Head"
                      width={1500}
                      height={1500}
                      className="w-full h-auto rounded-2xl"
                      />                    
                      {/* Mapeo para divs de terms */}
                      {terms.map((term) => (
                        <div 
                          key={term.id}
                          onDragOver={onDragOver}
                          onDrop={(e) => onDrop(e, term.id)}
                          className={`absolute border-2 border-dashed flex items-center justify-center text-black
                            ${placedIds.has(term.id) ? 'bg-green-200 border-green-500' : 'border-gray-400'}`}
                            style={{
                              top: `${term.top}%`,
                              left: `${term.left}%`,
                              width: `${term.width}%`,
                              height: `${term.height}%`
                            }}
                        >
                        {placedIds.has(term.id) ? term.name : 'Drag here'}
                      </div>
                    ))}
                    
                  </div>
                  
                    {/* Zona de términos */}
                    <div className="grid grid-cols-4 gap-4 mb-10 w-full">
                      {terms
                      .filter(term => !placedIds.has(term.id))
                      .map((term) => (
                        <div 
                          key={term.id}
                          draggable 
                          onDragStart={(e) => onDragStart(e, term.id)}
                          className="p-3 bg-blue-500 text-white rounded cursor-grab shadow text-center"
                        >
                          {term.name}
                        </div>
                      ))
                    }
                    </div>

                    <div className="relative w-full max-w-[1000px]" onClick={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    const x = ((e.clientX - rect.left) / rect.width) * 100;
                    const y = ((e.clientY - rect.top) / rect.height) * 100;
                    console.log(`top-[${y}%] left-[${x}%]`);
                  }}>
                      <Image
                      src="/img/unit5-profile.png"
                      alt="Profile"
                      width={1500}
                      height={1500}
                      className="w-full h-auto rounded-2xl"
                      />                    
                      {/* Mapeo para divs de terms */}
                      {terms2.map((term) => (
                        <div 
                          key={term.id}
                          onDragOver={onDragOver}
                          onDrop={(e) => onDrop(e, term.id)}
                          className={`absolute border-2 border-dashed flex items-center justify-center text-black
                            ${placedIds.has(term.id) ? 'bg-green-200 border-green-500' : 'border-gray-400'}`}
                            style={{
                              top: `${term.top}%`,
                              left: `${term.left}%`,
                              width: `${term.width}%`,
                              height: `${term.height}%`
                            }}
                        >
                        {placedIds.has(term.id) ? term.name : 'Drag here'}
                      </div>
                    ))}
                    
                  </div>
                  <div className="grid grid-cols-4 gap-4 mb-10 w-full">
                      {terms2
                      .filter(term => !placedIds.has(term.id))
                      .map((term) => (
                        <div 
                          key={term.id}
                          draggable 
                          onDragStart={(e) => onDragStart(e, term.id)}
                          className="p-3 bg-blue-500 text-white rounded cursor-grab shadow text-center"
                        >
                          {term.name}
                        </div>
                      ))
                    }
                    </div>

                    {placedIds.size >= (terms.length + terms2.length) && 
                    <div className="flex flex-col items-center gap-2">
                        <p className="font-bold text-green-700 text-center w-full">Great job!</p>
                        <p className="text-xl">Click Next to go to the following lesson</p>
                    </div>
                    }
                </div>

            </Class>
        </div>
  )
}
