'use client'
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabaseClient';

export default function Aside(){

    const [menuOpen, setMenuOpen] = useState(false);
    const router = useRouter();

    const handleLogout = async () => {
        await supabase.auth.signOut();
        router.push('/log-in');
    };

    return(
        <div className="w-full sm:w-[250px]">
            <aside className="flex-col items-start justify-start p-10 hidden sm:flex md:w-[250px] h-screen bg-linear-to-t from-white to-[#2563EB]">
                            <ul className="flex flex-col items-start gap-10">
                                <li><Image width={100} height={100} alt="logo" src="/img/logo-medixperts.svg"/></li>
                                <Link href="/dashboard" className="text-white font-semibold">Dashboard</Link>
                                <Link href="/material" className="text-white font-semibold">Material</Link>
                                <Link href="/information" className="text-white font-semibold">Information</Link>
                                <Link href="/" className="text-white font-semibold">Support</Link>
                            </ul>
                            <button className="button callToAction2 absolute top-[90%]" onClick={handleLogout}>Log out</button>
                        </aside>
                        <nav className="flex flex-row w-full h-[100px] items-center justify-between p-6 border-b-gray-500 border-[1px] shadow-xs shadow-black bg-linear-to-r from-[#2563EB] to-white z-50 sm:hidden">
                                  <Image
                                  className="h-18 w-24 self-start"
                                  width={100}
                                  height={100}
                                  alt="logo"
                                  src="/img/logo-medixperts.svg"
                                  />
                                  <ul className={menuOpen ? "flex flex-col md:flex-row absolute top-[99px] z-50 left-0 w-full p-2 gap-8 items-end bg-linear-to-r from-[#2563EB] to-white  " : "hidden md:flex flex-row gap-8 items-center"}>
                                    <Link href="/dashboard" className="text-black font-semibold">Dashboard</Link>
                                    <Link href="/material" className="text-black font-semibold">Material</Link>
                                    <Link href="/information" className="text-black font-semibold">Information</Link>
                                    <Link href="/" className="text-black font-semibold">Support</Link>
                                  </ul>
                                  <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden"><Image src="/img/menu.svg" width={25} height={25} alt="menu"/></button>
                            </nav>
        </div>
    )
}