'use client'
import Glossary from "../components/glossary";
import Aside from "../components/aside";
import { Montserrat } from "next/font/google";
import { Roboto_Mono } from "next/font/google";
import { useAuth } from "../hooks/useAuth";

const montserrat = Montserrat({ subsets: ['latin'] });
const roboto_mono = Roboto_Mono({ subsets: ['latin'] });

export default function Glosario(){
    const { user, loading } = useAuth();
    
      if (loading ) {return <div className="flex justify-center items-center h-screen">
        <div className="w-12 h-12 border-4 border-gray-300 border-t-black rounded-full animate-spin"></div>
        </div>
      };
    return(
        <main className="flex xl:flex-row flex-col gap-6">
            <Aside />
            <div className="flex flex-col items-center w-full p-8">
                <h1 className={montserrat.className + " text-2xl text-black"}>Glossary</h1>
                <Glossary className="h-lvh xl:h-[800px]"/>

            </div>
        </main>
    )
}