'use client'
import { useState, useEffect, useRef } from 'react';
import { useAuth } from "../../../../hooks/useAuth";
import Link from 'next/link';
import Image from 'next/image';
import Aside from "../../../../components/aside";
import Class from "../../../../components/class";
import {PageFlip} from 'page-flip';


const lessonData = {
    id: "unit5-title",
    unitTitle: "Lesson 1: Medical Terminology – Part 5: Common Vaccinations (Vaccine Records)",
    description: null,
    nextLesson: "/material/unit-5/lesson-1/part-6",
    prevLesson: "/material/unit-5/lesson-1/part-4",
    restart:"/material/unit-5",
    courseNumber: 5,
    currentStep: 2,
    totalSteps: 4,
};

export default function Lesson1() {
    const { user, loading } = useAuth();
    const bookRef = useRef(null);
    const pageFlipRef = useRef(null);

    useEffect(() => {
    let initialized = false;

    const init = () => {
        if (initialized || !bookRef.current) return;

        initialized = true;

        pageFlipRef.current = new PageFlip(bookRef.current, {
            width: 500,
            height: 620,
            size: "stretch",
            drawShadow: true,
            flippingTime: 650,           // más rápido
            usePortrait: true,
            autoSize: true,
            showCover: true,
            mobile: true,
            maxShadowOpacity: 0.6,       // sombra más suave
            swipeSpeed: 0.8,
        });

        const pages = document.querySelectorAll('.page');
        console.log('Páginas encontradas:', pages.length);

        if (pages.length > 0) {
            pageFlipRef.current.loadFromHTML(pages);
        }
    };

    // Intentar varias veces
    const interval = setInterval(init, 100);
    setTimeout(() => clearInterval(interval), 2000); // máximo 2 segundos

    return () => clearInterval(interval);
    }, []);

    if (loading) {return <div className="flex justify-center items-center h-screen">
        <div className="w-12 h-12 border-4 border-gray-300 border-t-black rounded-full animate-spin"></div>
        </div>
    };

    return(
        <div className="flex xl:flex-row flex-col bg-black">
            <Aside/>
            <Class lessonData={lessonData}>
                <p className="p-4">In this simulated Vaccination Record Chart, you will find some of the vaccines most commonly encountered during medical interpreting assignments.<br/> 
                    Each record includes the vaccine's purpose, recommended schedule, and the age groups for which it is typically administered, helping you build confidence when interpreting immunization-related conversations across a variety of healthcare settings.
                </p>
                <h1 className="text-4xl font-bold text-center mb-10">Vaccine Records Book</h1>

                    <div className="flex justify-center gap-4 mb-8">
                        <button onClick={() => pageFlipRef.current?.flipPrev()} className="px-6 py-3 bg-gray-700 text-white rounded-lg hover:bg-gray-800">
                            ← Anterior
                        </button>
                        <span className="text-2xl font-medium self-center">
                            Página <span id="current-page page">1</span> de <span id="total-pages">5</span>
                        </span>
                        <button onClick={() => pageFlipRef.current?.flipNext()} className="px-6 py-3 bg-gray-700 text-white rounded-lg hover:bg-gray-800">
                            Siguiente →
                        </button>
                    </div>

                    <div className="flex justify-center">
                        <div ref={bookRef} className="flip-book">
                            {/* Páginas */}
                            <div className="page page-cover page-cover-top" data-density="hard">
                                <div className="page-content text-center text-black">
                                    <h2>Common Vaccinations Reference Guide</h2>
                                    <h3>Medical Terminology Course</h3>
                                </div>
                            </div>

                            <div className="page">
                                <div className="page-content flex flex-col items-center justify-between gap-16">
                                    <div className='flex flex-col items-center gap-1'>
                                        <h2 className="page-header text-black font-bold">COVID-19 Vaccine</h2>
                                        <h6 className='italic text-blue-700 text-xl'>Vacuna contra el COVID-19</h6>
                                    </div>
                                    <div className="page-text text-black"><strong>Purpose: </strong><br/>
                                        Protects against COVID-19 and helps reduce the risk of severe illness, hospitalization, and death.<br/>
                                        <strong>Frequency:</strong><br/>
                                        Primary series followed by updated booster doses as recommended.<br/>
                                        <strong>Recommended Ages</strong><br/>
                                        Everyone 6 months of age and older.
                                    </div>
                                </div>
                            </div>

                            <div className="page">
                                <div className="page-content flex flex-col items-center justify-between gap-16">
                                    <div className='flex flex-col items-center gap-1'>
                                        <h2 className="page-header text-black font-bold">Hepatitis A Vaccine (HepA)</h2>
                                        <h6 className='italic text-blue-700 text-xl'>Vacuna contra la Hepatitis A (HepA)</h6>
                                    </div>
                                    <div className="page-text text-black"><strong>Purpose: </strong><br/>
                                        Protects against Hepatitis B virus infection and chronic liver disease.<br/>
                                        <strong>Frequency:</strong><br/>
                                        Three-dose series.<br/>
                                        <strong>Recommended Ages</strong><br/>
                                        First dose at birth, followed by additional doses during infancy.
                                    </div>
                                </div>
                            </div>

                            <div className="page">
                                <div className="page-content flex flex-col items-center justify-between gap-16">
                                    <div className='flex flex-col items-center gap-1'>
                                        <h2 className="page-header text-black font-bold">Human Papillomavirus Vaccine (HPV)</h2>
                                        <h6 className='italic text-blue-700 text-xl'>Vacuna contra el Virus del Papiloma Humano (VPH)</h6>
                                    </div>
                                    <div className="page-text text-black"><strong>Purpose: </strong><br/>
                                        Protects against HPV-related cancers and genital warts.<br/>
                                        <strong>Frequency:</strong><br/>
                                        Two or three doses depending on the age at vaccination.<br/>
                                        <strong>Recommended Ages</strong><br/>
                                        Typically recommended at 11–12 years of age, but may begin as early as age 9.
                                    </div>
                                </div>
                            </div>

                            <div className="page">
                                <div className="page-content flex flex-col items-center justify-between gap-16">
                                    <div className='flex flex-col items-center gap-1'>
                                        <h2 className="page-header text-black font-bold">Influenza Vaccine (Flu Shot)</h2>
                                        <h6 className='italic text-blue-700 text-xl'>Vacuna contra la Influenza</h6>
                                    </div>
                                    <div className="page-text text-black"><strong>Purpose: </strong><br/>
                                        Protects against seasonal influenza.<br/>
                                        <strong>Frequency:</strong><br/>
                                        Annually.s<br/>
                                        <strong>Recommended Ages</strong><br/>
                                        Everyone 6 months of age and older.
                                    </div>
                                </div>
                            </div>

                            <div className="page">
                                <div className="page-content flex flex-col items-center justify-between gap-16">
                                    <div className='flex flex-col items-center gap-1'>
                                        <h2 className="page-header text-black font-bold">Measles, Mumps, and Rubella Vaccine (MMR)</h2>
                                        <h6 className='italic text-blue-700 text-xl'>Vacuna contra Sarampión, Paperas y Rubéola (MMR)</h6>
                                    </div>
                                    <div className="page-text text-black"><strong>Purpose: </strong><br/>
                                        Protects against measles, mumps, and rubella.<br/>
                                        <strong>Frequency:</strong><br/>
                                        Two-dose series.<br/>
                                        <strong>Recommended Ages</strong><br/>
                                        First dose at 12–15 months, second dose at 4–6 years.
                                    </div>
                                </div>
                            </div>

                            <div className="page">
                                <div className="page-content flex flex-col items-center justify-between gap-16">
                                    <div className='flex flex-col items-center gap-1'>
                                        <h2 className="page-header text-black font-bold">Pneumococcal Vaccine (PCV)</h2>
                                        <h6 className='italic text-blue-700 text-xl'>Vacuna antineumocócica</h6>
                                    </div>
                                    <div className="page-text text-black"><strong>Purpose: </strong><br/>
                                        Protects against pneumococcal pneumonia, meningitis, and bloodstream infections.<br/>
                                        <strong>Frequency:</strong><br/>
                                        Childhood vaccination series or adult vaccination depending on age and medical condition.<br/>
                                        <strong>Recommended Ages</strong><br/>
                                        Infants, adults 65 years and older, and individuals with certain chronic medical conditions.
                                    </div>
                                </div>
                            </div>

                            <div className="page">
                                <div className="page-content flex flex-col items-center justify-between gap-16">
                                    <div className='flex flex-col items-center gap-1'>
                                        <h2 className="page-header text-black font-bold">Polio Vaccine (Inactivated Poliovirus Vaccine – IPV)</h2>
                                        <h6 className='italic text-blue-700 text-xl'>Vacuna inactivada contra la poliomielitis</h6>
                                    </div>
                                    <div className="page-text text-black"><strong>Purpose: </strong><br/>
                                        Protects against poliovirus.<br/>
                                        <strong>Frequency:</strong><br/>
                                        Four-dose series.<br/>
                                        <strong>Recommended Ages</strong><br/>
                                        2 months, 4 months, 6–18 months, and 4–6 years.
                                    </div>
                                </div>
                            </div>

                            <div className="page">
                                <div className="page-content flex flex-col items-center justify-between gap-16">
                                    <div className='flex flex-col items-center gap-1'>
                                        <h2 className="page-header text-black font-bold">Recombinant Zoster Vaccine (RZV)</h2>
                                        <h6 className='italic text-blue-700 text-xl'>Vacuna Recombinante contra el Herpes Zóster (RZV)</h6>
                                    </div>
                                    <div className="page-text text-black">
                                        <strong>Common brand name: </strong><br/>
                                        Shingrix<br/>
                                        <strong>Purpose: </strong><br/>
                                        Protects against shingles (herpes zoster) and postherpetic neuralgia.<br/>
                                        <strong>Frequency:</strong><br/>
                                        Two-dose series.<br/>
                                        <strong>Recommended Ages</strong><br/>
                                        Adults 50 years of age and older, and certain immunocompromised adults.
                                    </div>
                                </div>
                            </div>

                            <div className="page">
                                <div className="page-content flex flex-col items-center justify-between gap-16">
                                    <div className='flex flex-col items-center gap-1'>
                                        <h2 className="page-header text-black font-bold">Respiratory Syncytial Virus Vaccine (RSV)</h2>
                                        <h6 className='italic text-blue-700 text-xl'>Vacuna contra el Virus Respiratorio Sincitial (VRS)</h6>
                                    </div>
                                    <div className="page-text text-black">
                                        <strong>Purpose: </strong><br/>
                                        Protects against severe RSV infection.<br/>
                                        <strong>Frequency:</strong><br/>
                                        Single seasonal dose when indicated.<br/>
                                        <strong>Recommended Ages</strong><br/>
                                        Older adults, pregnant women, and certain high-risk infants.
                                    </div>
                                </div>
                            </div>

                            <div className="page">
                                <div className="page-content flex flex-col items-center justify-between gap-16">
                                    <div className='flex flex-col items-center gap-1'>
                                        <h2 className="page-header text-black font-bold">Rotavirus Vaccine (RV)</h2>
                                        <h6 className='italic text-blue-700 text-xl'>Vacuna contra el Rotavirus</h6>
                                    </div>
                                    <div className="page-text text-black">
                                        <strong>Purpose: </strong><br/>
                                        Protects against rotavirus, a virus that causes severe diarrhea, vomiting, and dehydration in infants.<br/>
                                        <strong>Frequency:</strong><br/>
                                        Two or three doses depending on the vaccine manufacturer.<br/>
                                        <strong>Recommended Ages</strong><br/>
                                        Administered during infancy, beginning at 2 months of age.
                                    </div>
                                </div>
                            </div>

                            <div className="page">
                                <div className="page-content flex flex-col items-center justify-between gap-16">
                                    <div className='flex flex-col items-center gap-1'>
                                        <h2 className="page-header text-black font-bold">Tetanus, Diphtheria, and Pertussis Vaccine (Tdap)</h2>
                                        <h6 className='italic text-blue-700 text-xl'>Tétanos, Difteria y Tos ferina acelular (Tdap)</h6>
                                    </div>
                                    <div className="page-text text-black">
                                        <strong>Purpose: </strong><br/>
                                        Provides protection against tetanus, diphtheria, and pertussis (whooping cough).<br/>
                                        <strong>Frequency:</strong><br/>
                                        One dose during adolescence, one dose during every pregnancy, followed by booster doses every 10 years.<br/>
                                        <strong>Recommended Ages</strong><br/>
                                        Typically administered at 11–12 years of age, during each pregnancy, and throughout adulthood.
                                    </div>
                                </div>
                            </div>

                            <div className="page">
                                <div className="page-content flex flex-col items-center justify-between gap-16">
                                    <div className='flex flex-col items-center gap-1'>
                                        <h2 className="page-header text-black font-bold">Varicella Vaccine</h2>
                                        <h6 className='italic text-blue-700 text-xl'>Vacuna contra la Varicela</h6>
                                    </div>
                                    <div className="page-text text-black">
                                        <strong>Purpose: </strong><br/>
                                        Protects against chickenpox (varicella).<br/>
                                        <strong>Frequency:</strong><br/>
                                        Two-dose series.<br/>
                                        <strong>Recommended Ages</strong><br/>
                                        First dose at 12–15 months, second dose at 4–6 years.
                                    </div>
                                </div>
                            </div>

                            <div className="page page-cover page-cover-bottom" data-density="hard">
                                <div className="page-content">
                                    <div className='flex flex-col items-center gap-2'>
                                        <h6 className="text-black text-xl font-bold">Continue Expanding Your Knowledge</h6>
                                        
                                        <div className="page-text text-black overflow-y-scroll">
                                            Remember that the purpose of this activity is to provide a general overview of some of the vaccination-related terms that medical interpreters commonly encounter during their daily assignments.<br/>
                                            The more you explore these topics and become familiar with vaccination schedules, terminology, and their clinical purpose, the easier it becomes to accurately interpret conversations in real medical encounters.<br/>
                                            If you would like to continue expanding your medical vocabulary and learn more about immunizations, we encourage you to explore the following trusted online resources:<br/>
                                            <ul className='list-disc flex flex-col'>
                                                <Link href="https://www.cdc.gov/vaccines/" className='text-blue-500 hover:text-white hover:underline hover:decoration-white'>Vaccines & Immunizations | CDC</Link>
                                                <Link href="https://medlineplus.gov/vaccines.html" className='text-blue-500 hover:text-white hover:underline hover:decoration-white'>Vaccines | Immunization | Inoculation | MedlinePlus</Link>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </Class>
        </div>
    )
}