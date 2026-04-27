'use client'
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Nav(){

    const [menuOpen, setMenuOpen] = useState(false);


    return (
    <nav className="flex flex-row h-[100px] items-center justify-between p-6 border-b-gray-500 border-[1px] shadow-xs shadow-black fixed w-full bg-linear-to-r from-[#2563EB] to-white z-50">
          <Link href="/">
          <Image
          className="h-18 w-24 self-start"
          width={100}
          height={100}
          alt="logo"
          src="/img/logo-medixperts.svg"
          />
          </Link>
          <ul className={menuOpen ? "flex flex-col md:flex-row absolute top-[101%] border-b-[1px] border-gray-500 p-4 shadow-md shadow-black z-50 left-0 w-full items-center gap-8 items-end bg-white" : "hidden md:flex flex-row gap-8 items-center"}>
            <Link href="/#products" className="hover:opacity-75 text-lg">Products</Link>
            <Link href="/" className="hover:opacity-75 text-lg">Material</Link>
            <Link href="/about-us" className="hover:opacity-75 text-lg">About us</Link>
            <Link href="/log-in"><button className="callToAction button h-[35px] rounded-md">Log in</button></Link>
            <Link href="https://forms.gle/mc1BrCCgQN4gDLtr8"><button className="callToAction2 h-[35px] button rounded-md">Register</button></Link>
          </ul>
          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden"><Image src="/img/menu.svg" width={25} height={25} alt="menu"/></button>
    </nav>
    )
}