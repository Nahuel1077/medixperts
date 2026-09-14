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
  unitTitle: "Lesson 1: Medical Terminology – Part 4: Types of Pain",
  description: null,
  nextLesson: "/material/unit-5/lesson-1/part-5",
  prevLesson: "/material/unit-5/lesson-1/part-3",
  restart:"/material/unit-5",
  courseNumber: 5,
  currentStep: 2,
  totalSteps: 4,
};

export default function Lesson1() {
    const { user, loading } = useAuth();

    if (loading) {return <div className="flex justify-center items-center h-screen">
        <div className="w-12 h-12 border-4 border-gray-300 border-t-black rounded-full animate-spin"></div>
        </div>
    };

    return(
        <div className="flex xl:flex-row flex-col bg-black">
            <Aside/>
            <Class lessonData={lessonData}>
                <table className="bg-white text-black table-fixed w-full border-2 border-blue-500">
                    <tbody className="divide-x divide-y divide-blue-500">
                        <tr className="bg-blue-500 text-white">
                            <th className="tableBorder">Pain Type</th>
                            <th className="tableBorder">Spanish Interpretation</th>
                            <th className="tableBorder">Description</th>
                            <th className="tableBorder">Common Severity</th>
                            <th className="tableBorder">Frequently Associated With</th>
                        </tr>
                        <tr className="bg-blue-100">
                            <td className="tableBorder p-2">Aching Pain</td>
                            <td className="tableBorder p-2">Dolor persistente</td>
                            <td className="tableBorder p-2">Continuous discomfort or soreness</td>
                            <td className="tableBorder p-2">Mild-Moderate</td>
                            <td className="tableBorder p-2">Viral illnesses, overuse injuries</td>
                        </tr>
                        <tr>
                            <td className="tableBorder p-2">Acute Pain</td>
                            <td className="tableBorder p-2">Dolor agudo</td>
                            <td className="tableBorder p-2">Sudden pain that develops quickly and is usually short-lived</td>
                            <td className="tableBorder p-2">Mild-Severe</td>
                            <td className="tableBorder p-2">Injuries, fractures, surgeries, infections</td>
                        </tr>
                        <tr className="bg-blue-100">
                            <td className="tableBorder p-2">Burning Pain</td>
                            <td className="tableBorder p-2">Dolor ardiente</td>
                            <td className="tableBorder p-2">Feels hot, stinging, or burning</td>
                            <td className="tableBorder p-2">Moderate-Severe</td>
                            <td className="tableBorder p-2">Acid reflux, nerve damage</td>
                        </tr>
                        <tr>
                            <td className="tableBorder p-2">Chronic Pain</td>
                            <td className="tableBorder p-2">Dolor crónico</td>
                            <td className="tableBorder p-2">Long-lasting pain that persists for an extended period</td>
                            <td className="tableBorder p-2" >Mild-Severe</td>
                            <td className="tableBorder p-2">Arthritis, fibromyalgia, chronic back pain</td>
                        </tr>
                        <tr className="bg-blue-100">
                            <td className="tableBorder p-2">Colicky Pain</td>
                            <td className="tableBorder p-2">Dolor cólico</td>
                            <td className="tableBorder p-2">Comes in waves with periods of relief between episodes</td>
                            <td className="tableBorder p-2">Moderate-Severe</td>
                            <td className="tableBorder p-2">Kidney stones, gallstones, bowel obstruction</td>
                        </tr>
                        <tr>
                            <td className="tableBorder p-2">Cramping Pain</td>
                            <td className="tableBorder p-2">Dolor tipo cólico/calambre</td>
                            <td className="tableBorder p-2">Pain caused by involuntary muscle contractions</td>
                            <td className="tableBorder p-2">Mild-Severe</td>
                            <td className="tableBorder p-2">Menstruation, gastrointestinal disorders</td>
                        </tr>
                        <tr className="bg-blue-100">
                            <td className="tableBorder p-2">Dull Pain</td>
                            <td className="tableBorder p-2">Dolor sordo</td>
                            <td className="tableBorder p-2">Constant, lingering ache</td>
                            <td className="tableBorder p-2">Mild-Moderate</td>
                            <td className="tableBorder p-2">Muscle strain, arthritis</td>
                        </tr>
                        <tr>
                            <td className="tableBorder p-2">Phantom Pain</td>
                            <td className="tableBorder p-2">Dolor fantasma</td>
                            <td className="tableBorder p-2">Pain felt in a limb that has been removed</td>
                            <td className="tableBorder p-2">Moderate-Severe</td>
                            <td className="tableBorder p-2">Post-amputation patients</td>
                        </tr>
                        <tr className="bg-blue-100">
                            <td className="tableBorder p-2">Radiating Pain</td>
                            <td className="tableBorder p-2">Dolor irradiante</td>
                            <td className="tableBorder p-2">Begins in one area and spreads to another part of the body</td>
                            <td className="tableBorder p-2">Mild-Severe</td>
                            <td className="tableBorder p-2">Heart attack, herniated discs</td>
                        </tr>
                        <tr>
                            <td className="tableBorder p-2">Sharp Pain</td>
                            <td className="tableBorder p-2">Dolor agudo/punzante</td>
                            <td className="tableBorder p-2">Sudden, piercing sensation</td>
                            <td className="tableBorder p-2">Moderate-Severe</td>
                            <td className="tableBorder p-2">Kidney stones, injuries</td>
                        </tr>
                        <tr className="bg-blue-100">
                            <td className="tableBorder p-2">Shooting Pain</td>
                            <td className="tableBorder p-2">Dolor irradiado repentino</td>
                            <td className="tableBorder p-2">Sudden pain that radiates along a nerve pathway</td>
                            <td className="tableBorder p-2">Moderate-Severe</td>
                            <td className="tableBorder p-2">Sciatica, nerve injuries</td>
                        </tr>
                        <tr>
                            <td className="tableBorder p-2">Squeezing Pain</td>
                            <td className="tableBorder p-2">Dolor opresivo</td>
                            <td className="tableBorder p-2">Pressing, tightening sensation</td>
                            <td className="tableBorder p-2">Moderate-Severe</td>
                            <td className="tableBorder p-2">Heart attack, angina</td>
                        </tr>
                        <tr className="bg-blue-100">
                            <td className="tableBorder p-2">Stabbing Pain</td>
                            <td className="tableBorder p-2">Dolor punzante</td>
                            <td className="tableBorder p-2">Feels like being stabbed or pierced repeatedly</td>
                            <td className="tableBorder p-2">Severe</td>
                            <td className="tableBorder p-2">Gallstones, nerve compression</td>
                        </tr>
                        <tr>
                            <td className="tableBorder p-2">Tenderness</td>
                            <td className="tableBorder p-2">Sensibilidad (al tacto)</td>
                            <td className="tableBorder p-2">Mild discomfort when touched</td>
                            <td className="tableBorder p-2">Mild-Moderate</td>
                            <td className="tableBorder p-2">Inflammation, bruises, infections</td>
                        </tr>
                        <tr className="bg-blue-100">
                            <td className="tableBorder p-2">Throbbing Pain</td>
                            <td className="tableBorder p-2">Dolor pulsátil/palpitante</td>
                            <td className="tableBorder p-2">Rhythmic, pulsating sensation</td>
                            <td className="tableBorder p-2">Mild</td>
                            <td className="tableBorder p-2">Muscle strain, minor injuries</td>
                        </tr>
                    </tbody>
                </table>
                <h1 className="text-2xl text-start pt-8 pb-8">Important Pain Terminology Clarifications</h1>
                <LessonContent/>
                <div className="flex flex-col gap-2">
                    <Link href="https://medlineplus.gov/pain.html?utm_" className="text-blue-500 hover:text-white underline decoration-blue-500 hover:decoration-white">Pain | MedlinePlus</Link>
                    <Link href="https://www.ninds.nih.gov/health-information/disorders/pain?utm_" className="text-blue-500 hover:text-white underline decoration-blue-500 hover:decoration-white">Pain | National Institute of Neurological Disorders and Stroke </Link>
                </div>
            </Class>
        </div>
    )
}