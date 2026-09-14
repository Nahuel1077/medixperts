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
  unitTitle: "Lesson 1: Medical Terminology – Part 3: Common Medical Symptoms Crossword",
  description: null,
  nextLesson: "/material/unit-5/lesson-1/part-4",
  prevLesson: "/material/unit-5",
  restart:"/material/unit-5",
  courseNumber: 5,
  currentStep: 2,
  totalSteps: 4,
};

const rows = [
    [null, null, null, null, 15, null, null, null, null, null, null, null, null, null, null, null, null, null, 22, null, null, null, null, null, null],     
    [null, null, null, 1, "R", "U", "N", "N", "Y", 0, "N", "O", "S", "E", null, null, 2, "P", "H", "L", "E", "G", "M", null, null],         
    [null, null, null, null, "A", null, null, null, null, null, null, null, null, null, null, null, null, null, "I", null, null, null, null, null, null, ],
    [null, null, null, null, "S", null, null, null, null, null, null, null, null, null, null, null, 21, null, "V", null, 24, null, null, null, null, ],
    [null, null, 3, "S", "H", "O", "R", "T", "N", "E", "S", "S", 0, "O", "F", 0, "B", "R", "E", "A", "T", "H", null, null, null],
    [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, "L", null, "S", null, "E", null, null, null, null], 
    [null, null, null, null, null, 4, "C", "O", "N", "S", "T", "I", "P", "A", "T", "I", "O", "N", null, null, "N", null, null, null, null], 
    [null, null, null, null, null, null, null, 18, null, null, null, null, null, null, null, null, "A", null, null, null, "D", null, null, null, null],
    [null, null, null, null, null, null, null, "F", null, null, null, null, "M", null, 20, null, "T", null, null, null, "E", null, null, null, null],
    [null, null, 5, "N", "A", "U", "S", "E", "A", null, 6, "B", "E", "L", "C", "H", "I", "N", "G", null, "R", null, 25, null, null, ],
    [null, null, null, null, null, null, null, "V", null, null, null, null, "D", null, "H", null, "N", null, null, null, "N", null, "M", null, null, ],
    [null, null, null, null, null, null, null, "E", null, null, null, null, "I", null, "I", null, "G", null, null, null, "E", null, "I", null, null, ],
    [null, 7, "A", "C", "I", "D", 0, "R", "E", "F", "L", "U", "X", null, "L", null, null, null, null, null, "S", null, "G", null, null, ],
    [null, null, null, null, null, null, null, null, null, null, null, null, "P", null, "L", null, null, null, null, null, "S", null, "R", null, null, ],
    [null, 15, 8, "B", "U", "R", "N", "I", "N", "G", 0, "S", "E", "N", "S", "A", "T", "I", "O", "N", null, null, "A", null, null, ],
    [null, "V", null, null, null, 17, null, null, null, null, null, null, "R", null, null, null, null, null, null, null, null, null, "I", null, null, ],
    [null, "O", null, null, 9, "F", "R", "E", "Q", "U", "E", "N", "T", 0, "U", "R", "I", "N", "A", "T", "I", "O", "N", null, null, ],
    [null, "M", null, null, null, "A", null, null, null, null, 19, null, "S", null, null, null, null, null, 23, null, null, null, "E", null, null],
    [10,"I", "T", "C", "H", "I", "N", "G", null, null, "T", null, null, null, null, null, null, null, "S", null, null, null, null, null, null, ],
    [null, "T", null, null, null, "N", null, null, null, null, "R", null, null, null, null, 11, "W","H", "E", "E", "Z", "I", "N", "G", null, ],
    [null, "I", null, null, null, "T", null, null, null, null, "E", null, null, null, null, null, null, null, "I", null, null, null, null, null, null, ],
    [null, "N", null, null, 12, "I", "N", "F", "L", "A", "M", "M", "A", "T", "I", "O", "N", null, "Z", null, null, null, 26, null, null, ],
    [null, "G", null, null, null, "N", null, null, null, null, "O", null, null, null, null, null, null, null, "U", null, null, null, "G", null, null, ],
    [null, 13, "C", "O", "U", "G", "H", null, null, null, "R", null, null, null, 14, "D", "I", "A", "R", "R", "H", "E", "A", null, null, ],
    [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, "E", null, null, null, "S", null, null]
]

const FIXED_WORD_POSITION = { rowStart: 8, col: 12 };

