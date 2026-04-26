'use client'
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import 'animate.css';



export default function Class() {

    const [openMenu, setOpenMenu] = useState(false);

    return(
        <div className="flex flex-col items-center justify-center h-screen w-full bg-black">
            <nav className="absolute hidden sm:top-[50px] w-1/2 text-2xl text-white overflow-hidden flex flex-row justify-center select-none">Nombre de lección</nav>
            <div className="text-justify">
                <h1 className="text-4xl font-bold text-white mb-4 select-none">Welcome to the Class!</h1>
            </div>
            <div className="flex flex-row sm:gap-5 gap-2 justify-around w-1/2 bottom-0 absolute">
                <button>
                    <Image src="/img/left.svg" alt="Back" width={50} height={50} className="rounded-lg invert"/>
                </button>
                <button>
                    <Link href="/material/lesson-1#1">
                        <Image src="/img/restart.svg" alt="Restart Lesson" width={50} height={50} className="rounded-lg invert"/>
                    </Link>
                </button>
                <button onClick={() => setOpenMenu(!openMenu)}>
                    <Image src="/img/menu.svg" alt="Menu" width={50} height={50} className="rounded-lg invert"/>
                </button>
                <button>
                    <Image src="/img/right.svg" alt="Forward" width={50} height={50} className="rounded-lg invert"/>
                </button>
            </div>
            {openMenu? <div className="animate__animated animate__fadeInLeft bg-white p-4 absolute h-[100vh] w-[200px] sm:w-[250px] left-0 bg-linear-to-t from-white to-[#2563EB] flex flex-col items-center justify-center">Menu content goes here</div> : null}
        </div>
    )
}