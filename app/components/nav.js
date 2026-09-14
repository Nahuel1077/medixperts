'use client'
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Roboto_Mono } from 'next/font/google';


const robotoMono = Roboto_Mono({ subsets: ['latin'] })

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 800) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`flex flex-row h-[100px] text-white items-center justify-between p-6 border-none fixed w-full z-20 transition-all duration-300
        ${scrolled 
          ? 'bg-[url(/img/blank-bg.jpg)] shadow-lg shadow-black/30 bg-bottom xl:bg-no-repeat bg-cover' 
          : 'shadow-black shadow-[0px_0px_3px_1px] xl:shadow-none bg-[url(/img/blank-bg.jpg)] xl:bg-none bg-bottom xl:bg-no-repeat bg-cover'
        }`}
    >
      <Link href="/">
        <Image 
          width={200} 
          height={200} 
          alt="logo" 
          src="/img/logo.svg" 
          className="self-start transition-all" 
        />
      </Link>

      <ul className={robotoMono.className + " " + (menuOpen 
        ? "flex flex-col md:flex-row absolute top-[100%] border-b-[1px] border-gray-500 p-4 shadow-md shadow-black z-50 left-0 w-full items-center gap-8 items-end bg-[#e7e7e7] text-black" 
        : "hidden md:flex flex-row gap-8 items-center"
      )}>
        <Link href="/#products" className="hover:opacity-75 text-lg">Material</Link>
        <Link href="/about-us" className="hover:opacity-75 text-lg">About us</Link>
        <Link href="/log-in">
          <button className="callToAction button h-[35px] rounded-md">Log in</button>
        </Link>
        <Link href="/enroll">
          <button className="callToAction2 h-[35px] button rounded-md">Register</button>
        </Link>
      </ul>

      <button 
        onClick={() => setMenuOpen(!menuOpen)} 
        className="md:hidden invert"
      >
        <Image src="/img/menu.svg" width={25} height={25} alt="menu"/>
      </button>
    </nav>
  )
}