export default function Lesson1(){
    const { user, loading } = useAuth();
    const [userAnswers, setUserAnswers] = useState({});

    const handleChange = (rowIndex, colIndex, value) => {
        const key = `${rowIndex}-${colIndex}`;
        setUserAnswers(prev => ({
            ...prev,
            [key]: value.toUpperCase().trim()
        }));
    };

    const getCell = (r, c) => rows[r]?.[c];

    const isBlocked = (r, c) => getCell(r, c) === null;
    const getClueNumber = (r, c) => {
    const value = getCell(r, c);
    return (typeof value === 'number' && value > 0) ? value : null;
    };

const isWordSeparator = (r, c) => getCell(r, c) === 0;
    const getFixedLetter = (r, c) => {
        // Solo las letras de "MEDIXPERTS" son fijas
        if (c !== FIXED_WORD_POSITION.col) return null;
        
        const fixedLetters = "MEDIXPERTS".split('');
        const relativeRow = r - FIXED_WORD_POSITION.rowStart;
        
        if (relativeRow >= 0 && relativeRow < fixedLetters.length) {
            return fixedLetters[relativeRow];
        }
        return null;
    };

    const isEditable = (r, c) => {
        if (isBlocked(r, c) || isWordSeparator(r, c) || getFixedLetter(r, c) !== null) return false;
        return true;
    };

    const getSolution = (r, c) => {
        const val = getCell(r, c);
        return typeof val === 'string' && val !== "" ? val : "";
    };

    const isCorrect = (r, c) => {
        const key = `${r}-${c}`;
        const sol = getSolution(r, c);
        return sol && userAnswers[key] === sol;
    };

    const isWrong = (r, c) => {
        const key = `${r}-${c}`;
        const sol = getSolution(r, c);
        const ans = userAnswers[key];
        return sol && ans && ans !== sol;
    };

    const revealAllAnswers = () => {
        const newAnswers = {};

        rows.forEach((row, r) => {
            row.forEach((cell, c) => {
                const key = `${r}-${c}`;
                const value = getCell(r, c);
                
                // Solo rellenar si es una letra (string no vacío)
                if (typeof value === 'string' && value !== "") {
                    newAnswers[key] = value;
                }
            });
        });

    setUserAnswers(newAnswers);
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
                <div className="mt-6 flex justify-center">
                    <div 
                        className="inline-grid gap-[1px] bg-gray-400 p-2"
                        style={{
                            gridTemplateColumns: `repeat(${rows[0].length}, 30px)`
                        }}
                    >
                        {rows.map((row, r) => 
                            row.map((_, c) => {
                                const blocked = isBlocked(r, c);
                                const number = getClueNumber(r, c);
                                const fixed = getFixedLetter(r, c);
                                const separator = isWordSeparator(r, c);
                                const editable = isEditable(r, c);
                                const key = `${r}-${c}`;

                                return (
                                    <div
                                        key={key}
                                        className={`relative w-[30px] h-[30px] flex items-center justify-center 
                                             border border-gray-300 text-xl font-bold
                                            ${blocked ? 'bg-black' : "bg-white"}`}
                                    >
                                        {/* Número de pista */}
                                        {number && (
                                            <div className="absolute top-0.5 left-1 text-xs font-normal text-gray-600 z-10 ">
                                                {number}
                                            </div>
                                        )}
                                        {/* Letra FIJA (resaltada) */}
                                        {fixed && (
                                            <div className="w-full h-full flex items-center justify-center text-white font-bold bg-[#2563eb]">
                                                {fixed}
                                            </div>
                                        )}
                                        {/* Separador de palabras (0) */}
                                        {separator && (
                                            <div className="w-full h-full flex items-center justify-center text-gray-400 text-2xl font-light">
                                                🔶
                                            </div>
                                        )}
                                        {/* Input */}
                                        {editable && !blocked && !separator &&(
                                            <input
                                                type="text"
                                                maxLength={1}
                                                value={userAnswers[key] || ""}
                                                onChange={(e) => handleChange(r, c, e.target.value)}
                                                className={`w-full h-full text-center uppercase outline-none
                                                    ${isCorrect(r, c) ? 'bg-green-400 text-white' : 
                                                      isWrong(r, c) ? 'bg-red-400 text-white' : 'bg-transparent'} ${blocked ? 'bg-black' : ''}`}
                                            />
                                        )}
                                    </div>
                                );
                            })
                        )}
                    </div>
                </div>
                <div className="p-6 w-full flex flex-col gap-4 justify-center">
                    <div className="w-full text-center text-2xl">
                        <h1>Common Medical Symptoms Crossword</h1>
                    </div>
                    <div className="w-full text-start">
                        <h6 className="text-lg cursive underline decoration-amber-400 underline-offset-2">HORIZONTAL</h6>
                        <p className="text-start leading-relaxed whitespace-pre-line"> 
                            1- Persistent drainage of mucus from the nasal passages. <br/>
                            2- Thick substance that can build up in the throat or chest during respiratory illnesses or infection.<br/>
                            3- Difficulty breathing or feeling unable to get enough air.<br/>
                            4- A condition that causes infrequent bowel movements and difficulty emptying the bowels.<br/>
                            5- A sick or queasy feeling in the stomach that often leads to the urge to vomit.<br/>
                            6- The act of releasing air or gas from the stomach through the mouth.<br/>
                            7- The backflow of stomach acid into the esophagus, which can cause irritation or discomfort in the chest or throat.<br/>
                            8- A feeling of heat, stinging, or irritation in the body.<br/>
                            9- The need to urinate more often than normal, usually in small amounts.<br/>
                            10- An uncomfortable sensation that creates the urge to scratch.<br/>
                            11- A high-pitched whistling sound heard during breathing.<br/>
                            12- A reaction of body tissues that may cause swelling, redness, warmth, or discomfort.<br/>
                            13- A forceful expulsion of air from the lungs, often caused by irritation or illness.<br/>
                            14- The passage of loose or watery stool multiple times in a short period.<br/>
                        </p>
                    </div>
                    <div className="w-full text-start">
                        <h6 className="text-lg cursive underline decoration-violet-500 underline-offset-2">VERTICAL</h6>
                        <p className="text-start">
                            15- The forceful expulsion of stomach contents through the mouth.<br/>
                            16- A visible skin eruption that may appear red, irritated, itchy, or swollen.<br/>
                            17- A temporary blackout resulting in loss of consciousness.<br/>
                            18- An elevated body temperature.<br/>
                            19- An involuntary movement that causes part of the body to shake repeatedly.<br/>
                            20- A sensation of coldness often accompanied by shivering.<br/>
                            21- A feeling of fullness or swelling in the abdomen.<br/>
                            22- An allergic skin reaction that causes itchy, swollen patches or welts.<br/>
                            23- A sudden episode of abnormal electrical activity in the brain.<br/>
                            24- Pain or discomfort when an area is touched or pressed.<br/>
                            25- A severe headache often accompanied by nausea or sensitivity to light.<br/>
                            26- Air trapped in the digestive system that may cause discomfort.<br/>
                        </p>
                    </div>
                </div>
                <div className="mt-8 flex justify-center gap-4">
                    <button
                        onClick={revealAllAnswers}
                        className="px-8 py-3 bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-lg transition-colors"
                    >
                        Show answers
                    </button>

                    <button
                        onClick={() => setUserAnswers({})}
                        className="px-8 py-3 bg-gray-600 hover:bg-gray-700 text-white font-semibold rounded-lg transition-colors"
                    >
                        Clear all
                    </button>
                </div>
                <div className="flex flex-col items-start w-full justify-center p-8 gap-4">
                    <h6 className="italic">Want to learn more about different symptoms?</h6>
                    <p>Learning doesn't stop when the lesson ends. If you'd like to continue expanding your medical vocabulary, the resources below are a great place to start. They provide clear explanations of common symptoms, conditions, treatments, and healthcare topics that interpreters hear every day. <br/>The more exposure you have to medical terminology, the more confident and comfortable you'll become during real interpreting encounters.</p>
                    <Link href="https://medlineplus.gov/symptoms.html?utm_source" className="text-blue-500 underline hover:text-white">Symptoms: MedlinePlus</Link>
                    <Link href="https://www.mayoclinic.org/symptoms" className="text-blue-500 underline hover:text-white">Symptoms - Symptoms - Mayo Clinic 
</Link>
                    <Link href="https://my.clevelandclinic.org/health?utm_source=chatgpt.com" className="text-blue-500 underline hover:text-white">Medical Questions & Answers | Cleveland Clinic </Link>
                </div>
            </Class>
        </div>                      
    )
}