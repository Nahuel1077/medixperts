'use client'
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from 'next/navigation';
import { Montserrat } from "next/font/google";
import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://hhcyvpzrsclcdojxlkcf.supabase.co'
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
const supabase = createClient(supabaseUrl, supabaseKey)

const montserrat = Montserrat({ subsets: ['latin'] });

export default function Aside(){

    const [menuOpen, setMenuOpen] = useState(false);
    const router = useRouter();

    const logout = async () => {
        const { error } = await supabase.auth.signOut();

        if (error) {
            console.error(error.message);
            return;
        }
        router.push('/log-in');
    };

    return(
        <div className="w-full xl:w-[250px]">
            
                <aside className={montserrat.className + " fixed flex-col items-start justify-start p-10 hidden xl:flex xl:w-[250px] h-screen bg-linear-to-t from-black to-[#2563EB]"}>
                                    <ul className="flex flex-col items-start gap-14">
                                        <li><Image width={200} height={200} alt="logo" src="/img/logo.svg"/></li>
                                        <Link href="/dashboard" className="text-white font-semibold hover:opacity-75 flex flex-row gap-2">
                                        <Image src="/img/home.svg" width={24} height={24} alt="Dashboard" className="invert"/>Dashboard</Link>
                                        <Link href="/material" className="text-white font-semibold hover:opacity-75 flex flex-row gap-2"> <Image src="/img/material.svg" width={24} height={24} alt="Material" className="invert"/>Material</Link> 
                                        <Link href="/glossary" className="text-white font-semibold hover:opacity-75 flex flex-row gap-2"> <Image src="/img/glossary.svg" width={24} height={24} alt="Material" className="invert"/>Glossary</Link>{/* 
                                        <Link href="/extra-practice" className="text-white font-semibold hover:opacity-75  flex flex-row gap-2"><Image src="/img/extra.svg" width={24} height={24} alt="Extra Practice" className="invert"/>Extra Practice</Link> */}
                                        <Link href="/information" className="text-white font-semibold hover:opacity-75  flex flex-row gap-2"><Image src="/img/information.svg" width={24} height={24} alt="Information" className="invert"/>Information</Link>
                                        <Link href="/hall-of-fame" className="text-white font-semibold hover:opacity-75  flex flex-row gap-2"><Image src="/img/cup.svg" width={24} height={24} alt="Hall of Fame"/>Hall of Fame</Link>
                                        <Link href="https://api.whatsapp.com/send/?phone=5491127194458&text=Hola,%20te%20hablo%20desde%20el%20sitio%20web%20de%20MediXperts&type=phone_number&app_absent=0" className="text-white font-semibold hover:opacity-75  flex flex-row gap-2"><Image src="/img/support.svg" width={24} height={24} alt="Support" className="invert"/>Support</Link>
                                    </ul>
                                    <button className="absolute top-[90%] rounded-lg text-white flex flex-row gap-2 font-semibold" onClick={logout}><Image src="/img/log-out.svg" width={24} height={24} alt="Log out" className="invert"/>Log out</button>
                            </aside>
                        <nav className={montserrat.className + " flex flex-row w-full h-[100px] items-center justify-between p-6 shadow-xs shadow-black bg-linear-to-r from-[#2563EB] to-white z-50 xl:hidden"}>
                                  <Image width={200} height={200} alt="logo" src="/img/logo.svg"/>
                                  <ul className={menuOpen ? "flex flex-col xl:flex-row absolute top-[99px] z-50 border-b-gray-400 border-b-[1px] left-0 w-full p-2 gap-8 items-end bg-linear-to-r from-[#2563EB] to-white  " : "hidden xl:flex flex-row gap-8 items-center"}>
                                    <Link href="/dashboard" className="text-black font-semibold">Dashboard</Link>
                                    <Link href="/material" className="text-black font-semibold">Material</Link> 
                                    <Link href="/glossary" className="text-black font-semibold">Glossary</Link>{/* 
                                    <Link href="/extra-practice" className="text-black font-semibold">Extra Practice</Link> */}
                                    <Link href="/information" className="text-black font-semibold">Information</Link>
                                    <Link href="/hall-of-fame" className="text-black font-semibold">Hall of Fame</Link>
                                    <Link href="https://api.whatsapp.com/send/?phone=5491127194458&text=Hola,%20te%20hablo%20desde%20el%20sitio%20web%20de%20MediXperts&type=phone_number&app_absent=0" className="text-black font-semibold">Support</Link>
                                  </ul>
                                  <button onClick={() => setMenuOpen(!menuOpen)} className="xl:hidden"><Image src="/img/menu.svg" width={25} height={25} alt="menu"/></button>
                            </nav>
        </div>
    )
}