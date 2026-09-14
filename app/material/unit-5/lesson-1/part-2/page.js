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
  unitTitle: "Lesson 1: Medical Terminology – Part 2: Body Parts (from torso to feet)",
  description: null,
  nextLesson: "/material/unit-5/lesson-1/part-3",
  prevLesson: "/material/unit-5",
  restart:"/material/unit-5",
  courseNumber: 5,
  currentStep: 2,
  totalSteps: 4,
};

export default function Lesson1() {
    const { user, loading } = useAuth();
    
    const [terms] = useState([
        { id: 'hand', name: 'Hand' , top: 89.8, left: 17.8, width: 13, height: 5},
        { id: 'shoulder', name: 'Shoulder' , top: 26.7, left: 10.2, width: 16, height: 5},
        { id: 'chest', name: 'Chest' , top: 37, left: 71.5, width: 16, height: 4.5},
        { id: 'upperarm', name: 'Upper Arm' , top: 46.7, left: 10, width: 18.7, height: 5},
        { id: 'abdomen', name: 'Abdomen' , top: 59.7, left: 71.5, width: 16, height: 5},
        { id: 'armpit', name: 'Armpit' , top: 37, left: 14, width: 14.5, height: 4.5},
        { id: 'wrist', name: 'Wrist' , top: 84.8, left: 69.4, width: 16, height: 5},
        { id: 'forearm', name: 'Forearm' , top: 67.5, left: 10, width: 18.7, height: 5},
        { id: 'waist', name: 'Waist' , top: 77, left: 69.4, width: 16, height: 5},
    ]);

    const [terms2] = useState([
        {id: 'upperback', name: 'Upper Back', top: 30.5, left: 80.4, width: 14.9, height: 4.7},
        {id: 'elbow', name: 'Elbow', top: 76, left: 70.8, width: 14.9, height: 4.7},
        {id: 'spine', name: 'Spine', top: 18.5, left: 48, width: 14.9, height: 4.7},
        {id: 'lowerback', name: 'Lower Back', top: 71, left: 17.5, width: 14.9, height: 4.7},
        {id: 'finger', name: 'Finger', top: 31, left: 8.5, width: 14.9, height: 4.5},
    ]);

    const [terms3] = useState([
        {id: 'shin', name: 'Shin', top: 63, left: 68, width: 15.5, height: 4.8},
        {id: 'groin', name: 'Groin', top: 17.5, left: 72, width: 15.5, height: 4.5},
        {id: 'toes', name: 'Toes', top: 92.5, left: 68.2, width: 15.5, height: 5},
        {id: 'thigh', name: 'Thigh', top: 26, left: 67, width: 15.5, height: 4.5},
        {id: 'heel', name: 'Heel', top: 91, left: 26, width: 15.5, height: 4.5},
        {id: 'hip', name: 'Hip', top: 8, left: 27, width: 15.5, height: 4.8},
        {id: 'calf', name: 'Calf', top: 63, left: 23.5, width: 15.5, height: 4.8},
        {id: 'sole', name: 'Sole', top: 86.8, left: 68.2, width: 15.5, height: 5},
        {id: 'knee', name: 'Knee', top: 48.8, left: 66.5, width: 15.5, height: 4.5},
        {id: 'waist2', name: 'Waist', top: 0.5, left: 27, width: 15.5, height: 4.5},
        {id: 'ankle', name: 'Ankle', top: 85.3, left: 26, width: 15.5, height: 4.8},
        {id: 'buttocks', name: 'Buttocks', top: 15.8, left: 23.5, width: 15.5, height: 4.8},
        {id: 'foot', name: 'Foot', top: 70.7, left: 60.5, width: 15.5, height: 4.8},
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
                      src="/img/unit5-chest.png"
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
                      src="/img/unit5-back.png"
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

                    <div className="relative w-full max-w-[1000px]" onClick={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    const x = ((e.clientX - rect.left) / rect.width) * 100;
                    const y = ((e.clientY - rect.top) / rect.height) * 100;
                    console.log(`top-[${y}%] left-[${x}%]`);
                  }}>
                      <Image
                      src="/img/unit5-legs.png"
                      alt="Profile"
                      width={1500}
                      height={1500}
                      className="w-full h-auto rounded-2xl"
                      />                    
                      {/* Mapeo para divs de terms */}
                      {terms3.map((term) => (
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
                      {terms3
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

                    {placedIds.size >= (terms.length + terms2.length + terms3.length) && 
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
