/* 'use client'
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Montserrat } from "next/font/google";
import Notes from '../components/notes';
import Glossary from '../components/glossary';
import { useAuth } from '../hooks/useAuth';
import { useUserInfo } from "../hooks/useUserInfo";

const montserrat = Montserrat({ subsets: ['latin'] });

export default function ExtraPractice() {
    const { myInfo, loadingInfo } = useUserInfo();
    const [counter, setCounter] = useState(0);
    const { user, loading } = useAuth();
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
      const interval = setInterval(() => {
      setCounter((prev) => prev + 1);
      }, 1000);

      return () => clearInterval(interval);
    }, [])
    const horas = String(Math.floor(counter / 3600)).padStart(2, '0');
    const minutos = String(Math.floor((counter % 3600) / 60)).padStart(2, '0');
    const segundos = String(counter % 60).padStart(2, '0');




    if (loading || loadingInfo) {return <div className="flex justify-center items-center h-screen">
      <div className="w-12 h-12 border-4 border-gray-300 border-t-black rounded-full animate-spin"></div>
      </div>
    };

    return(

    <div className="flex flex-row h-screen overflow-x-hidden">
        <aside className={montserrat.className + " flex-col items-center gap-14 p-10 hidden xl:flex md:w-[250px] h-screen bg-linear-to-t from-[#12315f] to-[#12335f]"}>
            <div className={montserrat.className + "flex flex-col items-center text-center gap-2 text-white"}>
                <h3>Agent:</h3> 
                <h3>{user.full_name}</h3>
            </div>
            <ul className="flex flex-col items-center gap-20">
                <li className="flex flex-col items-center border-2 border-black rounded-2xl hover:shadow-none shadow-sm shadow-black bg-linear-to-b from-gray-600 to-gray-900 p-3 gap-2 w-[100px]"><Image className="invert" src="/img/user.svg" alt="User" width={40} height={40}/><span className="w-[95%] h-[1px] bg-gray-500"></span><p href="/" className="text-white font-semibold hover:opacity-75">Profile</p></li>
                <li className="flex flex-col items-center border-2 border-black rounded-2xl hover:shadow-none shadow-sm shadow-black bg-linear-to-b from-gray-600 to-gray-900 p-3 gap-2 w-[100px]"><Image className="invert grayscale" src="/img/settings.svg" alt="Settings" width={40} height={40}/><span className="w-[95%] h-[1px] bg-gray-500"></span><p href="/#" className="text-white font-semibold hover:opacity-75">Settings</p></li>
                <li className="flex flex-col items-center border-2 border-black rounded-2xl hover:shadow-none shadow-sm shadow-black bg-linear-to-b from-gray-600 to-gray-900 p-3 gap-2 w-[100px]"><Image className="invert" src="/img/break.svg" alt="Break" width={40} height={40}/><span className="w-[95%] h-[1px] bg-gray-500"></span><p href="/#" className="text-white font-semibold hover:opacity-75">Break</p></li>
                <Link href="/dashboard" className="text-white font-semibold hover:opacity-75"><li className="flex flex-col items-center border-2 border-black rounded-2xl hover:shadow-none shadow-sm shadow-black bg-linear-to-b from-gray-600 to-gray-900 p-3 gap-2 w-[100px]"><Image className="invert" src="/img/log-out.svg" alt="Log Out" width={40} height={40}/><span className="w-[95%] h-[1px] bg-gray-500"></span>Log Out</li></Link>
            </ul>
            <Image src="/img/logo3d.png" alt="Logo" width={100} height={100}/>
        </aside>
        <div className="flex flex-col gap-6 bg-radial-[at_1%_1%] from-[#dae1eb] via-[#d8e0e9] to-[#919eb0] to-95%">
            <div className="flex flex-col items-start">
                <h1 className={montserrat.className + "text-white text-2xl font-bold p-2"}>Queue Time: {horas}:{minutos}:{segundos}</h1>
            </div>
            <div className="flex flex-col items-start">
                <h1 className={montserrat.className + "text-white text-2xl font-bold bg-[#ddffdd] w-[100vw] p-2"}>Status: Available</h1>
            </div>
            
            <Notes />
            <div className='absolute sm:left-[60%] top-[50%] flex flex-col items-center gap-6'>
                <div className={isOpen? 'bg-gray-200  z-50  w-[400px] h-[400px] rounded-xl flex flex-col items-center' : "hidden"}>
                    <Glossary/>
                </div> 
                <button className='absolute self-center sm:left-[70%] top-[90%] z-40 flex flex-col items-center border-2 border-black rounded-2xl hover:shadow-none shadow-sm shadow-black bg-linear-to-b from-gray-600 to-gray-900 p-3 gap-2 w-[100px] text-white font-bold' onClick={() => setIsOpen(!isOpen)}><Image className="invert" src="/img/globe.svg" alt="Break" width={40} height={40}/>Glossary</button>
            </div>
        </div>
    </div>
    )
} */