'use client'
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from 'next/navigation';
import { Roboto_Mono } from 'next/font/google'
import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://hhcyvpzrsclcdojxlkcf.supabase.co'
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
const supabase = createClient(supabaseUrl, supabaseKey)

const robotoMono = Roboto_Mono({ subsets: ['latin'] })

export default function InnerNav(){

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


    return (
    <nav className="flex flex-row h-[100px] items-center justify-between p-6 border-none fixed w-full bg-transparent text-white">
          <Link href="/">
          <Image
          className="h-[75px] w-auto self-start"
          width={300}
          height={300}
          alt="logo"
          src="/img/logo.svg"
          />
          </Link>
          <ul className={robotoMono.className + " " + (menuOpen ? "flex flex-col md:flex-row absolute top-[100%] border-b-[1px] border-gray-500 p-4 shadow-md shadow-black z-50 left-0 w-full items-center gap-8 items-end bg-linear-to-r from-[#2563EB] to-black text-white" : "hidden md:flex flex-row gap-8 items-center")}>
            <Link href="/dashboard" className="hover:opacity-75 text-lg">Dashboard</Link>
            <Link href="/material" className="hover:opacity-75 text-lg">Material</Link>
            <Link href="/about-us" className="hover:opacity-75 text-lg">About us</Link>
            <Link href="/" className="hover:opacity-75 text-lg">Support</Link>
            <Link href="/" className="hover:opacity-75 text-lg"><button onClick={logout}>Log out</button></Link>
          </ul>
          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden invert"><Image src="/img/menu.svg" width={25} height={25} alt="menu"/></button>
    </nav>
    )
}